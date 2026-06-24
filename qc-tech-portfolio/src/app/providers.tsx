"use client";

import CustomCursor from "../components/CustomCursor/CustomCursor";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import { PageTransitionProvider } from "../context/PageTransitionContext";

export default function Providers({ children }) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <PageTransitionProvider>{children}</PageTransitionProvider>
    </>
  );
}
