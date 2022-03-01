import CTAButton from '../../../elements/buttons/CtaButton'
import SecondaryButton from '../../../elements/buttons/SecondaryButton'
import styles from './DevCard.module.css'


const DevCard = () => {
    const handleClick = () => { }
    return (
        <div className={styles.card}>
            <div className='flex'>
                <img className='-rotate-[15deg] h-[51px] w-[51px] mt-4' src={'/logo.png'} alt={'dev.to logo'} width={51} height={51} />
                <div className='ml-10'>
                    <h2 className='text-black-dark text-[30px] mb-2 font-bold leading-9'>
                        <a className={styles.colored} href={'/'}>DEV Community </a>
                        is a community of 807,013 amazing developers
                    </h2>
                    <p className='text-black-light'>We're a place where coders share, stay up-to-date and grow their careers.</p>
                </div>
            </div>
            <div className={styles.actions}>
                <CTAButton text='Create account' onClick={handleClick} variant={true} />
                <div className='h-1'></div>
                <SecondaryButton text="Log in" onClick={handleClick} variant={true} />
            </div>

        </div>
    )
}

export default DevCard