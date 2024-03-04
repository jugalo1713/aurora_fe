import NavigationBar from "@/components/shared/Navigation/NavigationBar";
import Theme from "@/components/shared/Theme";
import { ThemeProvider } from "@/context/ThemeProvider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Theme />
      <div className="min-h-screen w-11/12 md:w-5/6 m-auto ">
        <NavigationBar />
        <div className="p-8">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default layout;
