import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, theme, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `w-full min-h-[100px] p-2 sm:p-3 inline-flex rounded-md bg-accent text-[14px] sm:text-[16px] placeholder:text-[#989898] text-black resize-none focus-visible:outline-primary`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
