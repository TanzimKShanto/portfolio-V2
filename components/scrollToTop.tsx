"use client";

import { useEffect, useState } from "react";
import { IconChevronUp } from "@tabler/icons-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed flex cursor-pointer flex-col px-2 pb-1 items-center bg-transparent hover:bg-primary/20 focus:outline-hidden dark:focus:outline-hidden border-primary border-2 dark:border-primary z-100 bottom-10 right-10
      transition-all duration-600
      ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
        }`}
    >
      <IconChevronUp stroke={4} className="w-4 h-4 text-primary" />
      <span className="text-primary text-xs">TOP</span>
    </button>
  );
}
