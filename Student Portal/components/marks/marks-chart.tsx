"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MarksData {
  cgpa: number
  currentSemesterGpa: number
  subjects: Array<{
    id: string
    code: string
    name: string
    credits: number
    grade: string
    marks: number
    maxMarks: number
  }>
  semesterData: Array<{
    semester: string
    gpa: number
  }>
}

interface MarksChartProps {
  data: MarksData
}

export function MarksChart({ data }: MarksChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GPA Trend</CardTitle>
        <CardDescription>Your GPA progression across semesters</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.semesterData}>
              <XAxis dataKey="semester" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 10]}
                ticks={[0, 2, 4, 6, 8, 10]}
              />
              <Tooltip
                formatter={(value: number) => [`${value}`, "GPA"]}
                cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="gpa"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

