import React from 'react'
import styles from './CtaButton.module.css'

interface buttonPropTypes {
  text: string,
  onClick: () => void,
  variant?: boolean
}

const CTAButton = ({ text, onClick, variant = false }: buttonPropTypes) => {
  return (
    <button onClick={onClick} className={`${variant ? styles.btn__variant : styles.btn}`}>
      {text}
    </button>
  )
}

export default CTAButton