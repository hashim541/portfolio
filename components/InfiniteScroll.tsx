'use client'
import React, { useEffect, useRef, useCallback } from 'react'
import { motion as m, useMotionValue, useSpring, animate } from 'framer-motion'

interface InfiniteScrollProps {
    scroll: 'left' | 'right'
    list: number
    children: React.ReactNode
}

const InfiniteScroll = ({ scroll, list, children }: InfiniteScrollProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const xTranslation = useMotionValue(0)
    const smoothX = useSpring(xTranslation, { stiffness: 100, damping: 30 })
    const animationRef = useRef<ReturnType<typeof animate> | null>(null)
    const isDragging = useRef(false)
    const containerWidth = useRef(0)

    // Initialize auto-scroll animation
    const startAutoScroll = useCallback(() => {
        if (containerRef.current && !isDragging.current) {
            containerWidth.current = containerRef.current.scrollWidth / 2
            const duration = list / 2 * 20

            const scrollDirection: [number, number] = scroll === 'right' 
                ? [-containerWidth.current, 0] 
                : [0, -containerWidth.current]

            // Get current position and calculate where we are in the loop
            const currentX = xTranslation.get()
            const normalizedX = ((currentX % containerWidth.current) + containerWidth.current) % containerWidth.current
            const startValue = scroll === 'right' ? -normalizedX : -normalizedX

            animationRef.current = animate(xTranslation, scrollDirection, {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            })
        }
    }, [xTranslation, list, scroll])

    useEffect(() => {
        startAutoScroll()
        return () => {
            animationRef.current?.stop()
        }
    }, [startAutoScroll])

    // Handle horizontal wheel scroll
    const handleWheel = useCallback((e: WheelEvent) => {
        // Check if it's a horizontal scroll (shift+scroll or trackpad horizontal)
        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY)
        const delta = isHorizontalScroll ? e.deltaX : e.deltaY

        if (Math.abs(delta) > 0) {
            e.preventDefault()
            
            // Stop auto animation
            animationRef.current?.stop()
            isDragging.current = true

            // Apply scroll with bounds wrapping
            const currentX = xTranslation.get()
            const newX = currentX - delta * 0.5 // Adjust sensitivity

            // Wrap around when exceeding bounds
            if (containerWidth.current > 0) {
                const wrappedX = ((newX % containerWidth.current) + containerWidth.current) % containerWidth.current
                xTranslation.set(-wrappedX)
            } else {
                xTranslation.set(newX)
            }

            // Resume auto-scroll after a delay
            clearTimeout((window as any).scrollTimeout)
            ;(window as any).scrollTimeout = setTimeout(() => {
                isDragging.current = false
                startAutoScroll()
            }, 2000)
        }
    }, [xTranslation, startAutoScroll])

    useEffect(() => {
        const wrapper = wrapperRef.current
        if (wrapper) {
            wrapper.addEventListener('wheel', handleWheel, { passive: false })
            return () => {
                wrapper.removeEventListener('wheel', handleWheel)
            }
        }
    }, [handleWheel])

    // Handle touch/drag
    const handleDragStart = () => {
        animationRef.current?.stop()
        isDragging.current = true
    }

    const handleDragEnd = () => {
        setTimeout(() => {
            isDragging.current = false
            startAutoScroll()
        }, 2000)
    }

    return (
        <div 
            ref={wrapperRef}
            className='mt-12 overflow-hidden cursor-grab active:cursor-grabbing'
        >
            <m.div
                ref={containerRef}
                className='flex'
                style={{ x: smoothX }}
                drag="x"
                dragConstraints={{ left: -10000, right: 10000 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                {children}
            </m.div>
        </div>
    )
}

export default InfiniteScroll
