'use client'
import React from 'react'
import { skills } from '@/utils/data'
import SkillCard from './SkillCard'
import { motion as m, AnimatePresence } from 'framer-motion'

const SkillsSection = () => {
  return (
    <section id='skills' className='max-w-[1000px] flex flex-col justify-center items-center gap-12'>
      <m.h1 
        className="font-[family-name:var(--font-montserrat)] font-bold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl text-foreground"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </m.h1>
      <m.div className='flex flex-wrap gap-6 items-center justify-center'>
        <AnimatePresence>
          {skills.map((item, index) => (
            <m.div 
              key={item.name} 
              initial={{ opacity: 0, y: 50, scale: 0.85 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 15, 
                delay: index * 0.08 
              }}
            >
              <SkillCard item={item} />
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>
    </section>
  )
}

export default SkillsSection
