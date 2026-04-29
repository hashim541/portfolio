'use client'
import React from 'react'
import { FEMsets1, FEMsets2 } from './FEMsets'
import { motion as m } from 'framer-motion'

const FEMSection = () => {
  return (
    <section className='w-full flex flex-col gap-12 py-20 bg-muted'>
      <m.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[family-name:var(--font-raleway)] font-semibold tracking-tight text-3xl sm:text-4xl text-foreground">
          Frontend Mentor Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          A collection of challenges completed on Frontend Mentor
        </p>
      </m.div>
      <div className='w-full'>
        <FEMsets1 />
        <FEMsets2 />
      </div>
    </section>
  )
}

export default FEMSection
