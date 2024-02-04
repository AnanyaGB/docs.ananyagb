import Link from "next/link";
import Container from "../styled/container";
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="py-12 bg-slate-50 border-t">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-slate-500">
          <div className="grayscale">
            <Logo />
          </div>
          <div className="flex items-center gap-8">
            <Link href="/about">
              <span className="hover:underline">About</span>
            </Link>
            <div>&copy; MIT - {new Date().getFullYear()}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
