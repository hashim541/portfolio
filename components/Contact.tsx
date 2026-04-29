'use client'
import React from 'react'
import { contact } from '@/utils/data'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
import { motion as m } from 'framer-motion'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id='contact' className='max-w-[1100px] w-full flex flex-col justify-center items-center gap-16'>
      <m.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-[family-name:var(--font-montserrat)] font-bold tracking-tight text-5xl sm:text-7xl lg:text-8xl">
          {"Let's Connect"}
        </h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
      </m.div>

      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
        {/* Contact Form */}
        <m.div 
          className='w-full'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-[family-name:var(--font-raleway)] font-semibold tracking-tight text-2xl sm:text-3xl mb-6">
            Send a Message
          </h2>
          <ContactForm />
        </m.div>

        {/* Social Links */}
        <m.div 
          className='w-full'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="font-[family-name:var(--font-raleway)] font-semibold tracking-tight text-2xl sm:text-3xl mb-6">
            Find Me On
          </h2>
          <m.div 
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contact.map((item) => (
              <m.div key={item.site} variants={itemVariants}>
                <ContactCard item={item} />
              </m.div>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  )
}

export default Contact
