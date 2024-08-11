"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Theme-toggle";
import { Users, PencilLine, BarChart3, Sprout, Settings, BookCopy, BookUser } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Sprout className="h-6 w-6" />
            <span className="">Нэмэлт хичээл</span>
          </div>
          <ModeToggle />
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item, id) => (
              <Link
                key={id}
                href={`/${item.name}`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathname === `/${item.name}` && "bg-muted text-primary"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

const navItems = [
  { label: "Dashboard", icon: <BarChart3 className="h-4 w-4" />, name: "dashboard" },
  { label: "Хичээл нэмэх", icon: <PencilLine className="h-4 w-4" />, name: "createLesson" },
  { label: "Миний хичээлүүд", icon: <BookCopy className="h-4 w-4" />, name: "lessons" },
  { label: "Сурагчид", icon: <Users className="h-4 w-4" />, pathName: "students" },
  { label: "Хүсэлтүүд", icon: <BookUser className="h-4 w-4" />, pathName: "requests" },
  { label: "Тохируулга", icon: <Settings className="h-4 w-4" />, pathName: "settings" },
];
