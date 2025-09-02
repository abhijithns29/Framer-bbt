import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import { MessageSquareDot, Settings, User ,MessageCircle, Grid2x2X, Trash} from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Link href="/profile" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
              <User className="h-4 w-4" /> Account
            </Link>
            <Link href="/settings" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
              <Settings className="h-4 w-4" /> Settings
            </Link>
            <Link href="/updates" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
              <MessageSquareDot  className="h-4 w-4" /> Updates
            </Link>
            <Link href="/contacts" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
              <MessageCircle   className="h-4 w-4" /> Contacts
            </Link>
          </SidebarGroupContent>
        </SidebarGroup>
         
          <Separator />
        {/* Group 2 */}
        <SidebarGroup>
          
          <SidebarGroupContent>
            <Link href="/all" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
              <Grid2x2X    className="h-4 w-4" /> All
            </Link>


            <Link href="/archive" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
              <Trash    className="h-4 w-4" /> Archive
            </Link>


          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="p-2 text-sm text-muted-foreground">
          © 2025 My App
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
