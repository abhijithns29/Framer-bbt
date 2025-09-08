import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"




import React, { useState } from 'react'

const DashboardDropdown = () => {
  const [currentMenu,SetCurrentMenu]=useState("Last viewed by me")
  return (

   <div className=" w-full mb-6">
        <h2 className="ml-4 text-2xl font-bold">All</h2>

 <NavigationMenu >
  <NavigationMenuList >
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        {currentMenu}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-muted-foreground" onClick={()=>{SetCurrentMenu("Last viewed by me")}}>
                      Last viewed by me
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    
                    <div className="text-muted-foreground" onClick={()=>{SetCurrentMenu("Last edited")}}>
                    Last edited
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    
                    <div className="text-muted-foreground" onClick={()=>{SetCurrentMenu("Alphabetically")}}>
                      Alphabetically
                      
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
  )
}

export default DashboardDropdown



