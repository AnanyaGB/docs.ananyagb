import { DATA } from "@/app/lib/frontMatter/data";
import Container from "../styled/container";
import TableCard from "../styled/table-card";
import Link from "next/link";

export default function LatestDocs() {
  let arr = DATA.sort((a, b) => {
    return a.id > b.id ? -1 : 1;
  }).slice(DATA.length - DATA.length, DATA.length - (DATA.length - 4));

  return (
    <Container>
      <div className="py-12">
        <div className="text-4xl tracking-tighter font-semibold">
          Recently added
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-8">
          {arr.map((item, index: any) => (
            <TableCard
              title={item.title}
              key={index}
              parent={item.parent}
              subject={item.subject}
              type={item.type}
              id={item.id}
            />
          ))}
        </div>
        <div className="mt-8">
          <div className="mx-auto max-w-fit">
            <Link href={"/docs/all"}>
              <button className="px-4 py-2 rounded-md bg-sky-50 hover:bg-sky-100 transition-all text-sky-500">
                View all docs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
