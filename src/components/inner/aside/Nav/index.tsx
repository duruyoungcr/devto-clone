import NavLink from '../NavLink'
import { navLinks, otherLinks } from './navLinks'

const Nav = () => {
    return (
        <nav className='mt-4'>
            <div className='mb-4'>
                {navLinks.map(link => (
                    <NavLink key={link.title} title={link.title} href={link.href} icon={link.icon} />
                ))}
            </div>
            <div>
                <h2 className='px-3 py-2 text-black-dark font-bold'>Other</h2>
                {otherLinks.map(link => (
                    <NavLink key={link.title} title={link.title} href={link.href} icon={link.icon} />
                ))}
            </div>
        </nav>
    )
}

export default Nav