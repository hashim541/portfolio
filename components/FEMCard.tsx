'use client'
import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'

interface Props {
    item: {
        name: string
        code: string
        live: string
        design: string
    }
}

const FEMCard = ({ item }: Props) => {
    const img = item.design.split('github.com')
    const restOfImg = img[1].split('tree/').join('')
    const updatedImg = img[0] + 'raw.githubusercontent.com' + restOfImg    
    
    return (
        <m.div 
            className='w-full h-[400px] sm:min-w-[400px] sm:max-w-[400px] min-w-[350px] max-w-[350px] overflow-hidden mr-6 md:mr-12 border-2 border-border rounded-xl flex flex-col justify-between bg-background'
            whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.15)'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            <div className="overflow-hidden rounded-t-xl">
                <m.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src={updatedImg}
                        alt={item.name + ' image'}
                        width={1000}
                        height={1000}
                        className='w-full'
                    />
                </m.div>
            </div>
            
            <div className='p-4'>
                <p className="font-[family-name:var(--font-raleway)] text-sm font-bold text-balance text-foreground">
                    {item.name}
                </p>
                <div className='flex w-full gap-3 mt-3'>
                    <m.a 
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className='w-full flex gap-2 items-center justify-center text-sm bg-muted hover:bg-muted/80 p-2.5 rounded-lg transition-colors duration-200 font-medium text-foreground'
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
                        className='w-full flex gap-2 items-center justify-center text-sm bg-primary hover:bg-primary/90 text-primary-foreground p-2.5 rounded-lg transition-colors duration-200 font-medium'
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

export default FEMCard
