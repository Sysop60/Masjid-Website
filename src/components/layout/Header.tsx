"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, User, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-3xl font-medium tracking-tight text-primary font-serif">
            AAM
          </span>
        </Link>

        {/* Pill Navigation */}
        <nav className="hidden md:flex items-center px-8 py-3 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm gap-8">
          {NAV_ITEMS.map((item, index) => (
            <div key={item.href} className="flex items-center gap-8">
              {index > 0 && (
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              )}
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-gray-400 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-5 mr-2">
            <button className="text-gray-400 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full border border-gray-200 bg-white">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-accent">
              <User className="w-[18px] h-[18px]" />
            </div>
            <span className="text-xs font-semibold text-gray-600 pr-2">
              Portal
            </span>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition"
            aria-label="Menü"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
