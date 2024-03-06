"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeProvider";

import Image from "next/image";
import { useEffect, useState } from "react";
import MoonIcon from "./svgIcons/MoonIcon";
import SunIcon from "./svgIcons/SunIcon";

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
      <div className="flex flex-row-reverse">
        <MoonIcon width={20} height={20} customClass="mx-2" />
        <Switch
          checked={themeValue}
          id="theme"
          onCheckedChange={handleThemeChange}
        />
        <SunIcon width={20} height={20} customClass="mx-2" />
      </div>
    </>
  );
};

export default Theme;
