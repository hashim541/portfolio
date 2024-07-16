import React, { useEffect, useState, useRef } from 'react'
import { motion as m, useMotionValue, animate } from 'framer-motion'

const InfiniteScroll = ({scroll, list, children}: {scroll: string, list: number, children: React.ReactNode}) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const xTranslation = useMotionValue(0)

    useEffect(() => {
        let controls
        if (containerRef.current) {
            const containerWidth = containerRef.current.scrollWidth / 2
            const duration = list / 2 * 20

            let scrollDirection = scroll == 'right' ? [-containerWidth, 0] : [0, -containerWidth]

            controls = animate(xTranslation, scrollDirection, {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0
            })
        }
        return controls?.stop

    }, [xTranslation, list])

    return (
        <div className='mt-12 overflow-hidden'>
            <m.div
                ref={containerRef}
                className='flex'
                style={{ x: xTranslation }}
            >
                {children}
            </m.div>
        </div>
    )
}

export default InfiniteScroll