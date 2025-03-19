"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, GraduationCap, Home, LineChart, LogOut, Settings, User } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-provider"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const routes = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      title: "Attendance",
      icon: Calendar,
      href: "/dashboard/attendance",
      active: pathname === "/dashboard/attendance",
    },
    {
      title: "Marks & CGPA",
      icon: LineChart,
      href: "/dashboard/marks",
      active: pathname === "/dashboard/marks",
    },
    {
      title: "Courses",
      icon: BookOpen,
      href: "/dashboard/courses",
      active: pathname === "/dashboard/courses",
    },
    {
      title: "Assessments",
      icon: GraduationCap,
      href: "/dashboard/assessments",
      active: pathname === "/dashboard/assessments",
    },
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/profile",
      active: pathname === "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <Sidebar className="hidden border-r pt-16 md:block">
      <SidebarHeader className="flex items-center gap-2 px-4 py-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{user?.name}</span>
          <span className="text-xs text-muted-foreground">{user?.studentId}</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={route.active}>
                <Link href={route.href}>
                  <route.icon className="h-4 w-4" />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={logout}>
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

