"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type SidebarContextType = {
  isOpen: boolean
  toggle: () => void
  close: () => void
  open: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)

  return <SidebarContext.Provider value={{ isOpen, toggle, close, open }}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = useContext(SidebarContext)

  if (context === undefined) {
    throw new Error("useSidebar must be used within a Sidebar")
  }

  return context
}

