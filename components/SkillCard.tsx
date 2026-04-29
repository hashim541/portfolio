'use client'
import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'

interface Props {
    item: {
        name: string
        svg: any
    }
}

const SkillCard = ({ item }: Props) => {
  return (
    <m.div 
      className='flex flex-col items-center justify-center gap-2 relative overflow-hidden z-10 w-[150px] h-[150px] border-2 border-border p-5 rounded-xl shadow-sm bg-background group cursor-default'
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        borderColor: 'hsl(var(--primary) / 0.5)',
        boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.2)'
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <m.div
        whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={item.svg}
          alt={item.name + ' logo'}
          width={50}
          height={50}
          className='rounded-md'
        />
      </m.div>
      <p className='text-center text-muted-foreground z-10 group-hover:text-foreground transition-colors duration-200'>
        {item.name}
      </p>
      <Image
        src={item.svg}
        alt={item.name + ' logo'}
        width={100}
        height={100}
        className='absolute translate-x-[50%] left-10 top-5 translate-y-[50%] opacity-10 group-hover:opacity-20 transition-opacity duration-300'
      />
    </m.div>
  )
}

export default SkillCard
