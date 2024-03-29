import LocaleSwitcher from "@/components/shared/LanguageComponents/LocaleSwitcher";
import NavigationBar from "@/components/shared/Navigation/NavigationBar";
import Theme from "@/components/shared/Theme";
import { ThemeProvider } from "@/context/ThemeProvider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-row-reverse mt-3 gap-8 items-center">
        <Theme />
        <LocaleSwitcher />
      </div>

      <div className="min-h-screen w-11/12 md:w-5/6 m-auto ">
        <NavigationBar />

        <div className="p-8">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default layout;
