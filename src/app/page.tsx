import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Metadata } from 'next';
import { CustomLink } from "@/components";

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <CustomLink
        route="/products"
        title="Go to products"
        icon={<ArrowRightIcon className="size-12 text-white ml-4" />}
        className="text-5xl"
      />
    </main>
  );
}
