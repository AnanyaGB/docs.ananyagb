import Logo from "@/components/base-app/logo";

export default function Loading() {
  return (
    <div className="flex h-[70vh] items-center justify-center">
      <div className="relative h-64 w-64">
        <div className="absolute inset-0 animate-ping rounded-full bg-sky-300"></div>
        <div className="absolute inset-1 animate-spin rounded-full bg-gradient-to-b from-sky-50 via-sky-100 to-sky-200"></div>
        <div className="absolute inset-4 grid place-items-center rounded-full bg-white">
          <Logo />
        </div>
      </div>
    </div>
  );
}
