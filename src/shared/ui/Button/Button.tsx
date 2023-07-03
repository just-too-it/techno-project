import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from  './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        ...otherProps
    } = props

  return (
    <button 
        className={classNames(styles.Button, {}, [className, styles[variant]])}
        {...otherProps}
    >
        {children}
    </button>
    
  )
}