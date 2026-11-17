"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioAtmosphere() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          setIsPlaying(false);
        }, 500);
      }
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        masterGain.gain.setTargetAtTime(0.04, ctx.currentTime, 1.2);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Sub low oscillator (55Hz - A1 fundamental)
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(55, ctx.currentTime);

        // Harmonic overtone oscillator (110Hz - A2 soft warm timbre)
        const osc2 = ctx.createOscillator();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(110, ctx.currentTime);

        // Gentle filter
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(220, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start();
        osc2.start();

        setIsPlaying(true);
      } catch {
        // AudioContext not allowed or not supported
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <button
        onClick={toggleSound}
        aria-label={isPlaying ? "Mute ambient sanctuary audio" : "Play ambient sanctuary audio"}
        title={isPlaying ? "Silence Atmosphere" : "Awaken Sanctuary Atmosphere"}
        className="group flex items-center gap-2.5 rounded-full border border-gold/30 bg-obsidian/90 px-3.5 py-2 text-ivory/80 shadow-luxury backdrop-blur-md transition-all duration-300 hover:border-gold hover:text-gold focus:outline-none focus:ring-1 focus:ring-gold"
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <Volume2 className="h-3.5 w-3.5 text-gold" />
            <span className="font-sans text-[9px] uppercase tracking-ritual text-champagne hidden sm:inline">
              Sanctuary Audio
            </span>
          </>
        ) : (
          <>
            <VolumeX className="h-3.5 w-3.5 text-ash group-hover:text-gold transition-colors" />
            <span className="font-sans text-[9px] uppercase tracking-ritual text-ash group-hover:text-champagne hidden sm:inline">
              Sound Atmosphere
            </span>
          </>
        )}
      </button>
    </div>
  );
}
