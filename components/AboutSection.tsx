import Image from 'next/image'
import React from 'react'
import * as Font from '@/utils/font'
import { contact } from '@/utils/data'
import { motion as m } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className=' h-full max-w-[1000px] flex flex-col justify-center items-center gap-12'>
        <m.h1 
            className={`${Font.monserrat.className} font-bold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl`}
            initial={{opacity:0, y:-20, }}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: .5 }}
        >
            About Me
        </m.h1>
        <div className='flex flex-col items-center gap-8 md:flex-row bg-white py-8  px-6 md:px-12 rounded-xl shadow-sm border-2'>
            <Image
                src={'/assets/images/myface.jpg'}
                alt='my photo'
                width={200}
                height={200}
                className=' w-[170px] h-[170px] md:h-fit object-cover object-left-top rounded-full md:rounded-xl self-center md:self-start'
            />
            <div className='flex flex-col gap-4'>
                <m.p 
                    className={`${Font.raleway.className} text-2xl font-semibold text-center md:text-start`}
                    initial={{opacity:0, x:20, }}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once: true}}
                    transition={{duration: .5, delay: .5 }}
                >
                    Mohamed Hashim S
                </m.p>
                <m.p 
                    className='max-w-[700px] text-center md:text-justify text-slate-700'
                    initial={{opacity:0, x: 20, }}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once: true}}
                    transition={{duration: .5, delay: .75 }}
                >
                    I am a recent Computer Science graduate aiming to secure a position as a Web Developer.
                    My Technical skills honed through extensive self-directed learning from online resources. 
                    Recently i have completed Harvard university's CS50X course which covered C, data structure, Python, Web development, etc... 
                    I also have taken online courses like Complete MERN stack development and introduction to C programming by NPTEL. 
                    Committed to continuously enhancing expertise by exploring new technologies and applying knowledge in practical scenarios.
                </m.p>
                <div className='flex self-center md:self-start gap-8'>
                    {contact.map((item,idx) => (
                        <m.a 
                            href={item.url} 
                            key={item.site} 
                            className='rounded-full border-2 p-1'
                            initial={{opacity:0, x:10, scale: .85}}
                            whileInView={{opacity:1, x:0, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: .5,delay:1+(idx/5)}}
                        >
                            <Image
                                src={item.svg}
                                alt={item.site+' Logo'}
                                width={30}
                                height={30}
                            />
                        </m.a>
                    ))}
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default AboutSection