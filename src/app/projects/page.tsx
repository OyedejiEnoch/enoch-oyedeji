import ProjectCard from '@/components/ProjectCard'
import { allProjects } from '@/constants'
import React from 'react'

const Projects = () => {



  return (
    <div className='w-full py-18 lg:py-22'>
      <div className='max-w-6xl mx-auto px-4'>

        <div className='flex justify-center flex-col items-center gap-4 mb-10'>
          <p className='px-6 py-3 bg-neutral-800 rounded-4xl text-sm w-fit'>Work</p>
          <h2 className='text-center max-w-[600px] tracking-wide font-semibold text-3xl md:text-4xl lg:text-5xl'>Explore My top projects with real impact </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
        {allProjects.map((project) => (
          <ProjectCard key={project.title} id={project.id} title={project.title} description={project.description} imageUrl={project.image} />
        ))}
        </div>
      
      </div>
    
    </div>
  )
}

export default Projects
