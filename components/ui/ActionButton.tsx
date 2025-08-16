"use client";

import React from "react";
import Link from "next/link";

type ActionVariant = "primary" | "neutral" | "icon";
type ActionType = "link" | "button";

export interface ActionButtonProps {
  type: ActionType;
  href?: string;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  targetBlank?: boolean;
  variant?: ActionVariant;
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<ActionVariant, string> = {
  primary:
    "px-4 py-2 text-xs font-medium bg-[#0D1321] text-[#F0EBD8] dark:bg-[#F0EBD8] dark:text-gray-700 rounded-md shadow-sm border border-[#1D2D44] dark:border-[#748CAB] transition-all hover:pt-[0.40rem] hover:border-b-4 hover:bg-[#F0EBD8] hover:text-[#0D1321] hover:dark:bg-[#0D1321] hover:dark:text-white hover:border-[#3E5C76]",
  neutral:
    "px-4 py-2 text-xs font-medium bg-[#F0EBD8] text-gray-700 dark:bg-[#0D1321] dark:text-gray-300 rounded-md shadow-sm border border-[#748CAB] dark:border-[#1D2D44] transition-all hover:pt-[0.40rem] hover:border-b-4 hover:border-slate-40",
  icon:
    "size-[36px] flex items-center justify-center text-xs font-medium bg-[#F0EBD8] text-gray-700 dark:bg-[#0D1321] dark:text-gray-300 rounded-md shadow-sm border border-[#748CAB] dark:border-[#1D2D44] transition-all hover:pt-[0.40rem] hover:border-b-4 hover:border-slate-40 px-2 py-2",
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  type,
  href,
  label,
  icon,
  onClick,
  targetBlank,
  variant = "neutral",
  className = "",
  ariaLabel,
}) => {
  const content = (
    <>
      {icon ? <div className="scale-75">{icon}</div> : null}
      {label ? <span>{label}</span> : null}
    </>
  );

  const classes = `${variantClasses[variant]} ${className}`;

  if (type === "link" && href) {
    const isExternal = href.startsWith("http") || targetBlank;
    if (isExternal) {
      return (
        <a
          href={href}
          target={targetBlank ? "_blank" : undefined}
          rel={targetBlank ? "noopener noreferrer" : undefined}
          className={classes}
          aria-label={ariaLabel || label}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel || label}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel || label}>
      {content}
    </button>
  );
};

export default ActionButton;


