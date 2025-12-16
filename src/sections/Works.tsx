/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import { featuredProjectsLanding } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { p } from 'motion/react-client'
gsap.registerPlugin(ScrollTrigger);

type QuickToFunc = ReturnType<typeof gsap.quickTo>;
const Works = () => {   
    
    const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [currentIndex, setCurrentIndex] = useState(null)
    const text =`Featured projects that have been meticulously crafted
    with passion to drive results and impact`

    const previewRef = useRef(null);
    const moveX =useRef<QuickToFunc | null>(null);
    const moveY = useRef<QuickToFunc | null>(null);
    const mouse =useRef({x:0, y:0})

    const handleMouseEnter = (index:any) => {
    if (window.innerWidth < 768) return; // this is saying, if it's on a smaller screen don't do anything
    setCurrentIndex(index); //else set the index

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

const handleMouseLeave = (index:any) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

      useGSAP(()=>{
       moveX.current= gsap.quickTo(previewRef.current, 'x', {duration:1.5, ease:"power3.out",})
       moveY.current= gsap.quickTo(previewRef.current, 'y', {duration:2, ease:"power3.out",})

       gsap.from("#project", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: "#project",
        },
      });
    },[])

    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    if (!moveX.current || !moveY.current) return;

    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;

    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
    };

    // const items =["Innovation", "Precision", "Trust", "Collaboration", "Excellence"]

  return (
    <section id="projects" className='bg-[#FFFDF6] text-black dark:bg-white flex flex-col min-h-screen py-10'>
      <AnimatedHeaderSection text={text} subtitle={'My Featured Projects'} title={'Works'} textColor={'text-black'} withScrollTrigger={true} />

      <div className='relative md:flex flex-col gap-8 font-light' onMouseMove={handleMouseMove}>
        {featuredProjectsLanding.map((project, index)=>(
          <div key={project.id}>
            <div  id='project' className="relative flex flex-col gap-1 cursor-pointer group md:gap-0 py-5"
             onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave(index)}
            >
                <Link
                  href={`/projects/${project.id}`}
                  className="absolute inset-0 z-10"
                />
                 <div ref={(el)=>{overlayRefs.current[index] = el}} className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path" />
                <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                    <h2 className="lg:text-[32px] text-[26px] leading-none">{project.title}</h2>
                    <ArrowUpRight className="" />
                </div>

                <div className="w-full h-0.5 bg-black/80" />

                <div className="flex flex-wrap px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                    {project.frameworks.map((frameWork, index)=>(
                        <p key={frameWork.id} className="text-black transition-colors duration-500 md:group-hover:text-white">{frameWork.name}</p>
                    ))}
                </div>
                
                    {/* mobile preview image  */}
                <div className="relative flex items-center justify-center md:hidden h-[250px]">
                    <img src={project.image} alt={`${project.title}-image`} className="absolute bg-center px-14 rounded-xl  w-[800px]" />
                </div>
            </div>
            </div>
        ))}

          {/* desktop floating preview */}
        <div ref={previewRef} className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[760px] md:block hidden opacity-0">
           {currentIndex !== null && (
            <img src={featuredProjectsLanding[currentIndex].image} alt="img" className="" />
           )}
        </div>
      </div>




      <div className='flex justify-center items-center mt-10 pb-10'>
        <Link href={'/projects'}>
          <button className=' px-6 py-3 bg-black rounded-3xl cursor-pointer text-white'>View All Projects</button>
        </Link>
      </div>

      {/* <Marque items={items} Icon={<Star />}  /> */}
    </section>
  )
}

export default Works
