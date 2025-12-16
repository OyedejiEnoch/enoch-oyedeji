import { ArrowUpRight} from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Project ={
    id:string | number;
    title:string;
    description:string;
    imageUrl:string;
}
const ProjectCard = ({ id, title, description, imageUrl }:Project ) => {
  return (
    <Link href={`/projects/${id}`} className="bg-black/10  overflow-hidden shadow-md">
      <div className="group relative rounded-2xl border-[6px] border-neutral-900">
        <Image
          src={imageUrl} // Replace with your image path
          alt={title}
          width={400} // Adjust as needed
          height={1000} // Adjust as needed
          layout="responsive"
            className="object-cover  transition duration-300 w-full h-62 rounded-2xl"
        />
        
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#141414]/80 via-[#202020]/40 to-transparent z-10" />
        <div className='absolute inset-0 group-hover:bg-[#000]/40 transition duration-300 z-12' />

        <button className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
          group-hover:flex items-center gap-2 rounded-full bg-[#f5f2ea] px-6 py-3
          text-sm font-medium text-black shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
            View Project
            <ArrowUpRight size={16} />
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-gray-300 mt-2">
          {description.trim().length > 200
            ? description.slice(0, 200) + "....."
            : description}
        </p>
      </div>
    </Link>
  )
}

export default ProjectCard
