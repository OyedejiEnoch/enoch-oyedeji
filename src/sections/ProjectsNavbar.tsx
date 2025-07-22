"use client"
import { socials } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
const ProjectNavbar = () => {
    
    const [isOpen, setIsOpen] =useState(false)   

    const navRef =useRef(null)
    const linkRef = useRef<(HTMLDivElement | null)[]>([])
    const contactRef = useRef(null)

    const topLineRef = useRef(null)
    const bottomLineRef = useRef(null)

    const tl = useRef<gsap.core.Timeline | null>(null)
    const iconTl = useRef<gsap.core.Timeline | null>(null)

    const [showBurger, setShowBurger] = React.useState(true)

    useGSAP(()=>{
        gsap.set(navRef.current, {xPercent:100})
        gsap.set([linkRef.current, contactRef.current], {autoAlpha:0, x:-20}) 

        tl.current =gsap.timeline({paused:true})
        .to(navRef.current, {
            xPercent:0,
            duration:1,
            ease:"power3.out",
        })
        .to(linkRef.current, {
            autoAlpha:1,
            x:0,
            stagger:0.1,
            duration:1,
            ease:"power2.out",
        }, "<") // "<" means that this animation should start at the same time as the previous one
        .to(contactRef.current, {
            autoAlpha:1,
            x:0,
            duration:0.5,
            ease:"power2.out",
        }, "<+0.2") // "<+0.2" means that this animation should start 0.2 seconds after the previous one


        iconTl.current= gsap.timeline({
            paused:true
        })
        .to([topLineRef.current,], {
            rotation:45,
            y:3.3,
            duration:0.5,
            ease:"power2.inOut",
        })
        .to([bottomLineRef.current], {
            rotation:-45,
            y:-3.3,
            duration:0.5,
            ease:"power2.inOut",
        }, "<")
    },[])

     useEffect(() => { // we are doing this to hide the button when we scroll away from the header
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
    
          lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, {
          passive: true,
        });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const toggleMenu = () => {
        if(isOpen){
            tl!.current!.reverse() // reverse the timeline to close the menu
            setIsOpen(false)
            iconTl!.current!.reverse() // reverse the icon timeline to close the menu
        }else{
            tl!.current!.play() // play the timeline to open the menu
            setIsOpen(true)
            iconTl!.current!.play() // play the icon timeline to open the menu
        }
    }

    const navLinks=[
        {
            id:'1',
            title:'Home',
            link:'/'
        },
        {
            id:'2',
            title:'Projects',
            link:'projects'
        },
    ]

  return (
    <>
        <nav ref={navRef}  className='fixed z-50 flex flex-col justify-between bg-white w-full h-full text-black/80
        px-10 py-28 md:w-1/2 md:left-1/2 gap-y-20 '>
            <div className='flex flex-col gap-y-4 text-5xl md:text-6xl lg:text-7xl'>
                {navLinks.map((item, index)=>(
                    <div key={index} ref={(el)=>{linkRef.current[index] = el}}>
                        <Link
                        href={`/${item.link}`}
                        className='transition-all duration-300 hover:text-black cursor-pointer' >
                            {item.title}
                        </Link>
                    </div>
                ))}

                <div ref={contactRef} className='flex flex-col flex-wrap justify-between gap-8 md:flex-row '>
                    <div className='font-light'>
                        <p className='tracking-wider text-xl text-black/50'>E-mail</p>
                        <p className='text-xl tracking-widest lowercase'>oyedejienoch@gmail.com</p>
                    </div>
                    <div className='font-light'>
                    <p className='tracking-wider text-xl text-black/20'>Social Media</p>
                    <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
                        {socials.map((social, index)=>(
                            <a key={index} className='tracking-widest uppercase leading-loose text-sm hover:text-white cursor-pointer 
                            transition-colors duration-300'>{"{"}{social.name}{"}"}</a>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </nav>

        <div onClick={toggleMenu}
        style={
             showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
        className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-white rounded-full cursor-pointer
        w-14 h-14 md:w-20 md:h-20 top-4 right-10'>
            <span ref={topLineRef}
             className='block w-8 h-0.5 bg-black rounded-full origin-center'></span>
            <span ref={bottomLineRef} className='block w-8 h-0.5 bg-black rounded-full origin-center'></span>
        </div>
    </>
  )
}

export default ProjectNavbar
