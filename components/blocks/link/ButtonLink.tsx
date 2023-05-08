import Link from "next/link";
import React from "react";
import { buttonStyles } from "../button/Button";
import { VariantProps } from "class-variance-authority";

interface Props
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  href: string;
  onClick?: any;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  className?: string;
}

export default function ButtonLink({
  className,
  intent,
  size,
  width = "max",
  font,
  href,
  children,
  onClick,
  startIcon,
  endIcon,
  ...props
}: Props) {
  const styles = buttonStyles({
    intent,
    size,
    className,
    width,
    font,
  });

  return (
    <Link href={href} className={styles} onClick={onClick} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </Link>
  );
}
