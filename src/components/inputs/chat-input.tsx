import fileUploadIcon from "@/assets/svg/input-attachment.svg";
import sendIcon from "@/assets/svg/chat-send-icon.svg";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useSaveImage } from "@/hooks/query";
import { ChatSelecteFiles } from "../bottom-drawers/chat/select-file-drawer";

type ChatInputProps = {
  bgWhite?: boolean;
  handleMessage: (val: string, imageUrls?: string[]) => void;
};

export const ChatInput = ({ bgWhite, handleMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // NEW: arrays for files & previews
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // If your useSaveImage exposes mutateAsync (React Query default), prefer it.
  // Otherwise see the fallback wrapper below in uploadAllFiles().
  const {
    mutate: saveImage,
    isPending: uploadImageLoading,
    mutateAsync,
  } = useSaveImage(
    // onSuccess is not used here since we upload in batch below
    () => {}
  );

  const expanded =
    focused || message.trim().length > 0 || selectedFiles.length > 0;

  // Build previews & revoke on cleanup
  useEffect(() => {
    // revoke any existing object URLs
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Regenerate previews whenever files change
  useEffect(() => {
    // Revoke old ones first to avoid memory leaks
    setPreviewUrls((old) => {
      old.forEach((u) => URL.revokeObjectURL(u));
      return [];
    });

    const nextUrls = selectedFiles.map((f) => URL.createObjectURL(f));
    setPreviewUrls(nextUrls);
    if (nextUrls.length) {
      setOpenDrawer(true);
    }

    // Cleanup if files change again
    return () => {
      nextUrls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [selectedFiles]);

  const handleFilesPicked = (filesList?: FileList | null) => {
    if (!filesList || filesList.length === 0) {
      toast.error("No file selected");
      return;
    }

    // Convert to array, keep only images, optionally cap size
    const incoming = Array.from(filesList).filter((f) =>
      f.type.startsWith("image/")
    );
    if (incoming.length === 0) {
      toast.error("Only image files are allowed");
      return;
    }

    // Optional: prevent duplicates by name+size+lastModified
    const existingKey = (f: File) => `${f.name}-${f.size}-${f.lastModified}`;
    const existingSet = new Set(selectedFiles.map(existingKey));

    const deduped = incoming.filter((f) => !existingSet.has(existingKey(f)));
    if (deduped.length === 0) {
      toast.message("Those images are already selected");
      return;
    }

    setSelectedFiles((prev) => [...prev, ...deduped]);
  };

  const removeImageAt = (idx: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== idx));
    setPreviewUrls((prev) => {
      const toRemove = prev[idx];
      if (toRemove) URL.revokeObjectURL(toRemove);
      return prev.filter((_, i) => i !== idx);
    });
  };

  // Helper: upload all selected files and return array of uploaded URLs (strings)
  const uploadAllFiles = async (): Promise<string[]> => {
    if (selectedFiles.length === 0) return [];

    // Prefer mutateAsync if available
    if (typeof mutateAsync === "function") {
      const results: string[] = [];
      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await mutateAsync({
          folderType: "chat-transaction",
          file: formData,
        });
        // assuming your API returns { data: string } where data is the URL
        results.push(res?.data);
      }
      return results;
    }

    // Fallback: wrap `mutate` in a Promise for each file (sequential)
    const runOne = (file: File) =>
      new Promise<string>((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        saveImage(
          { folderType: "chat-transaction", file: formData },
          {
            onSuccess: (res: any) => resolve(res?.data),
            onError: (err: any) => reject(err),
          }
        );
      });

    const urls: string[] = [];
    for (const f of selectedFiles) {
      // eslint-disable-next-line no-await-in-loop
      const url = await runOne(f);
      urls.push(url);
    }
    return urls;
  };

  const onSend = async () => {
    if (!message.trim() && selectedFiles.length === 0) return;

    try {
      let uploadedUrls: string[] = [];
      if (selectedFiles.length > 0) {
        uploadedUrls = await uploadAllFiles();
      }

      const toSend = message.trim() || " ";
      handleMessage(toSend, uploadedUrls.length ? uploadedUrls : undefined);

      // reset
      setMessage("");
      setSelectedFiles([]);
      setPreviewUrls((old) => {
        old.forEach((u) => URL.revokeObjectURL(u));
        return [];
      });
      textareaRef.current?.blur();
    } catch (e) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const topLabel = useMemo(() => {
    if (selectedFiles.length === 0) return null;
    if (selectedFiles.length === 1) return selectedFiles[0].name;
    return `${selectedFiles.length} images selected`;
  }, [selectedFiles]);

  return (
    <>
      <ChatSelecteFiles
        previewUrls={previewUrls}
        open={openDrawer}
        handleClose={() => setOpenDrawer(false)}
      />

      <div className="fixed left-0 bottom-0 lg:px-0 px-2 py-4 z-20 lg:-bottom-8 w-full">
        {topLabel && (
          <div className="absolute -top-1 bg-white">
            <p className="text-xs font-grotesk-medium">{topLabel}</p>
          </div>
        )}

        {/* PREVIEW STRIP */}

        <div className="relative">
          <button
            disabled={uploadImageLoading}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onSend}
            className={`absolute ${uploadImageLoading && "opacity-30"} right-4 z-10 cursor-pointer transition-all ${
              expanded ? "top-3 translate-y-0" : "top-1/2 -translate-y-1/2"
            }`}
            aria-label="Send message"
          >
            <Image src={sendIcon} alt="" />
          </button>

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            className={`absolute left-4 z-10 cursor-pointer transition-all ${
              expanded ? "top-3 translate-y-0" : "top-1/2 -translate-y-1/2"
            }`}
            aria-label="Attach files"
          >
            <input
              onChange={(e) => handleFilesPicked(e.target.files)}
              accept="image/*"
              type="file"
              className="absolute w-6 opacity-0 -left-2"
              multiple
            />
            <Image src={fileUploadIcon} alt="" />
          </button>

          <motion.textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            initial={false}
            animate={{
              height: expanded ? 120 : 48,
              borderRadius: expanded ? 12 : 9999,
            }}
            transition={{
              height: { duration: 0.25, ease: "easeInOut" },
              borderRadius: { duration: 0.2, ease: "easeInOut" },
            }}
            className={`w-full resize-none pr-12 pl-12 ${
              bgWhite ? "bg-white" : "bg-bayfi-grey-300"
            } py-3 outline-none`}
            placeholder="Type a message..."
            style={{
              boxShadow: expanded ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
            }}
          />
        </div>
      </div>
    </>
  );
};
