import NavBar from "@/components/navbar";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        {/* Top Nav */}
        <NavBar />

        {/* Main area (below navbar) */}
        <div className="flex flex-1">
          <SidebarProvider>
            {/* Sidebar on the left */}
            <AppSidebar />

            {/* Main content on the right */}
            <main className="flex-1 ">
 
              {children}
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  )
}
