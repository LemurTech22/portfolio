import React, { JSX } from "react";

interface AnimatedGradientTextProps {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedGradientText({
  className = "",
  children,
  as: Component = "div",
}: AnimatedGradientTextProps) {
  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-text {
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
      <Component
        className={`animate-gradient-text bg-gradient-to-r bg-[length:200%_auto] bg-clip-text text-transparent ${className}`}
      >
        {children}
      </Component>
    </>
  );
}