import { BASEPATH, getAllPaths } from "@/app/lib/stream/up";
import Container from "@/components/styled/container";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import Link from "next/link";
import { DATA } from "@/app/lib/frontMatter/data";
import CustomLink from "@/components/markdown/customLink";
import {
  Headings1,
  Headings2,
  generateSlug,
} from "@/components/markdown/headings";
import TOC from "@/components/slug/toc";

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
      <span className="font-mono text-sm">{data}</span>
    </div>
  );
};

export default async function Docs({ params }: { params: { slug: string } }) {
  const components: any = {
    h1: Headings1,
    h2: Headings2,
    a: CustomLink,
  };

  const { data, content } = await getData(params.slug);

  const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g;

  const headings = Array.from(content.matchAll(regXHeader)).map(
    ({ groups: { flag, content } }: any) => ({
      heading: `h${flag.length}`,
      content,
    })
  );

  let arr = DATA.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });

  return (
    <Container>
      <div className="flex relative flex-col md:flex-row py-12 gap-12">
        <div className="flex-1 flex-shrink-0 md:sticky top-32 self-start flex flex-col">
          <div className="mb-2 text-lg font-medium">{data.parent}</div>
          {arr.map(
            (item, index: any) =>
              item.parent === data.parent &&
              item.type === data.type &&
              item.subject === data.subject && (
                <Link href={`/docs/${item.id}`} key={index}>
                  <div
                    className={`${
                      item.id === data.id
                        ? "text-blue-500 font-semibold border-blue-500"
                        : "text-slate-500"
                    } px-4 py-1 transition-all hover:text-blue-400 border-l-2 ml-4`}
                  >
                    {item.title}
                  </div>
                </Link>
              )
          )}
        </div>
        <TOC>
          {headings?.map((item: any, index: any) =>
            item.heading === "h1" ? (
              <Link href={`#${generateSlug(item.content)}`} key="index">
                <div className="hover:text-blue-500 border-t py-2 px-4 cursor-pointer">
                  {item.content.replace(":", "")}
                </div>
              </Link>
            ) : (
              item.heading === "h2" && (
                <Link href={`#${generateSlug(item.content)}`} key={index}>
                  <div className="hover:text-blue-500 py-2 px-4 pl-6">
                    {item.content.replace(":", "")}
                  </div>
                </Link>
              )
            )
          )}
        </TOC>

        <div className="flex-[3] relative">
          <div className="border-b pb-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-3">
                <div className="text-5xl md:text-6xl font-black tracking-tighter">
                  {data.title}
                </div>
              </div>
              <div className="md:col-span-2">
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
          <div className="prose max-w-screen-sm overflow-x-hidden prose-h1:mt-20 prose-img:mx-auto relative">
            <Markdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={components}
            >
              {content}
            </Markdown>
          </div>
        </div>
        <div className="flex-1 flex-shrink-0 md:sticky top-32 self-start">
          <div className="text-lg font-medium mb-2">Table of contents</div>
          <div className="hidden md:flex flex-col max-h-[65vh] overflow-y-scroll pr-2">
            <div className="flex flex-col gap-0 text-slate-600 mt-6 pl-4 border-l-2">
              {headings?.map((item: any, index: any) =>
                item.heading === "h1" ? (
                  <Link href={`#${generateSlug(item.content)}`} key="index">
                    <div className="hover:text-blue-500 py-1 cursor-pointer max-w-fit">
                      {item.content.replace(":", "")}
                    </div>
                  </Link>
                ) : (
                  item.heading === "h2" && (
                    <Link href={`#${generateSlug(item.content)}`} key="index">
                      <div className="ml-4 pl-4 border-l hover:text-blue-500 cursor-pointer max-w-fit text-sm py-1">
                        {item.content.replace(":", "")}
                      </div>
                    </Link>
                  )
                )
              )}
            </div>
          </div>
          <Link
            href={`https://github.com/AnanyaGB/docs.ananyagb/blob/master/_data/docs/${data.id}.md`}
            target="_blank"
          >
            <div className="flex mt-6 items-center text-slate-500 gap-2 group">
              <i className="bi bi-github text-2xl" />
              <div className="group-hover:underline">
                Edit this page on GitHub
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
