'use client'
import React from 'react'
import AnimatedTextLines from './AnimatedTextLines'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type Prop={
    subtitle:string,
    title:string,
    textColor:string,
    text:string,
    withScrollTrigger?:boolean,
}
const AnimatedHeaderSection = ({subtitle, title, textColor, text, withScrollTrigger}:Prop) => {
    const contextRef = React.useRef(null)
    const headerRef = React.useRef(null)
    const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];
     useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: withScrollTrigger ? { // if the scrollTrigger is true, trigger this when the viewport reaches the contextRef.current, 
                trigger: contextRef.current
            }
            :undefined
        })
        tl.from(contextRef.current, {
            y:"50vh", //coming from 50vh down to 0vh up
            duration:1, // with a duration of 1s
            ease:"circ.out"
        })
        tl.from(headerRef.current, {
            opacity:0,
            y:200,
            duration:1,
            ease:"circ.out",
        }, "<+0.5") // "<+0.5" means that this animation should start 0.5 seconds after the previous one
    },[])


  return (
    <section ref={contextRef}>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subtitle}
          </p>
          <div className="px-2">
            <h1
              className={`flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 lg:leading-32 md:block ${textColor}`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

        <div className={`relative px-4 mt-4 `}>
            <div className='absolute inset-x-0 border-t-2' />
            
               <AnimatedTextLines text={text} className={`font-light uppercase value-text-responsive ${textColor}`}/>
            
        </div>
    </section>
  )
}

export default AnimatedHeaderSection
