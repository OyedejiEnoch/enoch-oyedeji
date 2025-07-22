'use client'
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Text content split into words
const text = `Developing web applications, solving problems, and creating innovative solutions. Strong in both frontend and backend development with practical experience, and strong focus on performance optimization and user experience.`;
const words = text.split(" ");

export default function About() {
  const sectionRef = useRef(null);
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [currentWord, setCurrentWord] = useState(0);

  // Initial fade-in animation using GSAP
  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  // Scroll-triggered word reveal animation
  useEffect(() => {
    if (!scrollTargetRef.current) return;

    ScrollTrigger.create({
      trigger: scrollTargetRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const wordCount = words.length;
        const index = Math.floor(progress * wordCount);
        setCurrentWord(index);
      },
    });
  }, []);

  return (
    <section ref={sectionRef} id="about" className="mt-12 py-20 lg:py-28 text-white">
      <div className="max-w-6xl lg:max-w-7xl mx-auto p-4">

        <div className="sticky top-20 md:top-24 lg:top-40">
        <h2 className="text-3xl font-semibold text-center text-white">About Me</h2>
          <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-10">
            <span>I&apos;m a full-stack web developer.</span>
            <span className="block mt-6">
              {words.map((word, index) => (
                <span
                  key={index}
                  ref={(el) => {wordRefs.current[index] = el}}
                  className={twMerge(
                    "transition duration-300",
                    index < currentWord
                      ? "text-white"
                      : "text-white/30"
                  )}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* Scroll target div with height to allow scroll-based animation */}
        <div className="h-[200vh]" ref={scrollTargetRef}></div>
      </div>
    </section>
  );
}
