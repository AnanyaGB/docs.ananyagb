import fs from "fs";
import matter from "gray-matter";
import path from "path";

type frontMatter = {
  title: string;
  id: number;
  parent: string;
  type: string;
};

export const BASEPATH = path.join(process.cwd(), "_data/docs");

export const getAllPaths = fs
  .readdirSync(BASEPATH)
  .filter((path) => /\.md?$/.test(path));

let files: frontMatter[] = [];

getAllPaths.forEach((file) => {
  const hash = matter(file).data;
  files.push({
    title: hash.title,
    parent: hash.parent,
    id: hash.id,
    type: hash.type,
  });
});
