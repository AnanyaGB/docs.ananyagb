import Welcome from "@/components/home/welcome";
import { DATA } from "./lib/partitions/semesters/data";
import { getAllPaths } from "./lib/stream/up";

export default async function Home() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
