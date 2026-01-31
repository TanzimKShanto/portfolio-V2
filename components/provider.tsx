"use client";

import { ThemeProvider } from "@/components/theme-provider";
import ThemeShortcut from "@/components/themeShortcut";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useLenis from "@/hooks/useLenis";
import { useState } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  useLenis();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <ThemeShortcut />
        {children}
        <Toaster
          toastOptions={{
            style: { borderRadius: "0px" },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
