import fs from "fs";
import path from "path";

export const BASEPATH = path.join(process.cwd(), "_data/docs");

export const getAllPaths = fs
  .readdirSync(BASEPATH)
  .filter((path) => /\.md?$/.test(path));
