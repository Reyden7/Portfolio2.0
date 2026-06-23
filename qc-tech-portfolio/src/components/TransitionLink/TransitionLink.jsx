"use client";

import { usePageTransition } from "../../context/PageTransitionContext";

function TransitionLink({ to, children, className, scrollTarget, ariaLabel }) {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (event) => {
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