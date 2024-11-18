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
            <Link href="/" className="flex flex-row">
            <HomeIcon className="h-4 w-4 mr-2" />
            <span className="sr-only">Home</span>
            </Link>
            <Link href="/dashboard"  className="flex flex-row">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="sr-only">Dashboard</span>
            </Link>
            <Link href="/contact" className="flex flex-row">
            <ContactIcon className="h-4 w-4 mr-2" />
            <span className="sr-only">Contact</span>
            </Link>
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