import { DATA } from "@/app/lib/frontMatter/data";
import Container from "../styled/container";
import TableCard from "../styled/table-card";

export default function LatestDocs() {
  return (
    <Container>
      <div className="py-12">
        <div className="text-4xl tracking-tighter font-semibold">
          Recently added
        </div>
        <div className="grid grid-cols-1 rounded-md overflow-hidden border mt-8">
          <div className="bg-slate-100 flex items-center border-b px-4 py-2 font-medium text-black">
            <div className="flex-[2] flex-shrink-0">Title</div>
            <div className="flex-1 flex-shrink-0">Parent</div>
            <div className="flex-1 flex-shrink-0">Subject</div>
            <div className="flex-1 flex-shrink-0">Type</div>
            <div className="flex-1 flex-shrink-0">ID</div>
          </div>
          {DATA.map((item, index: any) => (
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
