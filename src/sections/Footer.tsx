import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import { Instagram, Linkedin, X } from 'lucide-react'
import React from 'react'

const Footer = () => {

    const text =`Let's work together and make the magic happen`

  return (
    <section id='contact' className='py-24 lg:py-32 bg-[#FFFDF6] dark:bg-[#0f0f0f] text-black'>
        <AnimatedHeaderSection text={text} subtitle={'Contact Me'} title={'Contact'} textColor={'text-black'}
                withScrollTrigger={true}
             />

        <div className='max-w-6xl md:max-w-7xl mx-auto'>
            <div className='flex items-center gap-8 justify-center flex-wrap'>
                <span className='font-medium text-neutral-600 cursor-pointer max-md:text-sm'>Home</span>
                <span className='font-medium text-neutral-600 cursor-pointer max-md:text-sm'>About Me</span>
                <span className='font-medium text-neutral-600 cursor-pointer max-md:text-sm'>Projects</span>
                <span className='font-medium text-neutral-600 cursor-pointer max-md:text-sm'>Service</span>
                <span className='font-medium text-neutral-600 cursor-pointer max-md:text-sm'>Contact</span>
            </div>

            <div className='flex items-center gap-6 justify-center mt-10'>
                 <Linkedin className='cursor-pointer' />
                 <X className='cursor-pointer'/>
                 <Instagram className='cursor-pointer' />
            </div>

            <p className='text-center text-sm mt-15 text-gray-400'>&copy; Enoch Oyedeji 2025</p>
        </div>
    </section>
  )
}

export default Footer
