"use client"

import * as React from "react"
import Link from "next/link"
import { SearchBar } from "./search"
import {UserRound,CopyPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./themeTogle"
import { Badge } from "./ui/badge"
import  {LogoDropDown}  from "./logoDropdown"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function ProjectNavBar() {
  return (
    <div className="flex flex-row justify-between py-3  px-2">
<div>
     <NavigationMenu >
  <NavigationMenuList >
    <NavigationMenuItem>
     <LogoDropDown />
    </NavigationMenuItem>
    <NavigationMenuItem>
   <div className="flex">
    <CopyPlus className="ml-2 mr-1" />Insert
   </div>
     
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

