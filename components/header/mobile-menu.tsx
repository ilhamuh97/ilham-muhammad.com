"use client";

import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { navigationItems } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onNavigate: (id: string) => void;
}

/** Fullscreen nav overlay opened by the mobile navbar's hamburger button. */
export function MobileMenu({ isOpen, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden bg-foreground flex flex-col items-center justify-center gap-8"
        >
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.1, duration: 0.4, ease: EASE_OUT }}
              onClick={() => onNavigate(item.id)}
              className="font-display text-4xl font-medium text-background"
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
