"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Mail, Menu, Orbit, Trophy, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#top", label: "Intro", icon: Home },
  { href: "#orbit", label: "More about me", icon: Orbit },
  { href: "#achievements", label: "Achievements", icon: Trophy },
  { href: "#contact", label: "Contact", icon: Mail },
];

function PillNav() {
  return (
    <motion.nav
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -56, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <ul className="flex items-center gap-1 rounded-full border border-surface1 bg-surface0/85 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-[0.86rem] font-semibold text-subtext1 transition-colors hover:bg-surface1 hover:text-mauve"
            >
              <link.icon size={16} />
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

function CircleNav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed left-4 top-4 z-50 sm:left-6 sm:top-6"
    >
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        whileTap={{ scale: 0.92 }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-surface1 bg-surface0/90 text-subtext1 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:text-mauve"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-13 flex flex-col gap-1 rounded-2xl border border-surface1 bg-surface0/95 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[0.86rem] font-semibold text-subtext1 transition-colors hover:bg-surface1 hover:text-mauve"
                >
                  <link.icon size={16} />
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SiteNav() {
  const [onOrbitPage, setOnOrbitPage] = useState(false);

  useEffect(() => {
    const target = document.getElementById("orbit");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnOrbitPage(entry.intersectionRatio > 0.6),
      { threshold: [0, 0.6, 1] }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {onOrbitPage ? <CircleNav key="circle" /> : <PillNav key="pill" />}
    </AnimatePresence>
  );
}
