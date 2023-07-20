import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonVariant } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const SwitchLanguages = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={SwitchLanguages}
      className={classNames("", {}, [className])}
      variant={ButtonVariant.CLEAR}
    >
      {t(short ? "Язык сокр" : "Язык")}
    </Button>
  );
};
