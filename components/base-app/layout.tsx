import Footer from "./footer";
import Navbar from "./navbar";

type layout = {
  children: React.ReactNode;
};

export default function Layout({ children }: layout) {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}
