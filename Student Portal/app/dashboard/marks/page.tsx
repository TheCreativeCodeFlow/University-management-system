import type { Metadata } from "next"
import { MarksTable } from "@/components/marks/marks-table"
import { MarksChart } from "@/components/marks/marks-chart"
import { getMarksData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Marks | Student Portal",
  description: "View your academic performance and marks",
}

export default async function MarksPage() {
  const marksData = await getMarksData()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Marks & CGPA</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <MarksChart data={marksData} />
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <h3 className="text-lg font-medium">CGPA Summary</h3>
            <p className="text-4xl font-bold mt-2">{marksData.cgpa}</p>
            <p className="text-sm text-muted-foreground mt-1">Current semester GPA: {marksData.currentSemesterGpa}</p>
          </div>
        </div>
      </div>
      <MarksTable data={marksData.subjects} />
    </div>
  )
}

