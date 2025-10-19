"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export type BottomDrawerProps = {
  open: boolean;
  onClose: () => void;
  height?: "small" | "medium" | "full";
  children?: React.ReactNode;
  className?: string;
};

const heightMap: Record<NonNullable<BottomDrawerProps["height"]>, string> = {
  small: "h-[35vh]",
  medium: "h-[60vh]",
  full: "h-[100vh]",
};

export const CustomBottomDrawer = ({
  open,
  onClose,
  height = "medium",
  children,
  className = "",
}: BottomDrawerProps) => {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef(false);

  // Portal target (body) — only on client
  const [portalEl, setPortalEl] = React.useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalEl(document.body);
    mountedRef.current = true;
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (!mountedRef.current) return;
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Drag-close threshold
  const handleDragEnd = (_: any, info: { offset: { y: number } }) => {
    if (info?.offset?.y > 120) onClose();
  };

  if (!portalEl) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          aria-modal="true"
          role="dialog"
          aria-label="Bottom Drawer"
          className="fixed inset-0 z-30"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            ref={sheetRef}
            className={`${heightMap[height]} absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl flex flex-col ${className}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            drag="y"
            dragDirectionLock
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.2 }}
            onDragEnd={handleDragEnd}
          >
            {/* Grab handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="h-1.5 w-10 rounded-full bg-neutral-300" />
            </div>

            {/* Content area: header(optional)/body/footer slots via children */}
            <div className="min-h-0 flex-1 overflow-y-auto [padding-bottom:calc(env(safe-area-inset-bottom)+1rem)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    portalEl
  );
};
