import type { Metadata } from "next"
import { CoursesGrid } from "@/components/courses/courses-grid"
import { getCoursesData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Courses | Student Portal",
  description: "View your enrolled courses and faculty information",
}

export default async function CoursesPage() {
  const coursesData = await getCoursesData()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Enrolled Courses</h1>
      </div>
      <CoursesGrid data={coursesData} />
    </div>
  )
}

