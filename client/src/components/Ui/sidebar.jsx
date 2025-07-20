import React, { createContext, useContext, useState } from "react"
import clsx from "clsx"

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div
        className={clsx(
          "flex h-screen w-full overflow-hidden",
          collapsed && "pl-[4rem]",
          !collapsed && "pl-[16rem]"
        )}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)

export const Sidebar = ({ children, variant = "inset" }) => {
  const { collapsed } = useSidebar()

  return (
    <aside
      className={clsx(
        "fixed left-0 top-0 z-40 h-full bg-background border-r border-border transition-all",
        collapsed ? "w-16" : "w-64",
        variant === "inset" && "pt-4"
      )}
    >
      <nav className="flex h-full flex-col justify-between">{children}</nav>
    </aside>
  )
}

export const SidebarHeader = ({ children }) => (
  <div className="px-4 py-2 border-b border-border">{children}</div>
)

export const SidebarContent = ({ children }) => (
  <div className="flex-1 overflow-y-auto px-2 py-2">{children}</div>
)

export const SidebarFooter = ({ children }) => (
  <div className="border-t border-border p-2">{children}</div>
)

export const SidebarGroup = ({ children }) => <div className="mb-4">{children}</div>

export const SidebarGroupLabel = ({ children }) => (
  <h4 className="mb-1 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
    {children}
  </h4>
)

export const SidebarGroupContent = ({ children }) => <div>{children}</div>

export const SidebarMenu = ({ children }) => <ul className="space-y-1">{children}</ul>

export const SidebarMenuItem = ({ children }) => (
  <li className="flex items-center">{children}</li>
)

export const SidebarMenuButton = ({ children, onClick, isActive, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export const SidebarTrigger = ({ className = "" }) => {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded p-2 hover:bg-muted",
        className
      )}
      onClick={() => setCollapsed(!collapsed)}
    >
      <span className="sr-only">Toggle Sidebar</span>
      {/* Hamburger icon */}
      <div className="space-y-1">
        <span className="block h-0.5 w-4 bg-current"></span>
        <span className="block h-0.5 w-4 bg-current"></span>
        <span className="block h-0.5 w-4 bg-current"></span>
      </div>
    </button>
  )
}

export const SidebarInset = ({ children }) => (
  <div className="flex-1 ml-16 md:ml-64 transition-all duration-200">{children}</div>
)
