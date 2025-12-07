"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  LockIcon,
  LockPasswordIcon,
  PageIcon,
  PieChartIcon,
  TableIcon,
  TaskIcon,
  UserCircleIcon,
} from "../icons/index";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/admin", pro: false }],
  },
  {
    icon: <CalenderIcon />,
    name: "Calendario",
    path: "/admin/calendar",
  },
  {
    name: "Formularios",
    icon: <ListIcon />,
    subItems: [
      { name: "Elementos de formulario", path: "/admin/form-elements", pro: false },
    ],
  },
  {
    name: "Tablas",
    icon: <TableIcon />,
    subItems: [
      { name: "Tablas básicas", path: "/admin/basic-tables", pro: false },
    ],
  },
  {
    icon: <PieChartIcon />,
    name: "Gráficos",
    subItems: [
      { name: "Gráfico de líneas", path: "/admin/line-chart", pro: false },
      { name: "Gráfico de barras", path: "/admin/bar-chart", pro: false },
      { name: "Gráfico circular", path: "/admin/pie-chart", pro: false },
    ],
  },
  {
    name: "Páginas",
    icon: <PageIcon />,
    subItems: [
      { name: "Página en blanco", path: "/admin/blank", pro: false },
      { name: "Error 404", path: "/error-404", pro: false },
    ],
  },
  {
    icon: <UserCircleIcon />,
    name: "Perfil",
    path: "/admin/profile",
  },
];

