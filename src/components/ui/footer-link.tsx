import Link from "next/link";
import React from "react";

interface LinkProps {
    text: string
    link: string
    linkText: string
}

const FooterLink = ({link, text, linkText}: LinkProps) => {
  return (
    <p className="text-xs md:text-sm text-neutral-500">
      {text}{" "}
      <Link
        target="_blank"
        rel="noopener norefferer"
        href={link}
        className="text-sky-500 font-medium"
      >
        {linkText}
      </Link>
    </p>
  );
};

export default FooterLink;
