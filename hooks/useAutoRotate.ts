"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseAutoRotateOptions = {
  count: number;
  interval?: number;
  resumeDelay?: number;
};

export function useAutoRotate({
  count,
  interval = 4000,
  resumeDelay = 8000,
}: UseAutoRotateOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<number | null>(null);

  const [index, setIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current);
    };
  }, []);

  const pauseAfterInteraction = useCallback(() => {
    setManualPaused(true);
    if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current);
    resumeTimeout.current = window.setTimeout(
      () => setManualPaused(false),
      resumeDelay
    );
  }, [resumeDelay]);

  const goTo = useCallback(
    (target: number) => {
      const next = ((target % count) + count) % count;
      setIndex(next);
      setAnnouncement(`Image ${next + 1} of ${count}`);
      pauseAfterInteraction();
    },
    [count, pauseAfterInteraction]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const active =
    count > 1 && !hovered && !focused && !reducedMotion && inView && !manualPaused;

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      interval
    );
    return () => window.clearInterval(id);
  }, [active, interval, count]);

  const containerProps = {
    ref: containerRef,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setFocused(true),
    onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
    },
  };

  return { index, goTo, prev, next, announcement, containerProps };
}
