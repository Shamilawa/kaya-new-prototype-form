"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ThemeSwitch } from "./ThemeSwitch";

export const SidebarUserProfileTrigger = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-5 pr-5 pb-6 flex justify-between items-center border-t border-border-secondary bg-bg-secondary sticky bottom-0 dark:border-[#22262F]"
    >
      {/* Trigger */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-10 bg-bg-primary dark:bg-[#22262F] dark:border-[#22262F] rounded-full border border-border-secondary flex justify-center items-center text-[14px] font-semibold text-text-primary dark:text-[#94979C]">
          OR
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-primary dark:text-[#F7F7F7]">
            Olivia Rhye
          </span>
          <span className="text-xs text-text-tertiary dark:text-[#94979C]">
            Super Admin
          </span>
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="p-1.5 hover:bg-bg-primary rounded-md"
      >
        <ChevronDown className="w-4 h-4 text-text-muted" />
      </button>

      {open && (
        <div className="absolute bottom-19 -right-0 w-full border border-border-secondary rounded-lg shadow-lg p-2 z-50 bg-white dark:bg-[#0C0E12] dark:border-[#22262F]">
          <ThemeSwitch />
          <div className="my-2 border-t border-border-secondary dark:border-[#22262F]" />

          <button className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-bg-secondary rounded-md">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
