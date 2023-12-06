import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/scss"}>SCSS</Link>
      <Link href={"/stylex"}>StyleX</Link>
      <Link href={"/tailwind"}>Tailwind</Link>
    </main>
  );
}
