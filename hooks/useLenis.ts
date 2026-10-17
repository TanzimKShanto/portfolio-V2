"use client";

import { useEffect, useSyncExternalStore } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return lenis;
}

function getServerSnapshot() {
  return null;
}

export function useLenisInstance() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function useLenis() {
  useEffect(() => {
    const instance = new Lenis({
      duration: 1.5, // slipperiness
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis = instance;
    emit();

    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      lenis = null;
      emit();
    };
  }, []);
}
