"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function LightDarkModeToggle() {
  const { setTheme } = useTheme();

  useEffect(() => setTheme(localStorage.getItem("theme") ?? "light"), []);

  return (
    <>
      <Button
        variant="opposite"
        size="icon-lg"
        className="rounded-[50%] p-1"
        onClick={() => {
          let theme = localStorage.getItem("theme") ?? "light";
          localStorage.setItem("theme", theme === "light" ? "dark" : "light");
          theme = localStorage.getItem("theme") ?? "light";
          setTheme(theme);
        }}
      >
        <Sun className="h-full w-full scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-full w-full scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
