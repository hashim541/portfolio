import React from 'react'
import * as Font from '@/utils/font'
import { FEMsets1, FEMsets2 } from './FEMsets'
import {motion as m} from 'framer-motion'

const FEMSection = () => {
  return (
    <div className='w-full flex flex-col gap-12 mb-10'>
        <m.h2 className={`${Font.raleway.className} font-semibold text-center tracking-tight text-3xl sm:text-4xl `}
          initial={{opacity:0, y:-20, }}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration: .5 }}
        >
          Frontend Mentor Projects
        </m.h2>
        <div  className='w-full'>
            <FEMsets1 />
            <FEMsets2 />
        </div>
    </div>
  )
}

export default FEMSection