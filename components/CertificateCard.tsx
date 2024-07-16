import React from 'react'
import Image from 'next/image'

interface Props {
    item: {
        courseName: string;
        url: string;
        img: string;
        institute: {
            name: string;
            svg: any;
        };
    }
}

const CertificateCard = ({item}: Props) => {
    
  return (
    <div className='flex flex-col max-w-[350px] md:max-w-[420px] max-h-[470px] mr-12 justify-between items-start gap-8 bg-white p-8 rounded-xl shadow-md border-2'>
        <Image
            src={`/assets/images/${item.img}`}
            alt='certificate'
            width={500}
            height={700}
            className='w-[500px]'
        />
        <div className='flex flex-col items-start w-full gap-4'>
            <div className='flex gap-4'>
                <Image
                    src={ item.institute.name == 'NPTEL' ? '/assets/images/'+item.institute.svg :item.institute.svg}
                    alt='logo'
                    width={50}
                    height={50}
                    className='h-[50px]'
                />
                <div >
                    <p className='font-semibold'>{item.courseName}</p>
                    <p className='text-sm'>{item.institute.name}</p>
                </div>
            </div>

            <a href={item.url} className='ml-auto w-full flex justify-center items-center p-3 rounded-lg shadow-sm bg-gray-100'>
                Visit
                <Image
                    src={'/assets/svg/visit.svg'}
                    alt='visit logo'
                    width={24}
                    height={24}
                    className='ml-2'
                />
            </a>
        </div>
    </div>
  )
}

export default CertificateCard