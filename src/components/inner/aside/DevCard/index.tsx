import CTAButton from '../../../elements/buttons/CtaButton'
import SecondaryButton from '../../../elements/buttons/SecondaryButton'
import styles from './DevCard.module.css'

const DevCard = () => {
    const handleClick = () => { }
    return (
        <div className={styles.card}>
            <h2 className='text-black-dark text-lg mb-4 font-bold leading-6'>
                <a className={styles.colored} href={'/'}>DEV Community </a>
                is a community of 807,013 amazing developers
            </h2>
            <p className='text-black-light mb-4'>We're a place where coders share, stay up-to-date and grow their careers.</p>
            <div className={styles.actions}>
                <CTAButton text='Create account' onClick={handleClick} />
                <div className='h-1'></div>
                <SecondaryButton text="Log in" onClick={handleClick} />
            </div>

        </div>
    )
}

export default DevCard