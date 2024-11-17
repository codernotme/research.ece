"use client"

import { Link } from "@nextui-org/link"
import { ContactIcon, HomeIcon, LayoutDashboard, Menu } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import  SignOutButton  from "./Auth/SignOut"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Research-ECE
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/" icon={<HomeIcon className="h-4 w-4 mr-2" />}>
              Home
            </NavLink>
            <NavLink href="/dashboard" icon={<LayoutDashboard className="h-4 w-4 mr-2" />}>
              Dashboard
            </NavLink>
            <NavLink href="/contact" icon={<ContactIcon className="h-4 w-4 mr-2" />}>
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <SignOutButton />
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
      {icon}
      {children}
    </Link>
  )
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/" className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-2" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact" className="flex items-center">
            <ContactIcon className="h-4 w-4 mr-2" />
            Contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}