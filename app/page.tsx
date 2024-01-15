import Welcome from "@/components/home/welcome";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Welcome />
      <Link href="/docs/2401121104">Go</Link>
    </div>
  );
}
