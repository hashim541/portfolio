'use client'
import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'

interface Props {
    item: {
        site: string
        userId: string
        url: string
        svg: string
    }
}

const ContactCard = ({ item }: Props) => {
  return (
    <m.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className='flex items-center gap-4 p-4 rounded-xl border-2 border-border bg-background hover:border-primary/50 hover:shadow-md transition-all duration-300 group'
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-300">
        <Image
          src={item.svg}
          alt={item.site + ' icon'}
          width={24}
          height={24}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground">{item.site}</p>
        <p className="text-sm text-muted-foreground truncate">{item.userId}</p>
      </div>
      <svg 
        className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </m.a>
  )
}

export default ContactCard
