import { cn } from "@/lib/utils"

function Skeleton({
  className,
  children
}) {
  return (
    <div className={cn("animate-pulse", className)}>
      {children}
    </div>
  );
}

export { Skeleton }
