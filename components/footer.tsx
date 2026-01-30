import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { title } from "process";

export default function Footer() {
  const iconSize = 24;
  const sectionIconNavs = [
    { title: "Facebook", icon: <IconBrandFacebook size={iconSize} />, href: "https://www.facebook.com/TanzimKShanto" },
    { title: "Instagram", icon: <IconBrandInstagram size={iconSize} />, href: "https://www.instagram.com/tanzimkshanto/" },
    { title: "Whatsapp", icon: <IconBrandWhatsapp size={iconSize} />, href: "https://wa.me/+8801303665747/" },
    {
      title: "GitHub",
      icon: <IconBrandGithub size={iconSize} />,
      href: "https://github.com/tanzimKshanto"
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin size={iconSize} />,
      href: "https://www.linkedin.com/in/tanzimKshanto/"
    },
  ]
  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-8 w-5xl py-6">
      <h1 className="font-bold text-accent dark:text-zinc-300">
        <span className="text-primary">04.</span>
        Contact
      </h1>
      <h1 className="text-accent sm:text-6xl text-4xl font-bold dark:text-zinc-300">Let&apos;s Talk.</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-zinc-900 text-accent dark:text-zinc-300 border border-zinc-800">
          <CardHeader>
            <CardTitle className="text-muted-foreground max-sm:text-xs">CALL ME</CardTitle>
          </CardHeader>
          <CardContent className="sm:text-4xl text-lg wrap-break-word">
            <p>01303665747</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 text-accent dark:text-zinc-300 border border-zinc-800">
          <CardHeader>
            <CardTitle className="text-muted-foreground max-sm:text-xs">MAIL ME</CardTitle>
          </CardHeader>
          <CardContent className="sm:text-4xl text-lg wrap-break-word">
            <p>tanzimk.shanto@gmail.com</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {sectionIconNavs.map((link, index) =>
          <a
            target="_blank"
            className="hover:text-primary text-accent dark:text-zinc-300 dark:hover:text-primary"
            key={index}
            href={link.href}>
            {link.icon}
          </a>
        )}
      </div>
      <Separator />
      <p className="text-muted-foreground text-xs sm:text-sm max-sm:text-center">© 2026 MD Tanzim Khan Shanto. All rights reserved.</p>
    </div>
  )
}
