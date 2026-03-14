"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const NavLink = ({ 
  href, 
  children, 
  className,
  onClick
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
