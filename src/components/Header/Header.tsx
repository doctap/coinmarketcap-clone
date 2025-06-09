import { Search } from "lucide-react";
import { Logo } from "@/shared";
import { ThemeToggle } from "@/components";
import { Input } from "@/shared";

export function Header() {
  return (
    <header className="flex justify-between px-36 pt-20">
      <Logo />

      <div className="flex gap-16 items-center">
        <div className="relative h-fit">
          <Search className="h-20 w-20 top-7 left-5 absolute text-purple-light" />
          <Input placeholder='Type a coin...' type="search" className="w-300 py-15 pl-30" />
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}
