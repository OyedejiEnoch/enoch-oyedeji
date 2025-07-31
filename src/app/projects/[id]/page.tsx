/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import SingleProjectCom from '@/components/SingleProjectCom';
import { allProjects } from '@/constants';
import React, {useRef } from 'react'
interface ProjectPageProps {
  params: {
    id: string;
  };
}
const SingleProject = async ({params}:ProjectPageProps) => {
    const {id} = params
    const project= allProjects.find((projectId)=> projectId.id === id)
   
    if (!project) {
  return <div>Project not found</div>;
}
  return (
    <section className='py-24 lg:py-32'>
      <div className='max-w-6xl lg:max-w-7xl mx-auto'>
        <SingleProjectCom project={project} />
      </div>
    </section>
  )
}

export default SingleProject
