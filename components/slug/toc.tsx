"use client";
import { useState } from "react";

export default function TOC({ children }: { children: React.ReactNode }) {
  const [showTOC, setShowTOC] = useState<boolean>(false);

  return (
    <div className="md:hidden sticky top-16 z-50 bg-slate-100 border bg-opacity-90 backdrop-blur-md rounded-lg -mx-2">
      <div
        className="p-4 flex items-center justify-between"
        onClick={() => setShowTOC(!showTOC)}
      >
        <div>Table of contents</div>
        <i className={`bi bi-chevron-${showTOC ? "up" : "down"}`} />
      </div>
      {showTOC && (
        <div className="pt-0 flex border-t flex-col divide-y max-h-[50vh] overflow-y-scroll text-sm">
          {children}
        </div>
      )}
    </div>
  );
}
