import Link from "next/link";

type navLinks = {
  children: React.ReactNode;
  uri: string;
  blank?: boolean;
};

export default function NavLinks({ children, uri, blank, ...rest }: navLinks) {
  return (
    <Link href={uri} target={blank ? "_blank" : "_self"} {...rest}>
      <span className="text-slate-600 text-sm transition-all hover:text-slate-900 hover:bg-slate-200 px-2 py-2 rounded-md">
        {children}
      </span>
    </Link>
  );
}
