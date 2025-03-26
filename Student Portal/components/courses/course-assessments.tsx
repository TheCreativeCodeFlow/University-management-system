"use client"

import { CalendarClock, CheckCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Assessment {
  id: string
  title: string
  type: string
  dueDate: string
  status: "upcoming" | "completed" | "missed"
  marks?: {
    obtained: number
    total: number
  }
}

interface CourseAssessmentsProps {
  assessments: Assessment[]
}

export function CourseAssessments({ assessments }: CourseAssessmentsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "upcoming":
        return <CalendarClock className="h-5 w-5 text-blue-500" />
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "missed":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Upcoming"
      case "completed":
        return "Completed"
      case "missed":
        return "Missed"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-4 p-4">
      {assessments.length === 0 ? (
        <div className="flex h-[200px] items-center justify-center">
          <p className="text-sm text-muted-foreground">No assessments found.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {assessments.map((assessment) => (
            <Card key={assessment.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{assessment.title}</CardTitle>
                  <Badge variant="outline">{assessment.type.charAt(0).toUpperCase() + assessment.type.slice(1)}</Badge>
                </div>
                <CardDescription>Due: {formatDate(assessment.dueDate)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(assessment.status)}
                    <span className="text-sm font-medium">{getStatusText(assessment.status)}</span>
                  </div>

                  {assessment.marks ? (
                    <span className="text-sm font-medium">
                      {assessment.marks.obtained}/{assessment.marks.total} points
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground">Not graded</span>
                  )}
                </div>

                {assessment.marks && (
                  <Progress value={(assessment.marks.obtained / assessment.marks.total) * 100} className="mt-3 h-2" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

