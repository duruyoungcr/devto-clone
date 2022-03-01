import Aside from '../Aside'
import Highlights from '../Highlights'
import Posts from '../Posts'
import styles from './Main.module.css'

const Main = () => {
    return (
        <main className={styles.container}>
            <Aside />
            <Posts />
            <Highlights />
        </main>
    )
}

export default Main