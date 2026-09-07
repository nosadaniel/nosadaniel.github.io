import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-surface-hover",
        featured && "border-accent/60 md:col-span-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
