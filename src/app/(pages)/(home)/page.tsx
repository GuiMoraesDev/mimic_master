import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-3xl">Mimic Master</h1>

      <div className="flex flex-wrap gap-5">
        <Link href="/games/group" className="px-5 py-4 rounded-md border-2">
          Jogo em grupo
        </Link>
      </div>
    </main>
  );
}
