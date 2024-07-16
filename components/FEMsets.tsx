
import FEMCard from './FEMCard'
import { projects } from '@/utils/data'
import { motion as m} from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'


export const FEMsets1 = () => {
    const list = [...projects.fem.set1, ...projects.fem.set1]
    

    return (
        <InfiniteScroll scroll='left' list={list.length}>
            {list.map((item, idx) => (
                <div key={idx} className='flex-shrink-0'>
                    <FEMCard key={item.name} item={item} />
                </div>
            ))}
        </InfiniteScroll>
    )
}

export const FEMsets2 = () => {
    const list = [...projects.fem.set2, ...projects.fem.set2]
    
    return (
        <InfiniteScroll scroll='right' list={list.length}>
            {list.map((item, idx) => (
                <div key={idx} className='flex-shrink-0'>
                    <FEMCard key={item.name} item={item} />
                </div>
            ))}
        </InfiniteScroll>
    )

}