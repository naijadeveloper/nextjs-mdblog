import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center p-3 bg-stone-700">
      <Link href="/">
        <h2 className="text-2xl">Mdblog</h2>
      </Link>
    </header>
  );
}
