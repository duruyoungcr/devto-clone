import Listings from '../inner/highlights/Listings'
import TagListings from '../inner/highlights/TagListings'
import TrendingListings from '../inner/highlights/TrendingListings'
import styles from './Highlights.module.css'

const tags = ['help', 'discuss', 'explainlikeimfive', 'challenge', 'meta', 'watercooler']

const Highlights = () => {
    return (
        <aside className={styles.container}>
            <Listings />
            {tags.map((tag, index) => (
                <TagListings key={index} tag={tag} />
            ))}
            <TrendingListings />
        </aside>
    )
}

export default Highlights