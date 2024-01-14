type container = {
  children: React.ReactNode;
};

export default function Container({ children }: container) {
  return <div className="px-4 max-w-7xl mx-auto">{children}</div>;
}
