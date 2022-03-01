import styles from './NavLink.module.css'

interface NavLinkPropTypes {
    title: string,
    href: string,
    icon?: JSX.Element
}

const NavLink = ({ title, href, icon }: NavLinkPropTypes) => {
    return (
        <a className={styles.link} href={href}>
            {icon && <div>{icon}</div>}
            <p className={`${icon && 'ml-2'} transition-all duration-300 ease-in`}>{title}</p>
        </a>
    )
}

export default NavLink