"use client";

import { useEffect, useRef, useState } from "react";

function tone(context: AudioContext, frequency = 280, duration = 0.055) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, context.currentTime);
  gain.gain.setValueAtTime(0.035, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
}

export function Experience() {
  const [muted, setMuted] = useState(true);
  const [toast, setToast] = useState("");
  const audioRef = useRef<AudioContext | null>(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem("ak-sound");
    window.setTimeout(() => setMuted(saved !== "on"), 0);
    enabledRef.current = saved === "on";

    const root = document.documentElement;
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      root.style.setProperty("--scroll", `${max > 0 ? (scrollY / max) * 100 : 0}%`);
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

    const achievementObserver = new IntersectionObserver((entries) => {
      const entry = entries.find((item) => item.isIntersecting);
      if (entry) {
        setToast((entry.target as HTMLElement).dataset.achievement ?? "Achievement unlocked");
        achievementObserver.disconnect();
        window.setTimeout(() => setToast(""), 4200);
      }
    }, { threshold: 0.55 });
    document.querySelectorAll("[data-achievement]").forEach((item) => achievementObserver.observe(item));

    const tiltHandlers: Array<[Element, (event: Event) => void, () => void]> = [];
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches && matchMedia("(hover: hover)").matches) {
      document.querySelectorAll(".tilt").forEach((item) => {
        const move = (raw: Event) => {
          const event = raw as PointerEvent;
          const rect = item.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          (item as HTMLElement).style.transform = `perspective(1200px) rotateX(${-y * 2.5}deg) rotateY(${x * 2.5}deg)`;
        };
        const leave = () => ((item as HTMLElement).style.transform = "");
        item.addEventListener("pointermove", move);
        item.addEventListener("pointerleave", leave);
        tiltHandlers.push([item, move, leave]);
      });
    }

    const playClick = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      if (target.hasAttribute("data-download")) {
        for (let index = 0; index < 18; index += 1) {
          const spark = document.createElement("i");
          spark.className = "confetti-spark";
          spark.style.setProperty("--angle", `${(360 / 18) * index}deg`);
          spark.style.setProperty("--color", index % 2 ? "#3ce8e0" : "#ff3b4f");
          target.appendChild(spark);
          window.setTimeout(() => spark.remove(), 850);
        }
      }
      if (!enabledRef.current) return;
      const AudioCtor = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioRef.current ??= new AudioCtor();
      tone(audioRef.current, 320);
    };
    document.querySelectorAll("a, button").forEach((item) => item.addEventListener("click", playClick));
    addEventListener("pointermove", onPointer);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect(); achievementObserver.disconnect();
      removeEventListener("pointermove", onPointer); removeEventListener("scroll", onScroll);
      document.querySelectorAll("a, button").forEach((item) => item.removeEventListener("click", playClick));
      tiltHandlers.forEach(([item, move, leave]) => { item.removeEventListener("pointermove", move); item.removeEventListener("pointerleave", leave); });
    };
  }, []);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    enabledRef.current = !next;
    localStorage.setItem("ak-sound", next ? "off" : "on");
    if (!next) {
      const AudioCtor = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioRef.current ??= new AudioCtor();
      tone(audioRef.current, 520, 0.09);
    }
  };

  return (
    <>
      <div className="xp-track" aria-hidden="true"><span /></div>
      <div className="cursor-glow" aria-hidden="true" />
      <button className="sound-toggle" type="button" onClick={toggleSound} aria-label={muted ? "Enable interface sounds" : "Mute interface sounds"}>
        {muted ? "SOUND OFF" : "SOUND ON"}<i className={muted ? "" : "active"} />
      </button>
      <div className={`achievement ${toast ? "show" : ""}`} role="status" aria-live="polite"><span>ACHIEVEMENT UNLOCKED</span><strong>{toast}</strong></div>
    </>
  );
}
