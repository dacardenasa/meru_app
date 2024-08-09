"use client";

import { useEffect } from "react";

import { ErrorLayout } from "@/components";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorLayout reset={() => reset()} />;
}
