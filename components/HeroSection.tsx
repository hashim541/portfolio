import React, { useState } from 'react'
import * as Font from '@/utils/font'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const borderText = 'text-stroke text-fill-transparent'

  return (
    <section id='home' className='h-full flex flex-col justify-center items-center'>

        <div className='relative'>
            <p className='text-center mb-4 '>I am</p>
            <h1 
              className={`${Font.raleway.className} ${!hover && borderText}  text-5xl font-extrabold text-center sm:text-7xl lg:text-8xl`}
              onMouseEnter={()=> setHover(true)}
              onMouseLeave={ () => setHover(false)}
            >
              FULL STACK
            </h1>
            <h1 
              className={`${Font.raleway.className} ${hover && borderText} font-extrabold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl`}
              onMouseEnter={()=> setHover(false)}
              onMouseLeave={ () => setHover(true)}
            >MOHAMED HASHIM</h1>
            <h1 
              className={`${Font.raleway.className} ${!hover && borderText} text-5xl font-extrabold text-center sm:text-7xl lg:text-8xl`}
              onMouseEnter={()=> setHover(true)}
              onMouseLeave={ () => setHover(false)}
            > WEB DEVELOPER</h1>
        </div>
        <p className='mt-7 text-center'>Simple and yet versatile developer with a passion for learning,</p>
        <p className='text-center'>I can turn your website ideas into real world application.</p>
        
        <div className='flex gap-7 mt-9'>
            <a href="#project" className='border-2 px-3 py-1 rounded-md'> My Works</a>
            <a href="#contact" className='bg-black text-white px-3 py-1 rounded-md border-2 font-bold'>Let's Talk</a>
        </div>
    </section>
  )
}

export default HeroSection