import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getStudentData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Dashboard | Student Portal",
  description: "Student portal dashboard overview",
}

export default async function DashboardPage() {
  const data = await getStudentData()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your student portal dashboard</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <CardDescription>Overall attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.attendance.percentage}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">CGPA</CardTitle>
            <CardDescription>Current CGPA</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.cgpa}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assessments</CardTitle>
            <CardDescription>Upcoming assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.upcomingAssessments}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <CardDescription>Enrolled courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.enrolledCourses}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

