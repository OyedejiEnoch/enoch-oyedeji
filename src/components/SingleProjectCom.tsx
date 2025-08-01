"use client"
import { allProjects } from '@/constants'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'

type Project ={
    project:{
        id:string,
        title:string,
        image:string,
        description?:string,
    fullDescription?:string,
    frameworks:[{
        id:number,
        name:string
    }],
    link?:string
    github?:string
}
}
const SingleProjectCom = ({project}:Project) => {

     
    const imageRef =useRef(null)
    const textRef =useRef(null)
        

    useGSAP(()=>{
        gsap.from(imageRef.current, {opacity:0, duration:2, ease:'circ.out'})
        gsap.from(textRef.current, {opacity:0, duration:1.5, ease:'circ.out', delay:1.5})
    },[])

  return (
    <div className='w-full flex flex-col md:flex-row gap-8 p-4'>
            {/* left */}
            <div ref={imageRef} className='w-full md:w-2/3 p-2 border border-white/20 h-[300px] lg:h-[500px]'>
                <Image src={project?.image!} alt='Image' width={1000} height={500} />
            </div>

            {/* right */}
            <div ref={textRef} className='w-full md:w-1/2 '>
                {/* title */}
                <hr className='text-gray-300/40' />
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-10'>{project?.title}</h2>
                
                <hr className='text-gray-300/40' />
                <div className='text-[17px] text-neutral-500 dark:text-neutral-400 mt-4 leading-7'>
                    <p className='textSplit'>{project?.fullDescription}</p>
            
                    <hr className='text-gray-300/40 mt-10' />
                    <div className='mt-4 text-white flex flex-col'>
                        <h2>Tech StacK:</h2>
                        <div className='flex items-center gap-x-6 flex-wrap'>
                          {project?.frameworks.map((framework)=>(
                            <span key={framework.id} className='mt-2 text-sm'>{framework.name}</span>
                          ))}
                        </div>
                    </div>

                    <hr className='text-gray-300/40 mt-10' />
                    <div className='flex items-center justify-between mt-6'>
                        <a href={project?.github} className='bg-neutral-500/30 text-white px-4 py-2 rounded-xl flex items-center gap-1 cursor-pointer
                        hover:bg-white transition duration-300 hover:text-black'> <Github /> View Code</a>
                        <a href={project?.link} className='bg-neutral-500/30 text-white px-4 py-2 rounded-xl flex items-center gap-1 
                        cursor-pointer hover:bg-white transition duration-300 hover:text-black'>Live Demo <ArrowUpRight /> </a>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default SingleProjectCom
