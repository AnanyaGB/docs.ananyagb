import { DATA } from "@/app/lib/frontMatter/data";
import Container from "../styled/container";
import TableCard from "../styled/table-card";

export default function LatestDocs() {
  let arr = DATA.sort((a, b) => {
    return a.id > b.id ? -1 : 1;
  });

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
      </div>
    </Container>
  );
}
