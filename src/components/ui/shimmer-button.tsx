import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ShimmerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function ShimmerButton({
  children,
  variant = "primary",
  className,
  ...props
}: ShimmerButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      type="button"
      {...props}
      className={cn(
        "group relative inline-flex items-center rounded-full text-xs font-semibold overflow-hidden",
        isPrimary ? "text-white" : "text-[#1a1a1a]",
        className,
      )}
      style={{
        boxShadow: isPrimary
          ? "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 4px 12px -2px rgba(37,99,235,0.45), 0 1px 2px 0 rgba(37,99,235,0.3)"
          : "0 4px 12px -4px rgba(37,99,235,0.2), 0 1px 3px 0 rgba(37,99,235,0.1)",
        ...props.style,
      }}
    >
      {/* Spinning conic gradient border */}
      <span
        className={cn(
          "absolute inset-0 animate-shimmer rounded-full transition-opacity duration-300",
          isPrimary
            ? "bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#93c5fd,#2563eb)] opacity-80 group-hover:opacity-100"
            : "bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#93c5fd,#2563eb)] opacity-50 group-hover:opacity-100",
        )}
      />
      {/* Inner fill */}
      <span
        className={cn(
          "absolute inset-[2px] rounded-full transition-colors duration-300",
          isPrimary
            ? "bg-blue-600 group-hover:bg-blue-700"
            : "bg-white group-hover:bg-blue-50",
        )}
      />
      {/* Top highlight */}
      <span
        className={cn(
          "absolute inset-[2px] rounded-full pointer-events-none",
          isPrimary
            ? "bg-linear-to-b from-white/20 to-transparent"
            : "bg-linear-to-b from-white to-blue-50/30",
        )}
        style={{ height: "50%" }}
      />
      {/* Content */}
      <span className="relative z-10 inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-3.5">
        {children}
      </span>
    </button>
  );
}
