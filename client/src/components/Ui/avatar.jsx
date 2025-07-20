import React from "react"
import clsx from "clsx"

export function Avatar({ className, children }) {
  return (
    <div className={clsx("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  )
}

export function AvatarFallback({ children, className }) {
  return (
    <div className={clsx("flex h-full w-full items-center justify-center bg-muted text-muted-foreground", className)}>
      {children}
    </div>
  )
}
