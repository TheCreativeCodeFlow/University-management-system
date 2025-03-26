"use client"

import { useState } from "react"
import { Bot, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatbotDialog } from "./chatbot-dialog"

export function ChatbotButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="icon"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        <span className="sr-only">Open chatbot</span>
      </Button>
      <ChatbotDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

