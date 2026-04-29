'use client'
import { projects } from '@/utils/data'
import ProjectCard from './ProjectCard'
import { motion as m } from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

const ProjectSection = () => {
  const list = [...projects.fullStack, ...projects.fullStack]
  
  return (
    <section id='project' className='w-full flex flex-col gap-12'>
      <div className='w-full flex flex-col gap-12'>
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[family-name:var(--font-montserrat)] font-bold tracking-tight text-5xl sm:text-7xl lg:text-8xl text-foreground">
            Projects
          </h1>
          <p className="mt-4 text-muted-foreground">
            Scroll horizontally or drag to explore
          </p>
        </m.div>
        <div className='w-full relative'>
          <InfiniteScroll scroll='right' list={list.length}>
            {list.map((item, idx) => (
              <div key={idx} className='flex-shrink-0'>
                <ProjectCard item={item} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
