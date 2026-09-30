import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ children, className, align = "center" }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-heading font-extrabold uppercase tracking-widest text-3xl md:text-4xl lg:text-5xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {children}
    </h2>
  );
}