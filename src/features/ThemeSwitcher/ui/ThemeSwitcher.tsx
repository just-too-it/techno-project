import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/themeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import styles from  './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button 
            onClick={toggleTheme} 
            variant={ButtonVariant.CLEAR}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon/>}
        </Button>
    
    )
}