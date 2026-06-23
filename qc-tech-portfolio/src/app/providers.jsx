"use client";

import { useState } from "react";
import Loader from "../components/Loader/Loader";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import { PageTransitionProvider } from "../context/PageTransitionContext";

export default function Providers({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      )}
    </>
  );
}
