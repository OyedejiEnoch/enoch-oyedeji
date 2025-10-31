'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BadgeCheck, ArrowUpRight, Accessibility, Archive, Users, BookOpen, Route, Code2, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Research',
    text: 'Understand the problem, gather requirements, and analyze user needs before writing any code.',
    icon: <BookOpen  className="w-14 h-14 text-white" />,
  },
  {
    title: 'Plan',
    text: 'Design system architecture, select tech stack, and map out the development roadmap.',
    icon: <Route className="w-14 h-14 text-white" />,
  },
  {
    title: 'Build',
    text: 'Develop features with clean, maintainable code and follow best practices for scalability.',
    icon: <Code2 className="w-14 h-14 text-white" />,
  },
  {
    title: 'Deploy',
    text: "Launch the product, monitor performance, and continuously iterate for improvements.",
    icon: <Rocket className="w-14 h-14 text-white" />,
  },
//   {
//     title: 'Community',
//     text: 'Collaboration fuels greatness. We learn, grow, and thrive together.',
//     icon: <Users className="w-14 h-14 text-white" />,
//   },
]

const MyProcess = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const horizontalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollLength = horizontalRef.current?.scrollWidth || 0
      const viewportWidth = window.innerWidth
      const totalScroll = scrollLength - viewportWidth

      gsap.to(horizontalRef.current, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })
    }, sectionRef)

    const tl =gsap.timeline({
      scrollTrigger:{
        trigger:sectionRef.current,
        start:'top center'
      }
    })
    tl.to('.headerText', {opacity:1, y:0, ease:'power2.inOut', duration:0.8,})
    tl.to('.paragraph', {opacity:1, y:0, ease:'power2.inOut', duration:0.8, delay:0.3})

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-22 lg:py-28 w-full min-h-screen text-white overflow-hidden ">
         <h2 className="headerText text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 text-center max-w-xl mx-auto mb-10 opacity-0 translate-y-10">My simple path to successful designs</h2>
    <div className='flex items-center text-white py-10'>

      <div ref={horizontalRef} className="flex space-x-10 px-[50vw]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-[#1a1a19] rounded-2xl min-w-[400px] p-10 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-neutral-800 p-4 rounded-xl mb-6 flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-[22px] md:text-[26px] font-semibold mb-3 mt-3 text-white">{step.title}</h3>
            <p className="text-neutral-500 text-sm md:text-[15px] max-w-xs">{step.text}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default MyProcess
