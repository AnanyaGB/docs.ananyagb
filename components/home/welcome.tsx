import Container from "../styled/container";

export default function Welcome() {
  return (
    <div className="h-[70vh] md:h-screen bg-gradient-to-br from-transparent to-slate-100 flex items-center">
      <Container>
        <div>
          <div className="text-6xl md:text-9xl outline-none tracking-tighter font-light max-w-7xl">
            Finding the right resource, now made easier.
          </div>
        </div>
        <div className="mt-8 font-light max-w-lg text-lg lg:text-2xl outline-none">
          All of my resources, papers, and projects are now open-source, and is
          governed by the MIT License. This is a centralized portal, to access
          all my public data. Happy surfing!
        </div>
      </Container>
    </div>
  );
}
