"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#top", label: "Orbit" },
  { href: "#about", label: "About" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-surface1 bg-background/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-230 items-center justify-between px-7 py-3.5">
        <a href="#top" className="font-serif text-[1.05rem] font-semibold">
          Eda Beyter
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-1 text-foreground sm:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col gap-4 border-b border-surface1 bg-card px-7 py-5 shadow-lg sm:static sm:flex sm:flex-row sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[0.86rem] font-semibold text-muted-foreground transition-colors hover:text-peach"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
