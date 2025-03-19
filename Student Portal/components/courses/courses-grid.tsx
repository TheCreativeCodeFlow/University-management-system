"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Course {
  id: string
  code: string
  name: string
  credits: number
  faculty: {
    id: string
    name: string
    email: string
    avatar?: string
  }
  schedule: string
  room: string
}

interface CoursesGridProps {
  data: Course[]
}

export function CoursesGrid({ data }: CoursesGridProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = data.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.faculty.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="ml-auto">
          <Badge variant="outline" className="ml-2">
            {filteredData.length} courses
          </Badge>
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed">
          <p className="text-sm text-muted-foreground">No courses found.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>
                  {course.code} • {course.credits} Credits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={course.faculty.avatar} alt={course.faculty.name} />
                    <AvatarFallback>{course.faculty.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{course.faculty.name}</p>
                    <p className="text-xs text-muted-foreground">{course.faculty.email}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Schedule: {course.schedule}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Room: {course.room}</Badge>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

