"use client"

import { useState } from "react"
import { FileText, Search, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CourseMaterial {
  id: string
  title: string
  description?: string
  fileUrl: string
  uploadedAt: string
}

interface CourseMaterialsProps {
  materials: CourseMaterial[]
}

export function CourseMaterials({ materials }: CourseMaterialsProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMaterials = materials.filter(
    (material) =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-4 p-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search materials..."
          className="w-full pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ScrollArea className="h-[400px] rounded-md border">
        {filteredMaterials.length === 0 ? (
          <div className="flex h-[200px] items-center justify-center">
            <p className="text-sm text-muted-foreground">No materials found.</p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {filteredMaterials.map((material) => (
              <div key={material.id} className="flex items-start gap-4 p-3 rounded-lg border">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium">{material.title}</h4>
                  {material.description && <p className="text-xs text-muted-foreground mt-1">{material.description}</p>}
                  <p className="text-xs text-muted-foreground mt-1">Uploaded on {formatDate(material.uploadedAt)}</p>
                </div>
                <Button size="icon" variant="ghost" className="h-7 w-7">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  )
}

