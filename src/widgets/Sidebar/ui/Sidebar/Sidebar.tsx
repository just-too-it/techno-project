import React, { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import styles from  './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
      
        </div>
    
    )
}