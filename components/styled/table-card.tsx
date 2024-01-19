import Link from "next/link";

type card = {
  title: string;
  parent: string;
  subject: string;
  type: string;
  id: number;
};

export default function TableCard({
  title,
  parent,
  subject,
  type,
  id,
  ...rest
}: card) {
  return (
    <div className="border-b last-of-type:border-none" {...rest}>
      <Link href={`docs/${id}`}>
        <div className="flex bg-white hover:bg-slate-50 transition-all items-center px-4 py-2 text-slate-700 group">
          <div className="flex-[2] flex-shrink-0 group-hover:text-blue-500">
            {title}
          </div>
          <div className="flex-1 flex-shrink-0 text-sm">{parent}</div>
          <div className="flex-1 flex-shrink-0 text-sm">{subject}</div>
          <div className="flex-1 flex-shrink-0 text-sm">{type}</div>
          <div className="flex-1 flex-shrink-0 text-sm">{id}</div>
        </div>
      </Link>
    </div>
  );
}
