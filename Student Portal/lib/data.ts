// This file simulates fetching data from an API
// In a real app, these functions would make actual API calls

export async function getStudentData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    attendance: {
      percentage: 85,
    },
    cgpa: 9.3,
    upcomingAssessments: 3,
    enrolledCourses: 5,
  }
}

export async function getAttendanceData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    overallPercentage: 85,
    records: [
      {
        id: "1",
        course: "Database Managment System",
        date: "2023-03-01",
        status: "present",
        percentage: 98,
      },
      {
        id: "2",
        course: "Artificial Intelligence",
        date: "2023-03-02",
        status: "present",
        percentage: 96,
      },
      {
        id: "3",
        course: "Probability and Statistics",
        date: "2023-03-03",
        status: "absent",
        percentage: 89,
      },
      {
        id: "4",
        course: "Data Analysis of Algorithm",
        date: "2023-03-04",
        status: "present",
        percentage: 100,
      },
      {
        id: "5",
        course: "Big Data Tools and Techniques",
        date: "2023-03-05",
        status: "late",
        percentage: 92,
      },
    ],
    chartData: [
      { name: "21CSC205P", value: 99 },
      { name: "21CSC206T", value: 96 },
      { name: "21MAB301T", value: 89 },
      { name: "21CSC204J", value: 100 },
      { name: "21CSE222T", value: 92 },
    ],
  }
}

export async function getMarksData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    cgpa: 9.3,
    currentSemesterGpa: 9.5,
    subjects: [
      {
        id: "1",
        code: "21CSC205P",
        name: "Database Managment System",
        credits: 4,
        grade: "O",
        marks: 98,
        maxMarks: 100,
      },
      {
        id: "2",
        code: "21CSC206T",
        name: "Artificial Intelligence",
        credits: 3,
        grade: "O",
        marks: 96,
        maxMarks: 100,
      },
      {
        id: "3",
        code: "21MAB301T ",
        name: "Probability and Statistics",
        credits: 4,
        grade: "A+",
        marks: 89,
        maxMarks: 100,
      },
      {
        id: "4",
        code: "21CSC204J",
        name: "Data Analysis of Algorithm",
        credits: 4,
        grade: "A+",
        marks: 98,
        maxMarks: 100,
      },
      {
        id: "5",
        code: "21CSE222T",
        name: "Big Data Tools and Techniques",
        credits: 3,
        grade: "O",
        marks: 98,
        maxMarks: 100,
      },
    ],
    semesterData: [
      { semester: "Sem 1", gpa: 9.2 },
      { semester: "Sem 2", gpa: 8.8 },
      { semester: "Sem 3", gpa: 9.5 },
    ],
  }
}

export async function getCoursesData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "1",
      code: "21CSC205P",
      name: "Database Managment System",
      credits: 4,
      faculty: {
        id: "f1",
        name: "Dr. Shajeena",
        email: "shajeena@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      schedule: "Mon, Wed 10:00-11:30",
      room: "IST-617",
    },
    {
      id: "2",
      code: "21CSC206T",
      name: "Artificial Intelligence",
      credits: 3,
      faculty: {
        id: "f2",
        name: "Dr. Y. Suganya",
        email: "y.suganya@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      schedule: "Tue, Thu 13:00-14:30",
      room: "IST-425",
    },
    {
      id: "3",
      code: "21MAB301T",
      name: "Probability and Statistics",
      credits: 4,
      faculty: {
        id: "f3",
        name: "Dr. Sivaji",
        email: "sivaji@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      schedule: "Mon, Wed 13:00-14:30",
      room: "IST-210",
    },
    {
      id: "4",
      code: "21CSC204J",
      name: "Data Analysis of Algorithm",
      credits: 4,
      faculty: {
        id: "f4",
        name: "Dr. Kalaivanan",
        email: "kalaivanan@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      schedule: "Fri 10:00-12:00",
      room: "IST-626",
    },
    {
      id: "5",
      code: "21CSE222T",
      name: "Big Data Tools and Techniques",
      credits: 3,
      faculty: {
        id: "f5",
        name: "Dr. K. Deepa",
        email: "k.deepa@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      schedule: "Tue, Thu 10:00-11:30",
      room: "IST-610",
    },
  ]
}

export async function getAssessmentsData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "1",
      course: "Database Managment System",
      title: "Mid-term Examination",
      type: "midterm",
      dueDate: "2023-05-16",
      status: "upcoming",
    },
    {
      id: "2",
      course: "Artificial Intelligence",
      title: "Assignment 3: Binary Search Tree",
      type: "assignment",
      dueDate: "2023-04-10",
      status: "upcoming",
    },
    {
      id: "3",
      course: "Probability and Statistics",
      title: "Quiz 2: Sample Hypothesis",
      type: "quiz",
      dueDate: "2023-04-05",
      status: "upcoming",
    },
    {
      id: "4",
      course: "Data Analysis of Algorithm",
      title: "Review Submission",
      type: "Resarch Paper",
      dueDate: "2023-04-25",
      status: "completed",
      marks: {
        obtained: 18,
        total: 36,
      },
    },
    {
      id: "5",
      course: "Big Data Tools and Techniques",
      title: "Quiz 1: Hadoop Basics",
      type: "quiz",
      dueDate: "2023-03-23",
      status: "completed",
      marks: {
        obtained: 28,
        total: 36,
      },
    },
  ]
}

