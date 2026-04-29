'use client'
import { certification } from '@/utils/data'
import CertificateCard from './CertificateCard'
import { motion as m } from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

const Certifications = () => {
    const list = [...certification, ...certification]
    
    return (
        <section className='flex flex-col items-center gap-12 w-full'>
            <m.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="font-[family-name:var(--font-montserrat)] font-bold tracking-tight text-5xl sm:text-7xl lg:text-8xl text-foreground">
                    Certificates
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Scroll horizontally or drag to browse
                </p>
            </m.div>
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
