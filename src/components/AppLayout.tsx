import { ReactNode } from "react";
//
import Meta from "./Meta";
import Header from "./Header";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <Header />
      <main className="p-3 mt-8">{children}</main>
    </>
  );
}
