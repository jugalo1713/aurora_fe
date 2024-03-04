"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants";
import Link from "next/link";

const NavContent = () => {
  //const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {menuItems.map((item) => {
        // const isActive =
        //   (pathname.includes(item.route) && item.route.length > 1) ||
        //   pathname === item.route;

        return (
          <SheetClose asChild key={item.menuTrigger}>
            <Link
              href={item.mainUrl}
              className={`${
                false
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <p className={false ? "base-bold" : "base-medium"}>
                {item.menuTrigger}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            alt="menu"
            src="/assets/icons/hamburger.svg"
            width={36}
            height={36}
            className="invert dark:invert-0"
          />
        </SheetTrigger>
        <SheetContent>
          <NavContent />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
