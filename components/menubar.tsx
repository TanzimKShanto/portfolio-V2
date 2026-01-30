"use client"
import { IconBrandGithub, IconBrandLinkedin, IconBrightness, IconMenu, IconX } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import React, { useEffect } from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./ui/drawer";

export default function Menubar() {

  const scrollDir = useScrollDirection();

  useEffect(() => {
    console.log(scrollDir)
  }, [scrollDir])

  const sectionNavs = [
    {
      title: "ABOUT",
      href: "#about",
    },
    {
      title: "PROJECTS",
      href: "#projects",
    },
    {
      title: "EXPERIENCE",
      href: "#experience",
    },
    {
      title: "CONTACT",
      href: "#contact",
    }
  ]

  const sectionIconNavs = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="sm:w-5 sm:h-5 w-6 h-6" />,
      href: "https://github.com/tanzimKshanto"
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="sm:w-5 sm:h-5 w-6 h-6" />,
      href: "https://www.linkedin.com/in/tanzimKshanto/"
    },
  ]

  const { setTheme, theme } = useTheme();
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className={`flex flex-row gap-6 max-sm:px-4 shadow-xs items-center justify-end sticky top-0 bg-background h-16 z-50 transition-all duration-500 w-full 
      ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
`}>
      {sectionNavs.map((link, index) =>
        <a
          className="hover:underline hover:text-primary text-sm max-sm:hidden"
          key={index}
          href={link.href}>
          <span className="text-primary">0{index + 1}.</span>
          {link.title}
        </a>
      )}
      {sectionIconNavs.map((link, index) =>
        <a
          target="_blank"
          className="hover:text-primary max-sm:hidden"
          key={index}
          href={link.href}>
          {link.icon}
        </a>
      )}
      <Tooltip>
        <TooltipTrigger asChild className="">
          <Button variant={"ghost"} size={"icon"} className="hover:bg-transparent w-5 h-5 dark:hover:bg-transparent hover:text-primary" onClick={themeToggle}>
            <IconBrightness className="min-w-5 min-h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Toggle Mode <span className="px-2 z-100 py-0.5 bg-muted/20">D</span>
        </TooltipContent>
      </Tooltip>
      <Drawer direction="right" open={isOpen} onOpenChange={toggleDrawer}>
        <DrawerTrigger asChild className="sm:hidden">
          <IconMenu />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-4 p-4">
          <DrawerClose className="w-full flex items-end justify-end"><IconX /></DrawerClose>
          {sectionNavs.map((link, index) =>
            <a
              onClick={toggleDrawer}
              className="hover:underline hover:text-primary text-lg"
              key={index}
              href={link.href}>
              <span className="text-primary">0{index + 1}.</span>
              {link.title}
            </a>
          )}
          <div className="flex flex-row gap-2">
            {sectionIconNavs.map((link, index) =>
              <a
                target="_blank"
                className="hover:text-primary"
                key={index}
                href={link.href}>
                {link.icon}
              </a>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
