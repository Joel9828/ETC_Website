import { ReactNode } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  className?: string;
}

export function CTAButton({ children, variant = "solid", href, className, onClick, ...props }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-bold text-sm sm:text-base uppercase tracking-wider rounded-full px-8 py-3 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer";
  
  const variants = {
    solid: "bg-white text-primary shadow-lg hover:shadow-xl hover:bg-gray-50",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
  };

  const Component = (
    <button 
      className={cn(baseClasses, variants[variant], className)} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a 
          href={href} 
          className={cn(baseClasses, variants[variant], className)}
          onClick={(e) => {
            if (onClick) onClick(e as any);
            const el = document.getElementById(href.substring(1));
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          {...(props as any)}
        >
          {children}
        </a>
      );
    }
    if (/^https?:\/\//i.test(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseClasses, variants[variant], className)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {Component}
      </Link>
    );
  }

  return Component;
}