import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, GraduationCap, LineChart } from "lucide-react"
import Link from "next/link"

interface DashboardOverviewProps {
  data: {
    attendance: {
      percentage: number
    }
    cgpa: number
    upcomingAssessments: number
    enrolledCourses: number
  }
}

export function DashboardOverview({ data }: DashboardOverviewProps) {
  const cards = [
    {
      title: "Attendance",
      value: `${data.attendance.percentage}%`,
      description: "Overall attendance",
      icon: Calendar,
      href: "/dashboard/attendance",
      progress: data.attendance.percentage,
    },
    {
      title: "CGPA",
      value: data.cgpa.toFixed(2),
      description: "Current CGPA",
      icon: LineChart,
      href: "/dashboard/marks",
    },
    {
      title: "Assessments",
      value: data.upcomingAssessments,
      description: "Upcoming assessments",
      icon: GraduationCap,
      href: "/dashboard/assessments",
    },
    {
      title: "Courses",
      value: data.enrolledCourses,
      description: "Enrolled courses",
      icon: BookOpen,
      href: "/dashboard/courses",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Link key={card.title} href={card.href}>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.description}</p>
              {card.progress && (
                <Progress
                  value={card.progress}
                  className="mt-3 h-2"
                  indicatorClassName={card.progress < 75 ? "bg-destructive" : ""}
                />
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

