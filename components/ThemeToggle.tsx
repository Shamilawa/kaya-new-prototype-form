"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-1.5 bg-white border border-[rgba(10,12,18,0.18)] shadow-[0_1px_2px_rgba(10,12,67,0.05)] rounded-md cursor-pointer flex items-center justify-center transition-colors hover:bg-gray-100 dark:bg-[#161618] dark:hover:bg-[#1a1a1c] dark:border-[#29292b]"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="w-4 h-4 text-text-primary" />
            ) : (
                <Sun className="w-4 h-4 text-text-primary" />
            )}
        </button>
    );
}
