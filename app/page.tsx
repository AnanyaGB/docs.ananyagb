import Welcome from "@/components/home/welcome";
import { DATA } from "./lib/partitions/semesters/data";
import { getAllPaths } from "./lib/stream/up";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Welcome />
      <Link href="/docs/2401121104">Go</Link>
    </div>
  );
}
