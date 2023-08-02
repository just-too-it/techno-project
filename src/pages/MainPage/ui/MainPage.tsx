import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

function MainPage() {
  const { t } = useTranslation("main");

  return <div>{t("Главная")}</div>;
}

export default MainPage;
