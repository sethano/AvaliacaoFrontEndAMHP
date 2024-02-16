import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href="/news">news</Link>
      <Link href="/agreement">agreement</Link>
    </main>
  );
}
