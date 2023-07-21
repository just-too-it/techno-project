import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>

      {/* eslint-disable-next-line */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quos
        aut voluptate quisquam placeat veritatis consectetur odit voluptas amet
        sed delectus, cupiditate atque exercitationem quia praesentium quaerat.
        Mollitia, perferendis ea.
      </Modal>
    </div>
  );
};
