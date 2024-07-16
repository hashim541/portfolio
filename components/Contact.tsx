import React from 'react'
import { contact } from '@/utils/data'
import ContactCard from './ContactCard'
import * as Font from '@/utils/font'
import ContactForm from './ContactForm'
import { motion as m } from 'framer-motion'

const Contact = () => {
  return (
    <section id='contact' className='max-w-[1000px] w-full flex flex-col justify-center items-center gap-12'>
       <m.h1 
          className={`${Font.monserrat.className} font-bold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl`}
          initial={{opacity:0, y:-20, }}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration: .5 }}
        >
            Contact
        </m.h1>

        <div className='w-full flex flex-col gap-12 items-start'>
            <div className='w-full flex flex-col justify-center items-center gap-12'>
                <h2 className={`${Font.raleway.className} font-semibold text-center tracking-tight text-3xl sm:text-4xl `}>Send a Message</h2>
                <ContactForm />
            </div>
            <div  className='w-full flex flex-col justify-center items-center gap-12'>
                <h2 className={`${Font.raleway.className} font-semibold text-center tracking-tight text-3xl sm:text-4xl `}>Social Links</h2>
                <div className='flex flex-wrap gap-7 items-center justify-between max-w-[800px]'>
                    {contact.map((item,index) => (
                        <ContactCard key={item.site} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact