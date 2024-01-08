import Container from "@/components/styled/container";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="not-found">
      <div className="max-w-5xl mx-auto bg-gradient-to-b from-transparent to-white lg:bg-transparent">
        <Container>
          <div className="h-[80vh] flex items-center">
            <div>
              <div className="text-6xl md:text-9xl tracking-tighter font-mono">
                Error: 404
              </div>
              <div className="mt-8 text-2xl md:text-4xl tracking-tighter">
                Oh God, Not Again! Okay, two things and two things only:
              </div>
              <div className="mt-8 pl-8 md:pl-16 text-lg md:text-2xl">
                <ol className="list-decimal">
                  <li>You aren&apos;t cool enough to visit this page. Or,</li>
                  <li>
                    This page doesn&apos;t exist ...{" "}
                    <i className="italic">like your social life</i>.
                  </li>
                </ol>
              </div>
              <div className="mt-8">
                <Link href="/">
                  <div className="px-4 max-w-fit py-2 rounded-md bg-sky-400 text-white hover:bg-sky-600 transition-all">
                    Leave! Ugh.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
