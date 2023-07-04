import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from  './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const SwitchLanguages = () =>{
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

  return (
        <Button 
            onClick={SwitchLanguages} 
            className={classNames(styles.LangSwitcher, {}, [className])}
            variant={ButtonVariant.CLEAR}
        >{t('Язык')}</Button>
  )
}