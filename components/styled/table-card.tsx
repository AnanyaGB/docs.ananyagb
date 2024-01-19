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
    <Link href={`/docs/${id}`}>
      <div className="rounded-xl overflow-hidden hover:shadow-lg transition-all bg-white group hover:border-blue-500 w-full border ">
        <div className="px-4 py-4 border-b group-hover:border-blue-500">
          <div className="text-xl font-bold">{title}</div>
        </div>
        <div className="px-4 py-4 text-sm flex flex-col gap-1 border-b group-hover:border-blue-500">
          <div className="bg-slate-50 max-w-fit px-2 py-1 rounded-md">
            {parent}
          </div>
          <div className="bg-slate-50 max-w-fit px-2 py-1 rounded-md">
            {subject}
          </div>
          <div className="bg-slate-50 max-w-fit px-2 py-1 rounded-md">
            {type}
          </div>
        </div>
        <div className="px-4 py-2 font-mono bg-gradient-to-r from-indigo-500 to-purple-300 text-white">
          {id}
        </div>
      </div>
    </Link>
  );
}
