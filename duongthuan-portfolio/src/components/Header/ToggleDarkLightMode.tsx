"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function LightDarkModeToggle() {
  const { setTheme } = useTheme();
  const [isLight, setIsLight] = useState(true);

  function handleOnToggleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    setIsLight(!isLight);
  }

  useEffect(
    function () {
      setTheme(isLight ? "light" : "dark");
    },
    [isLight],
  );

  return (
    <>
      <Button variant="opposite" size="icon" className="rounded-[50%]" onClick={() => setIsLight(!isLight)}>
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
