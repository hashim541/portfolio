'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion as m } from 'framer-motion'

interface Props {
    item: {
        name: string
        code: string
        live: string
        design: string
        desc: string
        tech: string[]
    }
}

const ProjectCard = ({ item }: Props) => {
    const [hover, setHover] = useState(false)

    return (
        <m.div 
            className='sm:max-w-[400px] max-w-[350px] mr-6 md:mr-12 h-fit w-full border-2 border-border rounded-xl overflow-hidden bg-background shadow-sm'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.15)'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            <div className="relative overflow-hidden">
                <m.div
                    animate={{ scale: hover ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src={`/assets/images/${item.design}`}
                        alt={item.name + ' image'}
                        width={1000}
                        height={1000}
                        className='w-full'
                    />
                </m.div>
                <m.div 
                    className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hover ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className='py-5 px-6 flex flex-col gap-3'>
                <div>
                    <p className="font-[family-name:var(--font-raleway)] text-lg font-bold text-foreground">
                        {item.name}
                    </p>
                    <p className='text-xs text-muted-foreground text-justify leading-relaxed'>
                        {hover ? item.desc : item.desc.slice(0, 150) + '...'}
                    </p>
                </div>
                <div className='flex flex-wrap gap-2 mt-1'>
                    {item.tech.map(eachItem => (
                        <span 
                            key={eachItem} 
                            className='text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium'
                        >
                            {eachItem}
                        </span>
                    ))}
                </div>

                <div className='flex w-full gap-3 mt-2'>
                    <m.a 
                        href={item.code} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-full flex gap-2 items-center justify-center bg-muted hover:bg-muted/80 py-2.5 rounded-lg transition-colors duration-200 text-foreground font-medium'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Image
                            src={'/assets/svg/github.svg'}
                            alt='github icon'
                            width={20}
                            height={20}
                        />
                        Code
                    </m.a>
                    <m.a 
                        href={item.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-full flex gap-2 items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 rounded-lg transition-colors duration-200 font-medium'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Image
                            src={'/assets/svg/visit.svg'}
                            alt='visit icon'
                            width={20}
                            height={20}
                            className="brightness-0 invert"
                        />
                        Visit
                    </m.a>
                </div>
            </div>
        </m.div>
    )
}

export default ProjectCard
