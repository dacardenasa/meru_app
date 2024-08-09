import { Button } from "@/components";

type ErrorProps = {
  reset: () => void;
};

export default function ErrorLayout({ reset }: ErrorProps) {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <p className="text-center text-5xl mb-4">Something went wrong!</p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
