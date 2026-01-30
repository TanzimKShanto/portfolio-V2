"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useThemeShortcut() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // ignore when typing in inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      if (e.key.toLowerCase() === "d") {
        const current = theme === "system" ? resolvedTheme : theme;
        setTheme(current === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [theme, resolvedTheme, setTheme]);
}
