"use client";

import { motion } from "framer-motion";
import { Home, Mail, Orbit } from "lucide-react";

const NAV_LINKS = [
  { href: "#top", label: "Intro", icon: Home },
  { href: "#orbit", label: "Orbit", icon: Orbit },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function SiteNav() {
  return (
    <motion.nav
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
