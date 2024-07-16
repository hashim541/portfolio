'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import * as Font from '@/utils/font'

interface Props {
    item: {
        name: string;
        code: string;
        live: string;
        design: string;
    }
}

const FEMCard = ({item}: Props) => {

    const [cardHover,setCardHover] = useState(false)

    const img = item.design.split('github.com')
    const restOfImg = img[1].split('tree/').join('')
    const updatedImg = img[0]+'raw.githubusercontent.com'+restOfImg    
    
  return (
    <div 
        className='w-full h-[400px] sm:min-w-[400px] sm:max-w-[400px] min-w-[350px] max-w-[350px] overflow-hidden mr-6 md:mr-12 border-2 rounded-lg flex flex-col justify-between'
        onMouseEnter={ () => setCardHover(true) }
        onMouseLeave={ () => setCardHover(false) }    
    >
        <Image
            src={updatedImg}
            alt={item.name+' image'}
            width={1000}
            height={1000}
            className='w-full rounded-lg'
        />
        
        <div className='p-4'>
        <p className={`${Font.raleway.className} text-sm font-bold  text-balance`}>{item.name}</p>
            <div className='flex w-full gap-4 mt-3'>
                <a href={item.code} className='w-full flex gap-2 items-center justify-center text-sm bg-slate-100 p-2 rounded-md'>
                    <Image
                        src={'/assets/svg/github.svg'}
                        alt='visit logo'
                        width={24}
                        height={24}
                        className='ml-2'
                    />
                    Code
                </a>
                <a href={item.live} className='w-full flex gap-2 items-center justify-center text-sm bg-blue-100 p-2 rounded-md'>
                    <Image
                        src={'/assets/svg/visit.svg'}
                        alt='visit logo'
                        width={24}
                        height={24}
                        className='ml-2'
                    />
                    Visit
                </a>
            </div>
        </div>
    </div>
  )
}

export default FEMCard