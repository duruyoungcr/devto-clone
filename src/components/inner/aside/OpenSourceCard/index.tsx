import styles from './OpenSourceCard.module.css'

const OpenSourceCard = () => {
    const openSourceURL = 'https://github.com/forem/forem'
    return (
        <div className={styles.card}>
            <div>
                <p>DEV runs on 100% open source code known as
                    <a href={openSourceURL} className={styles.colored}> Forem</a>.
                </p>
                <p>Contribute to the codebase or host your own!</p>
                <strong>Check these out! 👇</strong>
            </div>
            <ul className='my-4 pl-10 list-disc'>
                <li>
                    <a href={openSourceURL} className={styles.colored}>Main Forem Repo</a>
                </li>
                <li>
                    <a href={openSourceURL} className={styles.colored}>Self-Host Instructions</a>
                </li>
            </ul>
        </div>
    )
}

export default OpenSourceCard