import { CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    window.location.reload();
    router.push("/login");
  };
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Миний аккаунт</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div onClick={() => handleLogout()} className="pl-3">
            Гарах
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
