import { Search } from "lucide-react";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Input from "../Input/Input";

export default function Header() {
  return (
    <nav className="flex justify-between px-30 pt-20">
      <Logo />
      <div className="flex gap-24">
        <div className="relative">
          <Search className="h-20 w-20 top-8 left-5 absolute text-purple-light" />
          <Input placeholder='Type coin' type="search" className="w-300 pl-30" />
        </div>

        <ThemeToggle />
      </div>
    </nav>
  )
}
