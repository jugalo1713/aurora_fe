"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

const Theme = () => {
  const { setMode, mode } = useTheme();
  const [themeValue, setThemeValue] = useState(false);

  useEffect(() => {
    setThemeValue(mode === "dark");
  }, [mode]);

  const handleThemeChange = (themeBool: boolean) => {
    setThemeValue(themeBool);
    if (themeBool) {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      localStorage.removeItem("theme");
    }
  };

  return (
    <>
      <div className="flex flex-row-reverse mt-4">
        <Image
          src="/assets/icons/moon.svg"
          alt="moon"
          width={15}
          height={15}
          className="mx-2"
        />
        <Switch
          checked={themeValue}
          id="theme"
          onCheckedChange={handleThemeChange}
        />
        <Image
          src="/assets/icons/sun.svg"
          alt="moon"
          width={20}
          height={20}
          className="mx-2"
        />
      </div>
    </>
  );
};

export default Theme;
