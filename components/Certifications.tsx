'use client'
import * as Font from '@/utils/font'
import { certification } from '@/utils/data'
import CertificateCard from './CertificateCard'
import { motion as m,} from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

const Certifications = () => {
    const list = [...certification, ...certification]
    
    return (
        <section className='flex flex-col items-center gap-12 w-full'>
            <m.h1 
                className={`${Font.monserrat.className} font-bold tracking-tight text-5xl text-center sm:text-7xl lg:text-8xl`}
                initial={{opacity:0, y:-20, }}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                transition={{duration: .5 }}
            >
                Certificates
            </m.h1>
            <section className='w-full relative'>
                <InfiniteScroll scroll='left' list={list.length}>
                    {list.map((item, idx) => (
                        <div key={idx} className='flex-shrink-0'>
                            <CertificateCard item={item} />
                        </div>
                    ))}
                </InfiniteScroll>

            </section>
        </section>
    )
}

export default Certifications
