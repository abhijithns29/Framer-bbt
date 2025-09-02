"use client"

import * as React from "react"
import Link from "next/link"
import { SearchBar } from "./search"
import {UserRound} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./themeTogle"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function NavBar() {
  return (
    <div className="flex flex-row justify-between py-3  px-2">
<div>
     <NavigationMenu >
  <NavigationMenuList >
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <div className="relative flex h-7 w-7 mr-2 items-center justify-center rounded-md bg-blue-500 text-2xl font-bold text-white shadow-lg">
      M
    </div>
        My Workshop</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

</div>
<div>
    < SearchBar />
</div>
<div className="flex flex-wrap items-center gap-2 md:flex-row">
     <ThemeToggle />
      <Button><UserRound />1</Button>
   
      <Button>Invite member</Button>

      <Button>New project</Button>
    
    
</div>

    </div>
   
      )
}

