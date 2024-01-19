export const menuItems = [
  {
    menuTrigger: "Importaciones",
    mainUrl: "/importaciones",
    subItems: [
      { itemTitle: "Ver importaciones", url: "/importaciones" },
      { itemTitle: "Crear", hasMenuSeparator: true, url: "/importaciones" },
      { itemTitle: "Buscar", Shortcut: "⌘T", url: "/importaciones" },
      { itemTitle: "Opciones", url: "/importaciones" },
    ],
  },
  {
    menuTrigger: "Exportaciones",
    mainUrl: "/exportaciones",
    subItems: [
      { itemTitle: "Ver exportaciones", url: "/exportaciones" },
      { itemTitle: "Crear", hasMenuSeparator: true, url: "/exportaciones" },
      { itemTitle: "Opciones", url: "/exportaciones" },
    ],
  },
  {
    menuTrigger: "Terrestres",
    mainUrl: "/terrestres",
    subItems: [
      { itemTitle: "Ver terrestres", url: "/terrestres" },
      { itemTitle: "Crear", hasMenuSeparator: true, url: "/terrestres" },
      { itemTitle: "Opciones", url: "/terrestres" },
    ],
  },
  {
    menuTrigger: "Maestros",
    mainUrl: "/maestros",
    subItems: [
      { itemTitle: "Ver maestros", url: "/maestros" },
      { itemTitle: "Buscar", Shortcut: "⌘T", url: "/maestros" },
    ],
  },
];
