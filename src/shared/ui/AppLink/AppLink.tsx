import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, LinkProps } from 'react-router-dom';
import styles from  './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY =  'primary',
    SECONDARY =  'secondary',
    RED =  'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { 
    className, 
    children, 
    to, 
    theme=AppLinkTheme.PRIMARY, 
    ...otherProps
  } = props;
  return (
    <Link 
      to={to} 
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
    
  )
}