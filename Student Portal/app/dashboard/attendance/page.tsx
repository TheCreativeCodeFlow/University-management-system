import type { Metadata } from "next"
import { AttendanceTable } from "@/components/attendance/attendance-table"
import { AttendanceChart } from "@/components/attendance/attendance-chart"
import { getAttendanceData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Attendance | Student Portal",
  description: "View and track your attendance records",
}

export default async function AttendancePage() {
  const attendanceData = await getAttendanceData()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <AttendanceChart data={attendanceData} />
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <h3 className="text-lg font-medium">Attendance Summary</h3>
            <p className="text-sm text-muted-foreground">
              Your overall attendance is {attendanceData.overallPercentage}%
            </p>
          </div>
        </div>
      </div>
      <AttendanceTable data={attendanceData.records} />
    </div>
  )
}

