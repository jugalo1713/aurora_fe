export const menuItems = [
  {
    menuTriggerKey: "imports",
    mainUrl: "/imports",
    subItems: [
      { itemTitle: "Ver importaciones", url: "/imports" },
      { itemTitle: "Crear", hasMenuSeparator: true, url: "/imports" },
      { itemTitle: "Buscar", Shortcut: "⌘T", url: "/imports" },
      { itemTitle: "Opciones", url: "/imports" },
    ],
  },
  {
    menuTriggerKey: "exports",
    mainUrl: "/exports",
    subItems: [
      { itemTitle: "Ver exportaciones", url: "/exports" },
      { itemTitle: "Crear", hasMenuSeparator: true, url: "/exports" },
      { itemTitle: "Opciones", url: "/exports" },
    ],
  },
  {
    menuTriggerKey: "inlands",
    mainUrl: "/inlands",
    subItems: [
      { itemTitle: "Ver terrestres", url: "/inlands" },
      { itemTitle: "Crear", hasMenuSeparator: true, url: "/inlands" },
      { itemTitle: "Opciones", url: "/inlands" },
    ],
  },
  {
    menuTriggerKey: "masters",
    mainUrl: "/masters",
    subItems: [
      { itemTitle: "Ver maestros", url: "/masters" },
      { itemTitle: "Crear", url: "/masters" },
    ],
  },
];

export const SupportedLanguages = [
  {
    locale: "en",
    label: "english",
    flag: "/assets/flags/usa.png",
    localeKey: "english",
  },
  {
    locale: "es",
    label: "spanish",
    flag: "/assets/flags/spain.png",
    localeKey: "spanish",
  },
];
