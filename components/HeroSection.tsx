'use client'
import React, { useState } from 'react'
import { motion as m } from 'framer-motion'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const borderText = 'text-stroke text-fill-transparent'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id='home' className='h-full flex flex-col justify-center items-center'>
      <m.div 
        className='relative'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <m.p 
          className='text-center mb-4 text-muted-foreground'
          variants={itemVariants}
        >
          I am
        </m.p>
        <m.h1 
          className={`font-[family-name:var(--font-raleway)] ${!hover && borderText} text-5xl font-extrabold text-center sm:text-7xl lg:text-8xl transition-all duration-300 cursor-default`}
          variants={itemVariants}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          FULL STACK
        </m.h1>
        <m.h1 
          className={`font-[family-name:var(--font-raleway)] ${hover && borderText} font-extrabold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl transition-all duration-300 cursor-default`}
          variants={itemVariants}
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          MOHAMED HASHIM
        </m.h1>
        <m.h1 
          className={`font-[family-name:var(--font-raleway)] ${!hover && borderText} text-5xl font-extrabold text-center sm:text-7xl lg:text-8xl transition-all duration-300 cursor-default`}
          variants={itemVariants}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          WEB DEVELOPER
        </m.h1>
      </m.div>
      
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-7"
      >
        <p className='text-center text-muted-foreground'>Simple and yet versatile developer with a passion for learning,</p>
        <p className='text-center text-muted-foreground'>I can turn your website ideas into real world application.</p>
      </m.div>
      
      <m.div 
        className='flex gap-7 mt-9'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <m.a 
          href="#project" 
          className='border-2 border-border px-5 py-2 rounded-lg text-foreground font-medium transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-sm'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          My Works
        </m.a>
        <m.a 
          href="#contact" 
          className='bg-primary text-primary-foreground px-5 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:bg-primary/90'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {"Let's Talk"}
        </m.a>
      </m.div>
    </section>
  )
}

export default HeroSection
