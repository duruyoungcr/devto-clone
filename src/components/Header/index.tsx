import React from 'react'
import CTAButton from '../elements/buttons/CtaButton'
import SecondaryButton from '../elements/buttons/SecondaryButton'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import styles from './Header.module.css'

const Header = () => {
    const handleClick = () => { }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src='./logo.png' width="50" height="40" alt='devto_logo' className='mr-4' />
                    <InputGroup size='md' minWidth='420'>
                        <Input type="search" placeholder="Search..." className={styles.input} />
                        <InputRightElement
                            fontSize='1.2em'
                            children={<SearchIcon />}
                        />
                    </InputGroup>
                </div>
                <div className={styles.right}>
                    <div className='mr-2'>
                        <SecondaryButton text="Log in" onClick={handleClick} />
                    </div>
                    <CTAButton text='Create account' onClick={handleClick} />
                </div>
            </div>
        </header>
    )
}

export default Header