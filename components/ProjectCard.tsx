import Image from 'next/image';
import React, { useState } from 'react'
import * as Font from '@/utils/font'

interface Props{
    item: {
        name: string;
        code: string;
        live: string;
        design: string;
        desc: string;
        tech: string[];
    }
}

const ProjectCard = ({item}: Props) => {

    const [hover, setHover] = useState(false)

  return (
    <div className='sm:max-w-[400px] max-w-[350px] mr-6 md:mr-12 h-fit w-full border-2 rounded-lg overflow-hidden'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <Image
            src={`/assets/images/${item.design}`}
            alt={item.name+' image'}
            width={1000}
            height={1000}
            className='w-full'
        />
        <div className='py-4 px-6 mt-2 flex flex-col gap-3'>
            <div>
                <p className={`${Font.raleway.className} text-lg font-bold`}>{item.name}</p>
                <p className='text-xs text-slate-700 text-justify'>{ hover ? item.desc : item.desc.slice(0,150)+'...'}</p>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
                {item.tech.map(eachItem =>(
                    <p key={eachItem} className='text-sm bg-gray-100 text-slate-700 px-3 py-1 rounded-2xl'>{eachItem}</p>
                ))}
            </div>

            <div className='flex w-full gap-4 mt-2'>
                <a href={item.code} className='w-full flex gap-2 items-center justify-center bg-slate-100 py-2 rounded-md'>
                    <Image
                        src={'/assets/svg/github.svg'}
                        alt='visit logo'
                        width={24}
                        height={24}
                        className='ml-2'
                    />
                    Code
                </a>
                <a href={item.live} className='w-full flex gap-2 items-center justify-center bg-blue-100 py-2 rounded-md'>
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

export default ProjectCard