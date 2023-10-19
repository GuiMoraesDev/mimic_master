import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex items-center py-3 px-4 mb-6">
        <Link
          href="/"
          className="flex gap-2 items-center group select-none border-2 px-3 py-2 rounded-md"
        >
          <ArrowBigLeft className="group-hover:scale-x-125 group-hover:scale-y-75 transition ease-in-out" />
          Back
        </Link>
      </header>

      {children}
    </>
  );
}
