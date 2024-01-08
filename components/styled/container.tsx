type container = {
  children: React.ReactNode;
};

export default function Container({ children }: container) {
  return <div className="px-4 md:px-8 lg:px-16 xl:px-24">{children}</div>;
}
