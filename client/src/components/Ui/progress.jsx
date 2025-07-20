// components/ui/progress.jsx
import * as React from "react"

const Progress = React.forwardRef(({ className = "", value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative h-2 w-full overflow-hidden rounded-full bg-muted ${className}`}
      {...props}
    >
      <div
        className="h-full bg-primary transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }
