import React from "react";

import Image from "next/image";
import NavItem from "./NavItem";
import { Menubar } from "@/components/ui/menubar";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { menuItems } from "@/constants";

const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-between py-6">
        <div className="lg:hidden">
          <Link href="/">
            <Image
              src={"/assets/auroraIcons/aurora_icon_bg_transparent.png"}
              alt="corporate logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link href="/">
            <Image
              src={"/assets/auroraIcons/aurora_bg_transparent.png"}
              alt="corporate logo"
              width={200}
              height={80}
            />
          </Link>
        </div>
        <div className="my-auto md:m-auto order-1 md:order-none">
          {menuItems && menuItems.length > 0 && (
            <Menubar className="hidden md:flex">
              {menuItems.map((item) => (
                <NavItem
                  key={item.menuTrigger}
                  menuTrigger={item.menuTrigger}
                  subItems={item.subItems}
                />
              ))}
            </Menubar>
          )}

          <MobileNav />
        </div>
        <div className="my-auto">Sign in</div>
      </div>
    </>
  );
};

export default NavigationBar;
