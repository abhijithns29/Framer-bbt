
import NavBar from "@/components/navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
      </body>
    </html>
  )
}
