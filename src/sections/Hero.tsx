import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import React from 'react'

const Hero = () => {

  const text =`I help growing brands and startups build their online presence
    and gain an unfair advantage through result-driven web/apps`

  return (
    <section className='py-24'>
      <div className='max-w-6xl lg:max-w-7xl mx-auto border-b border-black dark:border-white/20 h-[90vh] p-2'>
        <div className='flex items-center justify-between mt-4 dark:text-white/30 text-sm'> 
          <p className=''>I&apos;m Enoch</p>
          <p className=''>I am a full-stack web-developer</p>
        </div>

        <AnimatedHeaderSection text={text} subtitle={''} title={'Enoch Oyedeji'} textColor={'text-white'}/>
      

        <div className='flex justify-between mt-12 text-sm font-semibold '>
              <span className='subtext'
              >Nigeria, Ibadan</span>

              <div
              className='subtext flex items-center gap-2'>
                <div className='bg-green-400 rounded-full size-3 animate-pulse'></div>
                <span className='text-white'>Lets work together</span>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
