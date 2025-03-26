import type { Metadata } from "next"
import { ProfileForm } from "@/components/profile/profile-form"
import { getStudentProfile } from "@/lib/data"

export const metadata: Metadata = {
  title: "Profile | Student Portal",
  description: "View and update your profile information",
}

export default async function ProfilePage() {
  const profileData = await getStudentProfile()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ProfileForm data={profileData} />
      </div>
    </div>
  )
}

