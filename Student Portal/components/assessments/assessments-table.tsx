"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

interface Assessment {
  id: string
  course: string
  title: string
  type: "quiz" | "assignment" | "midterm" | "final"
  dueDate: string
  status: "upcoming" | "completed" | "missed"
  marks?: {
    obtained: number
    total: number
  }
}

interface AssessmentsTableProps {
  data: Assessment[]
}

export function AssessmentsTable({ data }: AssessmentsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = data.filter(
    (assessment) =>
      assessment.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "missed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return ""
    }
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Internal Assessments</h3>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search assessments..."
              className="w-[200px] pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Marks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No assessments found.
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((assessment) => (
                <TableRow key={assessment.id}>
                  <TableCell className="font-medium">{assessment.course}</TableCell>
                  <TableCell>{assessment.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {assessment.type.charAt(0).toUpperCase() + assessment.type.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{assessment.dueDate}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(assessment.status)}`}
                    >
                      {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    {assessment.marks ? (
                      `${assessment.marks.obtained}/${assessment.marks.total}`
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

