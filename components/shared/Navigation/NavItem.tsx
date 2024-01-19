import React from "react";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

interface Props {
  menuTrigger: string;
  subItems: subMenuItemProps[];
}

interface subMenuItemProps {
  itemTitle: string;
  Shortcut?: string;
  hasMenuSeparator?: boolean;
  url: string;
}

const NavItem = ({ menuTrigger, subItems }: Props) => {
  if (!menuTrigger) {
    return null;
  }
  return (
    <MenubarMenu>
      <MenubarTrigger>{menuTrigger}</MenubarTrigger>
      <MenubarContent>
        {subItems.map((subitem) => (
          <div key={subitem.itemTitle}>
            <MenubarItem>
              <Link href={subitem.url}>
                {subitem.itemTitle}
                {subitem.Shortcut && (
                  <MenubarShortcut>{subitem.Shortcut}</MenubarShortcut>
                )}
              </Link>
            </MenubarItem>
            {subitem.hasMenuSeparator && <MenubarSeparator />}
          </div>
        ))}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default NavItem;
