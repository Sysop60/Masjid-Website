"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="md:hidden mt-4 px-2 py-4 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
              pathname === item.href
                ? "text-primary bg-primary/5"
                : "text-gray-500 hover:text-primary hover:bg-gray-50"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/spenden"
          onClick={onClose}
          className="block mt-2 text-center bg-accent text-primary px-4 py-2.5 rounded-full font-semibold hover:brightness-110 transition"
        >
          Jetzt unterstützen
        </Link>
      </div>
    </div>
  );
}
