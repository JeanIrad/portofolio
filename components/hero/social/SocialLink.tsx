import Link from "next/link";
import React from "react";

interface SocialLinkProps {
  icon: React.ReactNode;
  to: string;
}

export default function SocialLink({ icon, to }: SocialLinkProps) {
  return (
    <Link
      href={to}
      className="text-3xl duration-300 hover:-translate-y-1 text-sky-900/80"
    >
      {icon}
    </Link>
  );
}
