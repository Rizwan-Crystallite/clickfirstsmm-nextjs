import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, theme, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        `w-full h-[50px] px-2 sm:px-3 inline-flex rounded-md bg-accent text-[14px] sm:text-[16px] placeholder:text-[#989898] text-black focus-visible:outline-primary`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
