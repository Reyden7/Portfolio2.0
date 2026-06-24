"use client";

import type { MouseEvent, ReactNode } from "react";
import { usePageTransition } from "../../context/PageTransitionContext";

type TransitionLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  scrollTarget?: string;
  ariaLabel?: string;
};

function TransitionLink({
  to,
  children,
  className,
  scrollTarget,
  ariaLabel,
}: TransitionLinkProps) {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigateWithTransition(to, { scrollTarget });
  };

  return (
    <a
      href={to}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default TransitionLink;
