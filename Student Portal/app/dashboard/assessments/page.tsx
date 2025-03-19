import type { Metadata } from "next"
import { AssessmentsTable } from "@/components/assessments/assessments-table"
import { getAssessmentsData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Assessments | Student Portal",
  description: "View your internal assessments and upcoming tests",
}

export default async function AssessmentsPage() {
  const assessmentsData = await getAssessmentsData()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Internal Assessments</h1>
      </div>
      <AssessmentsTable data={assessmentsData} />
    </div>
  )
}

