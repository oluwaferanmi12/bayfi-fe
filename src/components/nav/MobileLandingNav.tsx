"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import logoWhite from "@/assets/svg/logo-white-variant.svg";

const navObjects = [
  { href: "/", text: "Homepage" },
  { href: "/about", text: "About us" },
  { href: "/what-we-do", text: "Stuff we do" },
  { href: "/updates", text: "Sharp updates" },
  { href: "/contact-us", text: "Hit us up" },
];

export const MobileLandingNav = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  /* ------------------ Scroll hide/show logic ------------------ */
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // hide on scroll down, show on scroll up
    if (latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  /* ------------------ Lock scroll when menu open ------------------ */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Floating Glass Top Bar */}
      <motion.nav
        className="fixed top-4 left-1/2 z-50 w-[92%] -translate-x-1/2 lg:hidden"
        animate={{
          y: hidden && !open ? -120 : 0,
          opacity: hidden && !open ? 0 : 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0A0D14]/60 backdrop-blur-xl px-5 py-3">
          <Link href="/">
            <Image src={logoWhite} alt="Bayfi" className="h-6 w-auto" />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="text-white text-xl"
            aria-label="Open menu"
          >
            <MenuOutlined />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Glass Menu */}
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#0A0D14]/80 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex h-full flex-col justify-between px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <Image src={logoWhite} alt="Bayfi" className="h-7 w-auto" />
              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl"
                aria-label="Close menu"
              >
                <CloseOutlined />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-8 text-center">
              {navObjects.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-manrope-regular transition-colors duration-200 ${
                      isActive
                        ? "text-bayfi-green-500 drop-shadow-[0_0_8px_rgba(163,230,53,0.35)]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link href="/login" onClick={() => setOpen(false)}>
              <button className="w-full rounded-full bg-bayfi-green-500 py-4 text-lg font-manrope-regular text-black">
                Login
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};
