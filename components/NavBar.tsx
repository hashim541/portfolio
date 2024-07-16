import React from 'react'
import * as Font from '@/utils/font'
import { motion as m } from 'framer-motion'

const NavBar = () => {

    const navItem = ['Home', 'About me', 'Skills', 'Project' ,'Contact']

  return (
    <section className="w-full flex flex-col items-center fixed z-20 ">
        <m.header 
            className='flex flex-col items-center max-w-[1440px] w-full px-4 py-4 gap-2 md:flex-row'
            initial={{opacity:0, y:-20, }}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: .5 }}    
        >
            <h1 className={`${Font.monserrat.className} text-2xl font-bold `}>HASHIM541</h1>

            <ul className='flex gap-5 sm:gap-9 md:ml-auto'>
                {navItem.map(item => (
                    <li key={item} className='text-slate-700 text-sm sm:text-base'>
                        <a href={'#'+item.toLowerCase().split(' ').join('')}>{item}</a>
                    </li>
                ))}
            </ul>
        </m.header>
    </section>
  )
}

export default NavBar