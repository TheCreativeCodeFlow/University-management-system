import type { Metadata } from "next"
import { getCourseDetails } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseMaterials } from "@/components/courses/course-materials"
import { CourseAssessments } from "@/components/courses/course-assessments"

export const metadata: Metadata = {
  title: "Course Details | Student Portal",
  description: "View detailed information about a course",
}

export default async function CourseDetailsPage({ params }: { params: { id: string } }) {
  const courseData = await getCourseDetails(params.id)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{courseData.name}</h1>
          <p className="text-muted-foreground">
            {courseData.code} • {courseData.credits} Credits
          </p>
        </div>
        <Button variant="outline">Download Syllabus</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Course Description</h3>
                <p>{courseData.description}</p>

                <h3 className="text-lg font-medium mt-6">Schedule</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-3">
                    <p className="text-sm font-medium">Class Schedule</p>
                    <p className="text-sm text-muted-foreground">{courseData.schedule}</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Room {courseData.room}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="materials">
              <CourseMaterials materials={courseData.materials} />
            </TabsContent>
            <TabsContent value="assessments">
              <CourseAssessments assessments={courseData.assessments} />
            </TabsContent>
          </Tabs>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Faculty</CardTitle>
            <CardDescription>Course instructor information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4 text-center">
              <Avatar className="h-20 w-20">
                <AvatarImage src={courseData.faculty.avatar} alt={courseData.faculty.name} />
                <AvatarFallback>{courseData.faculty.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium">{courseData.faculty.name}</h3>
                <p className="text-sm text-muted-foreground">{courseData.faculty.email}</p>
                <Badge variant="outline" className="mt-2">
                  {courseData.faculty.department}
                </Badge>
              </div>
              <Button variant="outline" className="w-full mt-2">
                Contact Faculty
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

