'use client'
import * as Font from '@/utils/font'
import { projects } from '@/utils/data'
import ProjectCard from './ProjectCard'
import { motion as m, } from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

const ProjectSection = () => {
  const list = [...projects.fullStack, ...projects.fullStack]
  return (
    <section id='project' className=' w-full flex flex-col gap-12'>
      <div className='w-full flex flex-col gap-12'>
        <m.h1 
          className={`${Font.monserrat.className} font-bold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl`}
          initial={{opacity:0, y:-20, }}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration: .5 }}
        >
            Projects
        </m.h1>
        <div className='w-full relative '>

          <InfiniteScroll scroll='right' list={list.length}>
            {list.map((item, idx) => (
                <div key={idx} className='flex-shrink-0'>
                    <ProjectCard key={item.name} item={item} />
                </div>
            ))}
          </InfiniteScroll>
          
        </div>
      </div>
    </section>
  )
}

export default ProjectSection