const othersItems: NavItem[] = [
  {
    icon: <TaskIcon />,
    name: "UI Elements",
    subItems: [
      { name: "Alertas", path: "/admin/alerts", pro: false },
      { name: "Avatares", path: "/admin/avatars", pro: false },
      { name: "Insignias", path: "/admin/badge", pro: false },
      { name: "Botones", path: "/admin/buttons", pro: false },
      { name: "Modales", path: "/admin/modals", pro: false },
    ],
  },
  {
    icon: <LockPasswordIcon />,
    name: "Autenticación",
    subItems: [
      { name: "Iniciar sesión", path: "/signin", pro: false },
      { name: "Restablecer contraseña", path: "/reset-password", pro: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen } = useSidebar();
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  const [hoveredItem, setHoveredItem] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<number | null>(null);

  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLLIElement>,
    index: number,
    menuType: "main" | "others"
  ) => {
    if (!isExpanded && !isMobileOpen) {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
      if (tooltipHideTimeoutRef.current) {
        clearTimeout(tooltipHideTimeoutRef.current);
        tooltipHideTimeoutRef.current = null;
      }
      const itemElement = event.currentTarget.querySelector(
        "button, a"
      ) as HTMLElement | null;
      const rect = (itemElement ?? event.currentTarget).getBoundingClientRect();
      setTooltipPosition(rect.top);

      tooltipTimeoutRef.current = setTimeout(() => {
        setHoveredItem({ type: menuType, index });
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    if (tooltipHideTimeoutRef.current) {
      clearTimeout(tooltipHideTimeoutRef.current);
    }
    tooltipHideTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setTooltipPosition(null);
      tooltipHideTimeoutRef.current = null;
    }, 150);
  };

  const renderTooltipMenu = (nav: NavItem, menuType: "main" | "others", index: number) => {
    if (!hoveredItem || hoveredItem.type !== menuType || hoveredItem.index !== index) {
      return null;
    }

    const hasSubItems = Boolean(nav.subItems && nav.subItems.length > 0);

    return (
      <div
        className={`fixed left-[90px] rounded-lg border border-gray-200 bg-white text-gray-700 shadow-lg z-[60] py-2 px-3 min-w-[200px] dark:border-gray-700 dark:bg-gray-900`}
        style={tooltipPosition !== null ? { top: tooltipPosition } : undefined}
        onMouseEnter={() => {
          if (tooltipHideTimeoutRef.current) {
            clearTimeout(tooltipHideTimeoutRef.current);
            tooltipHideTimeoutRef.current = null;
          }
          setHoveredItem({ type: menuType, index });
        }}
        onMouseLeave={handleMouseLeave}
      >
        {hasSubItems && (
          <div className="mb-3 px-2">
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {nav.name}
            </div>
            <div className="mt-2 h-px w-full bg-gray-200 dark:bg-gray-700" />
          </div>
        )}
        {hasSubItems && nav.subItems ? (
          <ul className="space-y-1">
            {nav.subItems.map((subItem) => (
              <li key={subItem.name}>
                <Link
                  href={subItem.path}
                  onClick={handleMouseLeave}
                  className={`block px-2 py-1.5 rounded text-sm transition-colors ${
                    isActive(subItem.path)
                      ? "bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {subItem.name}
                    <span className="flex items-center gap-1">
                      {subItem.new && (
                        <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded">
                          new
                        </span>
                      )}
                      {subItem.pro && (
                        <span className="text-xs px-1.5 py-0.5 bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300 rounded">
                          pro
                        </span>
                      )}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          nav.path && (
            <Link
              href={nav.path}
              onClick={handleMouseLeave}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 whitespace-nowrap transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {nav.name}
            </Link>
          )
        )}
      </div>
    );
  };

  const renderMenuItems = (navItems: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li
          key={nav.name}
          className="relative"
          onMouseEnter={(event) => handleMouseEnter(event, index, menuType)}
          onMouseLeave={handleMouseLeave}
        >
          {nav.subItems ? (
            <>
              <button
                onClick={() => handleSubmenuToggle(index, menuType)}
                className={`menu-item group ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-active"
                    : "menu-item-inactive"
                } cursor-pointer ${
                  !isExpanded && !isMobileOpen
                    ? "justify-center"
                    : "justify-start"
                }`}
              >
                <span
                  className={`${
                    openSubmenu?.type === menuType && openSubmenu?.index === index
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isMobileOpen) && (
                  <>
                    <span className="menu-item-text">{nav.name}</span>
                    <ChevronDownIcon
                      className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                        openSubmenu?.type === menuType && openSubmenu?.index === index
                          ? "rotate-180 text-brand-500"
                          : ""
                      }`}
                    />
                  </>
                )}
              </button>
              {!isExpanded && !isMobileOpen && renderTooltipMenu(nav, menuType, index)}
            </>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                } ${
                  !isExpanded && !isMobileOpen ? "justify-center" : "justify-start"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {!nav.subItems && !isExpanded && !isMobileOpen &&
            renderTooltipMenu(nav, menuType, index)}
          {nav.subItems && (isExpanded || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col px-5 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out border-r border-gray-200 z-[100000]
        ${isExpanded || isMobileOpen ? "w-[280px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
    >
      <div
        className={`flex w-full flex-col border-b border-gray-200 dark:border-gray-800 h-17 lg:h-[76px] justify-center px-1 ${
          isExpanded || isMobileOpen ? "items-start" : "items-center"
        }`}
      >
        <Link
          href="/admin"
          className={`flex items-center ${
            isExpanded || isMobileOpen ? "gap-3 justify-start" : "justify-center"
          }`}
        >
          {isExpanded || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logoWhite.png"
                alt="Logo"
                width={130}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logoDark.png"
                alt="Logo"
                width={130}
                height={40}
              />
            </>
          ) : (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logoW.png"
                alt="Logo"
                width={28}
                height={28}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logoD.png"
                alt="Logo"
                width={28}
                height={28}
              />
            </>
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6 pt-4 lg:pt-6">
          <div className="flex flex-col gap-4">
            <div>
              {(isExpanded || isMobileOpen) && (
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                    !isExpanded && !isMobileOpen ? "justify-center" : "justify-start"
                  }`}
                >
                  Principal
                </h2>
              )}
              {renderMenuItems(navItems, "main")}
            </div>

            <div>
              {(isExpanded || isMobileOpen) && (
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                    !isExpanded && !isMobileOpen ? "justify-center" : "justify-start"
                  }`}
                >
                  Recursos
                </h2>
              )}
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default AppSidebar;