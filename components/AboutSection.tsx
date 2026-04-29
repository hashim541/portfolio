'use client'
import Image from 'next/image'
import React from 'react'
import { contact } from '@/utils/data'
import { motion as m } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className='h-full max-w-[1000px] flex flex-col justify-center items-center gap-12'>
      <m.h1 
        className="font-[family-name:var(--font-montserrat)] font-bold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl text-foreground"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </m.h1>
      <m.div 
        className='flex flex-col items-center gap-8 md:flex-row bg-background py-8 px-6 md:px-12 rounded-2xl shadow-sm border-2 border-border'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ 
          boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.1)'
        }}
      >
        <m.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={'/assets/images/myface.jpg'}
            alt='my photo'
            width={200}
            height={200}
            className='w-[170px] h-[170px] md:w-[200px] md:h-[200px] object-cover object-left-top rounded-full md:rounded-2xl self-center md:self-start ring-4 ring-primary/10'
          />
        </m.div>
        <div className='flex flex-col gap-4'>
          <m.p 
            className="font-[family-name:var(--font-raleway)] text-2xl font-semibold text-center md:text-start text-foreground"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Mohamed Hashim S
          </m.p>
          <m.p 
            className='max-w-[700px] text-center md:text-justify text-muted-foreground leading-relaxed'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            {"I am a recent Computer Science graduate aiming to secure a position as a Web Developer. My Technical skills honed through extensive self-directed learning from online resources. Recently i have completed Harvard university's CS50X course which covered C, data structure, Python, Web development, etc... I also have taken online courses like Complete MERN stack development and introduction to C programming by NPTEL. Committed to continuously enhancing expertise by exploring new technologies and applying knowledge in practical scenarios."}
          </m.p>
          <div className='flex self-center md:self-start gap-4'>
            {contact.map((item, idx) => (
              <m.a 
                href={item.url} 
                key={item.site}
                target="_blank"
                rel="noopener noreferrer"
                className='rounded-full border-2 border-border p-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200'
                initial={{ opacity: 0, x: 10, scale: 0.85 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + (idx / 5) }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={item.svg}
                  alt={item.site + ' Logo'}
                  width={24}
                  height={24}
                />
              </m.a>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  )
}

export default AboutSection
