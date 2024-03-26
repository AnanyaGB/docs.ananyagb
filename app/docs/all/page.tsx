"use client";
import { DATA } from "@/app/lib/frontMatter/data";
import Container from "@/components/styled/container";
import TableCard from "@/components/styled/table-card";
import { useEffect, useState } from "react";

type dataArr = {
  title: string;
  parent: string;
  subject: string;
  type: string;
  id: number;
};

export default function Docs() {
  const [search, setSearch] = useState<string>("");
  let arr = DATA.sort((a, b) => {
    return a.id > b.id ? -1 : 1;
  });

  return (
    <Container>
      <div className="py-12">
        <input
          type="text"
          className="border rounded-md w-full block px-4 py-2 outline-none hover:border-neutral-500 transition-all focus:ring-2 ring-sky-300 focus:hover:border-sky-300 focus:border-sky-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          // onKeyUp={handleChange}
          placeholder="Filter documents by title"
        />
      </div>
      <div className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-8">
          {arr.map(
            (item, index: any) =>
              item.title.toLowerCase().includes(search.toLowerCase()) && (
                <TableCard
                  title={item.title}
                  key={index}
                  parent={item.parent}
                  subject={item.subject}
                  type={item.type}
                  id={item.id}
                />
              )
          )}
        </div>
      </div>
    </Container>
  );
}
