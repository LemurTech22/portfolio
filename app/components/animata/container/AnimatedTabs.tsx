// AnimatedTabs.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface MenuItem {
  name: string;
  href: string;
}

interface AnimatedTabsProps {
  items: MenuItem[];
}

export function AnimatedTabs({ items }: AnimatedTabsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Find active index based on pathname
  useEffect(() => {
    const index = items.findIndex(item => item.href === pathname);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname, items]);

  // Update indicator position
  useEffect(() => {
    if (navRef.current) {
      const links = navRef.current.querySelectorAll('a');
      const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
      const targetLink = links[targetIndex] as HTMLAnchorElement;
      
      if (targetLink) {
        setIndicatorStyle({
          left: targetLink.offsetLeft,
          width: targetLink.offsetWidth,
        });
      }
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <div className="relative flex" ref={navRef}>
      {/* Animated Background Indicator */}
      <div
        className="absolute bottom-0 h-full bg-emerald-500/20 rounded-lg transition-all duration-300 ease-out"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />
      
      {items.map((item, index) => (
        <Link key={item.name} href={item.href}>
          <span
            className={`relative cursor-pointer transition-colors px-4 py-2 text-white hover:text-emerald-400 z-10 ${
              pathname === item.href ? "text-emerald-400 font-semibold" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
}