import LatestDocs from "@/components/home/latest-docs";
import Welcome from "@/components/home/welcome";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div className="bg-amber-500 text-amber-50 text-center p-2 text-sm">
        Searching for all documents is now easier, with a search enabled
        filtering, at{" "}
        <Link href="/docs/all">
          <span className="underline">All Docs</span>
        </Link>
        {"."}
      </div>
      <Welcome />
      <LatestDocs />
    </div>
  );
}
