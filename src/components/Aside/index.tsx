import DevCard from '../inner/aside/DevCard'
import Nav from '../inner/aside/Nav'
import styles from './Aside.module.css'

const Aside = () => {
    return (
        <aside className={styles.container}>
            <DevCard />
            <Nav />
        </aside>
    )
}

export default Aside