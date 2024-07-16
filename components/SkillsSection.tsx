'use client'
import React from 'react'
import * as Font from '@/utils/font'
import { skills } from '@/utils/data'
import SkillCard from './SkillCard'
import { motion as m, AnimatePresence } from 'framer-motion'

const SkillsSection = () => {

  return (
    <section id='skills' className='max-w-[1000px] flex flex-col justify-center items-center gap-12'>
      <m.h1 
        className={`${Font.monserrat.className} font-bold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl`}
        initial={{opacity:0, y:-20, }}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        transition={{duration: .5 }}
      >
          Skills
      </m.h1>
      <m.div 
        className='flex flex-wrap gap-7 items-center justify-center'
      >
        <AnimatePresence>
        {skills.map((item,index) => (
          <m.div 
              key={item.name} 
              initial={{ opacity: 0, y: 50, scale:.85 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: index/5}}
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