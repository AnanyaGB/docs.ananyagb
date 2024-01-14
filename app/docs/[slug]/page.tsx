import { BASEPATH, getAllPaths } from "@/app/lib/stream/up";
import Container from "@/components/styled/container";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import Link from "next/link";

// type data = {
//   data: {
//     title: string;
//     subject: string;
//     type: string;
//     parent: string;
//     id: number;
//     archived: boolean;
//   };
//   content?: string;
// };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await getData(params.slug);
  return {
    title: `(${data.id.toString()}) – ${data.title}, ${data.parent}, ${
      data.subject
    } - ${data.type} | Docs - AnanyaGB`,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = getAllPaths;

  return paths
    .map((path) => path.replace(/\.md?$/, ""))
    .map((path) => ({
      slug: path,
    }));
}

const getData = async (id: string) => {
  const loc = path.join(BASEPATH, `${id}.md`);
  const file = fs.readFileSync(loc);
  return matter(file);
};

const Feilds = ({ tag, data }: { tag: string; data: string | number }) => {
  return (
    <div className="bg-slate-50 border rounded-md px-2 py-1">
      <span className="uppercase text-xs">{tag}</span>:{" "}
      <span className="font-mono">{data}</span>
    </div>
  );
};

export default async function Docs({ params }: { params: { slug: string } }) {
  const { data, content } = await getData(params.slug);
  return (
    <Container>
      <div className="flex flex-col md:flex-row py-12 gap-12">
        <div className="flex-1">1</div>
        <div className="flex-[3]">
          <div className="border-b pb-8 mb-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3">
                <div className="text-6xl font-semibold tracking-tighter">
                  {data.title}
                </div>
              </div>
              <div className="col-span-2">
                <Feilds tag="Parent" data={data.parent} />
              </div>
              <div>
                <Feilds tag="Subject" data={data.subject} />
              </div>
              <div>
                <Feilds tag="Type" data={data.type} />
              </div>
              <div>
                <Feilds tag="SL#" data={data.id} />
              </div>
              <div>
                <Feilds
                  tag="Status"
                  data={data.archived ? "Archived" : "Current"}
                />
              </div>
            </div>
          </div>
          <div className="prose max-w-full prose-h1:mt-20 prose-img:mx-auto">
            <Markdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {content}
            </Markdown>
          </div>
          <div className="py-12">
            <Link
              href={`https://github.com/AnanyaGB/docs.ananyagb/blob/master/_data/docs/${data.id}.md`}
              target="_blank"
            >
              <div className="flex items-center text-slate-500 gap-2 group">
                <i className="bi bi-github text-2xl" />
                <div className="group-hover:underline">
                  Edit this page on GitHub
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
