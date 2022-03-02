import DevCard from '../inner/aside/DevCard'
import Nav from '../inner/aside/Nav'
import OpenSourceCard from '../inner/aside/OpenSourceCard'
import Socials from '../inner/aside/Socials'
import StickerCard from '../inner/aside/StickerCard'
import Tags from '../inner/aside/Tags'
import styles from './Aside.module.css'

const Aside = () => {
    return (
        <aside className={styles.container}>
            <DevCard />
            <Nav />
            <Socials />
            <Tags />
            <StickerCard />
            <OpenSourceCard />
        </aside>
    )
}

export default Aside