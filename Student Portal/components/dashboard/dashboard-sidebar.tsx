"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, GraduationCap, BookOpen, ClipboardList, MessageSquare, User, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/contexts/sidebar-context"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function DashboardSidebar() {
  const pathname = usePathname()
  const { isOpen, close } = useSidebar()
  const isMobile = useMobile()

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Attendance",
      href: "/dashboard/attendance",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Marks",
      href: "/dashboard/marks",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Courses",
      href: "/dashboard/courses",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Assessments",
      href: "/dashboard/assessments",
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      title: "Chatbot",
      href: "/dashboard/chatbot",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform md:static",
        isOpen || !isMobile ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4 md:hidden">
        <span className="text-lg font-semibold">Menu</span>
        <Button variant="ghost" size="icon" onClick={close}>
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={isMobile ? close : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}

