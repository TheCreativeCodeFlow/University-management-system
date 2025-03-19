"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Subject {
  id: string
  code: string
  name: string
  credits: number
  grade: string
  marks: number
  maxMarks: number
}

interface MarksTableProps {
  data: Subject[]
}

export function MarksTable({ data }: MarksTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = data.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
      case "A":
        return "text-green-600 dark:text-green-400"
      case "B+":
      case "B":
        return "text-blue-600 dark:text-blue-400"
      case "C+":
      case "C":
        return "text-yellow-600 dark:text-yellow-400"
      case "D":
        return "text-orange-600 dark:text-orange-400"
      case "F":
        return "text-red-600 dark:text-red-400"
      default:
        return ""
    }
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Subject Marks</h3>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search subjects..."
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
              <TableHead>Code</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead>Marks</TableHead>
              <TableHead>Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No subjects found.
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell className="font-medium">{subject.code}</TableCell>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.credits}</TableCell>
                  <TableCell>
                    {subject.marks}/{subject.maxMarks}
                  </TableCell>
                  <TableCell className={`font-medium ${getGradeColor(subject.grade)}`}>{subject.grade}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

