import { useSaveImage } from "@/hooks/query";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

export const useImageUtils = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [convertedImageUrls, setConvertedImageUrls] = useState<string[]>([]);
  const [uploadAllFileLoading, setUploadAllFileLoading] = useState(false);

  const {
    mutate: saveImage,
    isPending: uploadImageLoading,
    mutateAsync,
  } = useSaveImage(
    // onSuccess is not used here since we upload in batch below
    () => {
      //   setOpenDrawer(false);
    }
  );

  // Build previews & revoke on cleanup
  useEffect(() => {
    // revoke any existing object URLs
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const uploadAllFiles = async () => {
    setUploadAllFileLoading(true);
    try {
      if (!selectedFiles?.length) {
        setConvertedImageUrls([]);
        return [];
      }

      const toFD = (file: File) => {
        const fd = new FormData();
        fd.append("file", file);
        return fd;
      };

      // Prefer mutateAsync: run in PARALLEL and await all
      if (typeof mutateAsync === "function") {
        const promises = selectedFiles.map((file) =>
          mutateAsync({
            folderType: "chat-transaction",
            file: toFD(file),
          }).then((res: any) => res?.data as string)
        );

        // Strict: fail the whole batch if any fails
        const urls = await Promise.all(promises);

        // If you prefer best-effort, swap the two lines above for:
        // const results = await Promise.allSettled(promises);
        // const urls = results
        //   .filter((r): r is PromiseFulfilledResult<string> => r.status === "fulfilled")
        //   .map((r) => r.value);

        setConvertedImageUrls(urls);
        // Now that ALL are done, do any per-batch UI (e.g., close the drawer)
        setOpenDrawer(false);
        return urls;
      }

      // Fallback: wrap mutate in promises, then also run in PARALLEL
      const runOne = (file: File) =>
        new Promise<string>((resolve, reject) => {
          saveImage(
            { folderType: "chat-transaction", file: toFD(file) },
            {
              onSuccess: (res: any) => resolve(res?.data as string),
              onError: (err: any) => reject(err),
            }
          );
        });

      const urls = await Promise.all(selectedFiles.map(runOne));
      setConvertedImageUrls((prev) => {
        return [...prev, ...urls];
      });
      setOpenDrawer(false);
      return urls;
    } finally {
      // This flips only after ALL awaited uploads complete (or an error throws)
      setUploadAllFileLoading(false);
    }
  };

  const removeImageAt = (idx: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== idx));
    setPreviewUrls((prev) => {
      const toRemove = prev[idx];
      if (toRemove) URL.revokeObjectURL(toRemove);
      return prev.filter((_, i) => i !== idx);
    });
  };

  const topLabel = useMemo(() => {
    if (selectedFiles.length === 0) return null;
    if (selectedFiles.length === 1) return selectedFiles[0].name;
    return `${selectedFiles.length} images selected`;
  }, [selectedFiles]);

  return {
    topLabel,
    removeImageAt,
    uploadAllFiles,
    handleFilesPicked,
    openDrawer,
    setOpenDrawer,
    selectedFiles,
    setSelectedFiles,
    uploadImageLoading,
    previewUrls,
    setPreviewUrls,
    convertedImageUrls,
    setConvertedImageUrls,
    uploadAllFileLoading,
  };
};
