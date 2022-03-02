import styles from './StickerCard.module.css'

const StickerCard = () => {
    const stickerURL = 'https://shop.dev.to/collections/accesories/products/sticker-pack-1'
    const imageUrl = 'https://res.cloudinary.com/practicaldev/image/fetch/s--pVCMYZWJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://scontent-lga3-1.cdninstagram.com/vp/7c898e2c9e9fa71f72dd5d422d444549/5DFE1BFA/t51.2885-15/fr/e15/s1080x1080/57390242_386431405416711_440644832181536446_n.jpg%3F_nc_ht%3Dscontent-lga3-1.cdninstagram.com'
    return (
        <a href={stickerURL} >
            <div className={styles.card}>
                <img src={imageUrl} alt="sticker" width={'100%'} height={162} className='my-2.5' />
                <h3 className={styles.colored}>Do you have your sticker pack yet?</h3>
            </div>
        </a>
    )
}

export default StickerCard