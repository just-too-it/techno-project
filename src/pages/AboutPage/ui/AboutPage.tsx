import { BugButton } from "app/providers/ErrorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <div>{t("О компании")}</div>
      <BugButton />
    </>
  );
};

export default AboutPage;
