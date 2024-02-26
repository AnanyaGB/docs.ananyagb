export const generateSlug = (string: string) => {
  let str = string.replace(/`/g, "").replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return str;
};

export function Headings1({ ...props }) {
  return <h1 id={generateSlug(props.children)} {...props} />;
}
export function Headings2({ ...props }) {
  return <h2 id={generateSlug(props.children)} {...props} />;
}
