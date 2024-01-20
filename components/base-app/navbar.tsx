import Link from "next/link";
import Container from "../styled/container";
import NavLinks from "../styled/navLinks";
import Logo from "./logo";

export default function Navbar() {
  const navlinks: { text: string; uri: string; blank: boolean }[] = [
    {
      text: "All Data",
      uri: "/all",
      blank: false,
    },
    {
      text: "Semesters",
      uri: "/semesters",
      blank: false,
    },
    {
      text: "Projects",
      uri: "/projects",
      blank: false,
    },
    {
      text: "Learn",
      uri: "/learn",
      blank: false,
    },
    {
      text: "Updates",
      uri: "/updates",
      blank: false,
    },
    {
      text: "Archive",
      uri: "/archive",
      blank: false,
    },
  ];

  return (
    <>
      <div className="text-sm bg-gradient-to-r from-sky-400 to-indigo-400 text-white">
        <Container>
          <div className="min-h-8 px-4 py-4 md:py-0 justify-center flex items-center">
            <div>
              Want to edit or add documents? Go to{" "}
              <Link
                href="https://github.com/AnanyaGB/docs.ananyagb"
                target="_blank"
              >
                <span className="underline">GitHub</span>
              </Link>{" "}
              to access code.
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white bg-opacity-90 backdrop-blur-md sticky top-0 z-50">
        <Container>
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Logo />
              </Link>
              <div className="items-center hidden">
                {navlinks.map((item, index: any) => (
                  <NavLinks uri={item.uri} blank={item.blank} key={index}>
                    {item.text}
                  </NavLinks>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <NavLinks uri="https://ananyagb.in" blank>
                Base Site
              </NavLinks>
              <Link href="https://github.com/AnanyaGB" target="_blank">
                <i className="bi bi-github text-2xl" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
