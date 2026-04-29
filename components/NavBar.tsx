'use client'
import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'

const NavBar = () => {
    const navItem = ['Home', 'About me', 'Skills', 'Project', 'Contact']
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            
            // Update active section based on scroll position
            const sections = navItem.map(item => item.toLowerCase().split(' ').join(''))
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="w-full flex flex-col items-center fixed z-20">
            <m.header 
                className={`flex flex-col items-center max-w-[1440px] w-full px-4 py-4 gap-2 md:flex-row transition-all duration-300 ${
                    scrolled 
                        ? 'bg-background/80 backdrop-blur-lg shadow-sm border-b border-border' 
                        : 'bg-transparent'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <m.h1 
                    className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-foreground"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <a href="#home">HASHIM541</a>
                </m.h1>

                <ul className='flex gap-5 sm:gap-9 md:ml-auto'>
                    {navItem.map((item, index) => {
                        const href = item.toLowerCase().split(' ').join('')
                        const isActive = activeSection === href
                        return (
                            <m.li 
                                key={item} 
                                className="relative"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <a 
                                    href={'#' + href}
                                    className={`text-sm sm:text-base transition-colors duration-200 hover:text-primary ${
                                        isActive ? 'text-primary font-medium' : 'text-muted-foreground'
                                    }`}
                                >
                                    {item}
                                </a>
                                {isActive && (
                                    <m.div 
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        layoutId="activeNav"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </m.li>
                        )
                    })}
                </ul>
            </m.header>
        </section>
    )
}

export default NavBar
