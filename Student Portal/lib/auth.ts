export async function login(studentId: string, password: string) {
  // In a real app, this would be an API call to your backend
  // For demo purposes, we'll simulate a successful login after a delay
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