export async function getStudentProfile() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    name: "Shivam Kumar Sah",
    email: "shivamsahe@university.edu",
    studentId: "RA2311027050033",
    department: "Computer Science and Engineering with Big Data Analytics",
    batch: "2023-2027",
    avatar: "/placeholder.svg?height=80&width=80",
  }
}

export async function updateProfileData(data: any) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would send data to your API
  console.log("Profile data updated:", data)

  return { success: true }
}

export async function getCourseDetails(courseId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    id: courseId,
    code: "21CSC205P",
    name: "Database Managment System",
    description:
      "This course provides a comprehensive introduction to computer science concepts including algorithms, data structures, and programming paradigms. Students will learn fundamental principles of computing and develop problem-solving skills through hands-on programming exercises.",
    credits: 4,
    schedule: "Mon, Wed 10:00-11:30",
    room: "IST-610",
    faculty: {
      id: "f1",
      name: "Dr. Shaajeena",
      email: "shajeena@university.edu",
      department: "Computer Science and Engineering",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    materials: [
      {
        id: "m1",
        title: "Course Syllabus",
        description: "Complete course outline and requirements",
        fileUrl: "#",
        uploadedAt: "2023-01-15T00:00:00Z",
      },
      {
        id: "m2",
        title: "Lecture 1: Introduction to Programming",
        description: "Slides and examples from Lecture 1",
        fileUrl: "#",
        uploadedAt: "2023-01-20T00:00:00Z",
      },
      {
        id: "m3",
        title: "Lecture 2: Variables and Data Types",
        description: "Slides and code samples from Lecture 2",
        fileUrl: "#",
        uploadedAt: "2023-01-27T00:00:00Z",
      },
      {
        id: "m4",
        title: "Programming Assignment 1",
        description: "First programming assignment instructions",
        fileUrl: "#",
        uploadedAt: "2023-02-01T00:00:00Z",
      },
    ],
    assessments: [
      {
        id: "a1",
        title: "Quiz 1: Programming Basics",
        type: "quiz",
        dueDate: "2023-02-10T00:00:00Z",
        status: "completed",
        marks: {
          obtained: 18,
          total: 20,
        },
      },
      {
        id: "a2",
        title: "Programming Assignment 1",
        type: "assignment",
        dueDate: "2023-02-20T00:00:00Z",
        status: "completed",
        marks: {
          obtained: 85,
          total: 100,
        },
      },
      {
        id: "a3",
        title: "Mid-term Examination",
        type: "midterm",
        dueDate: "2023-03-15T00:00:00Z",
        status: "upcoming",
      },
      {
        id: "a4",
        title: "Programming Assignment 2",
        type: "assignment",
        dueDate: "2023-04-05T00:00:00Z",
        status: "upcoming",
      },
    ],
  }
}

export async function queryChatbot(message: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Simple logic to simulate AI responses based on keywords
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("attendance")) {
    return "Your overall attendance is 95%. You need to maintain at least 75% attendance to be eligible for exams. In Database Managment System, your attendance is 90%, and in Artificial Intelligence, it's 85%."
  } else if (lowerMessage.includes("cgpa") || lowerMessage.includes("gpa")) {
    return "Your current CGPA is 9.3. Your highest GPA was 9.5 in semester 3, and your semester-wise progression shows a steady improvement. Keep up the good work!"
  } else if (lowerMessage.includes("exam") || lowerMessage.includes("assessment")) {
    return "You have 3 upcoming assessments:\n1. Mid-term Examination (Database Managment System) on March 15\n2. Programming Assignment 2 (Database Managment System) on April 5\n3. Quiz 2: Mechanics (Probability and Statistics) on April 5"
  } else if (lowerMessage.includes("course")) {
    return "You are currently enrolled in 5 courses this semester:\n1. Database Managment System\n2. Artificial Intelligence\n3. Probability and Statistics\n4. English Literature\n5. Database Systems\n\nYou can view detailed information about each course in the Courses section."
  } else if (
    lowerMessage.includes("faculty") ||
    lowerMessage.includes("professor") ||
    lowerMessage.includes("teacher")
  ) {
    return 'Your course instructors are:\n  || lowerMessage.includes("teacher")) {\n    return "Your course instructors are:\\n\n1. Dr. Shajeena (Database Managment System)\n2. Dr. Y. Suganaya (Artificial Intelligence)\n3. Dr. Sivaji (Probability and Statistics)\n4. Dr. Kalaivanan (English Literature)\n5. Dr. K. Deepa (Database Systems)\n\nYou can find their contact information and office hours in the Courses section."'
  } else if (lowerMessage.includes("deadline") || lowerMessage.includes("due date")) {
    return "Your upcoming deadlines are:\n1. Mid-term Examination (Database Managment System) on March 15\n2. Assignment 3: Calculus (Artificial Intelligence) on April 10\n3. Quiz 2: Mechanics (Probability and Statistics) on April 5"
  } else if (lowerMessage.includes("thank")) {
    return "You're welcome! Feel free to ask if you need help with anything else regarding your academic information."
  } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! I'm your student assistant. I can help you with information about your attendance, marks, courses, and assessments. What would you like to know?"
  } else {
    return "I'm here to help with information about your attendance, marks, courses, and assessments. If you have specific questions about your academic record, please let me know!"
  }
}

