import type React from "react"
import type { Metadata } from "next"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export const metadata: Metadata = {
  title: "Dashboard | Student Portal",
  description: "Student portal dashboard",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}

