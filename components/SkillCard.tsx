import Image from 'next/image'
import React from 'react'

interface Props {
    item: {
        name: string
        svg: any
    }
}

const SkillCard = ({item}: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 relative overflow-hidden z-10 w-[150px] h-[150px] border-2 p-5 rounded-lg shadow-sm bg-white'>
        <Image
            src={item.svg}
            alt={item.name+' logo'}
            width={50}
            height={50}
            className='rounded-md'
        />
        <p className='text-center text-slate-700 z-10 '>{item.name}</p>
        <Image
            src={item.svg}
            alt={item.name+' logo'}
            width={100}
            height={100}
            className='absolute translate-x-[50%] left-10 top-5 translate-y-[50%] opacity-15'
        />
    </div>
  )
}

export default SkillCard