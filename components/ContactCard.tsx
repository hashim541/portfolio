import Image from 'next/image';
import React from 'react'

interface Props {
    item: {
        site: string;
        userId: string;
        url: string;
        svg: string;
    }
}

const ContactCard = ({item}: Props) => {
  return (
    <div className='flex gap-4 '>
        <Image
            src={item.svg}
            alt={item.site+' svg'}
            width={50}
            height={50}
        />
        <div>
          <p>{item.site}</p>
          <a href={item.url}>{ item.site == 'GitHub' ? (<p className='text-xs'>{item.userId} &nbsp;</p> ) : (<p  className='text-xs'>{item.userId}</p>)}</a>
        </div>
    </div>
  )
}

export default ContactCard