import styles from './SocialLink.module.css'

interface ILinkPropTypes {
    title: string,
    href: string,
    icon: JSX.Element
}

const SocialLink = ({ href, icon, title }: ILinkPropTypes) => {
    return (
        <a
            className={styles.link}
            href={href}
            title={title}
        >
            {icon}
        </a>
    )
}

export default SocialLink