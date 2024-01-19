import LatestDocs from "@/components/home/latest-docs";
import Welcome from "@/components/home/welcome";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Welcome />
      <LatestDocs />
    </div>
  );
}
