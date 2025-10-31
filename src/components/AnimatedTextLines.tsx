"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const AnimatedTextLines = ({text, className}:{text:string, className:string}) => {
    const containerRef = useRef(null);
    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const lines = text.split("\n").filter((line) => line.trim() !== "");
    useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, { //animating 
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  },[]);


  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        
        <span // mapping over each of the lines and adding a ref to each
          key={index}
          ref={(el) => {lineRefs.current[index] = el}}
          className="block leading-relaxed tracking-wide text-pretty mt-4" //we added block so each can stay on a different line
        >
          {line}
        </span>
      ))}
    </div>
  )
}

export default AnimatedTextLines
