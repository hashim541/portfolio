'use client'
import React from 'react'
import Image from 'next/image'
import { motion as m } from 'framer-motion'

interface Props {
    item: {
        courseName: string
        url: string
        img: string
        institute: {
            name: string
            svg: any
        }
    }
}

const CertificateCard = ({ item }: Props) => {
    return (
        <m.div 
            className='flex flex-col max-w-[350px] md:max-w-[420px] max-h-[470px] mr-12 justify-between items-start gap-6 bg-background p-6 rounded-xl shadow-sm border-2 border-border'
            whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.15)'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            <div className="overflow-hidden rounded-lg">
                <m.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src={`/assets/images/${item.img}`}
                        alt='certificate'
                        width={500}
                        height={700}
                        className='w-[500px] rounded-lg'
                    />
                </m.div>
            </div>
            <div className='flex flex-col items-start w-full gap-4'>
                <div className='flex gap-4 items-center'>
                    <div className="p-2 bg-muted rounded-lg">
                        <Image
                            src={item.institute.name === 'NPTEL' ? '/assets/images/' + item.institute.svg : item.institute.svg}
                            alt='logo'
                            width={40}
                            height={40}
                            className='h-[40px] w-[40px] object-contain'
                        />
                    </div>
                    <div>
                        <p className='font-semibold text-foreground'>{item.courseName}</p>
                        <p className='text-sm text-muted-foreground'>{item.institute.name}</p>
                    </div>
                </div>

                <m.a 
                    href={item.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full flex justify-center items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 font-medium text-foreground'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    View Certificate
                    <Image
                        src={'/assets/svg/visit.svg'}
                        alt='visit icon'
                        width={20}
                        height={20}
                    />
                </m.a>
            </div>
        </m.div>
    )
}

export default CertificateCard
