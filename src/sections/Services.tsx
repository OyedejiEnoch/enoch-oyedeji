"use client"
import { useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import {servicesData} from '../constants/index'
import {useMediaQuery} from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Services =()=>{

    const serviceRef =useRef<(HTMLDivElement | null)[]>([])
    const text =`I build secure, high performance full-stack apps, 
    with smooth ux to drive growth not headaches`

    const isDesktop = useMediaQuery({ minWidth: "48rem" }) //768px

    useGSAP(()=>{
        serviceRef.current.forEach((el) => {
            if(!el) return; // Skip if the element is not defined
            // Animate each service section when it comes into view
            // Using gsap to animate the opacity and position of each service section
            gsap.from(el, {
                y: 200,
                duration: 1,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
            });
        }
    )}, [])

    return(
        <section id='services' className='min-h-screen bg-black rounded-t-4xl py-20'>
             <AnimatedHeaderSection text={text} subtitle={'Behind the scene Beyond the screen'} title={'Service'} textColor={'text-white'}
                withScrollTrigger={true}
             />
             {servicesData.map((service, index)=>(
                <div ref={el => {serviceRef.current[index] = el}} key={index} className='sticky px-10 pt-6 pb-12 text-white bg-black border-t-2
                border-white/50' 
                style={isDesktop ? {top: `calc((10vh + ${index * 5}em)`, marginBottom: `${(servicesData.length - index -1)* 5}rem`} : {top:0}}>
                    
                    <div className=' font-light'>
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-4xl lg:text-5xl'>{service.title}</h2>
                            <p className='text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty'>{service.description}</p>
                            <div className='flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80'>
                                {service.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className='flex flex-col gap-1'>
                                        <h3 className='flex text-pretty'>
                                            <span className='mr-12 text-lg text-white/30'>0 {itemIndex + 1}</span>
                                        {item.title}
                                        </h3>

                                        {itemIndex  < service.items.length - 1 && (
                                            <div className='w-full h-px my-2 bg-white/30' />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
             ))}
        </section>
    )
}

export default Services