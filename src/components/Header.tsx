import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [count, setCount] = useState<number>(0);
  return (
    <header className="flex justify-between items-center p-3 bg-stone-700">
      <Link href="/">
        <h2 className="text-2xl">Mdblog</h2>
      </Link>
      <button
        className="border p-3"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </header>
  );
}
