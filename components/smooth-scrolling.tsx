"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
