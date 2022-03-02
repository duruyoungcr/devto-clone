import SocialLink from '../SocialLink'
import { socialLinks } from './socialLinks'

const Socials = () => {
    return (
        <div className='grid grid-cols-5 gap-1 my-4'>
            {socialLinks.map(link => (
                <div key={link.title}>
                    <SocialLink href={link.href} icon={link.icon} title={link.title} />
                </div>
            ))}
        </div>
    )
}

export default Socials