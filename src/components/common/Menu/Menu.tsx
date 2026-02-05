"use client";
import { Button } from "@/components/ui/button";
import { ChartLine, DoorOpen, Gamepad, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  text: string;
  href: string;
  icon: LucideIcon;
}

const menu: MenuItem[] = [
  {
    text: "Asosiy",
    href: "/dashboard",
    icon: ChartLine,
  },
  {
    text: "Xonalar",
    href: "/dashboard/rooms",
    icon: DoorOpen,
  },
];

function Menu() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="list-none p-0 m-0 flex flex-col gap-2">
        {menu.map((menuItem) => {
          const Icon = menuItem.icon;

          return (
            <li key={menuItem.href}>
              <Button
                asChild
                variant={pathname == menuItem.href ? "default" : "outline"}
                className="w-full justify-start gap-2">
                <Link href={menuItem.href}>
                  <Icon className="h-4 w-4 pointer-events-none " />
                  <span>{menuItem.text}</span>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
