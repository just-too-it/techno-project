import React, { FC, useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

// компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const throwBug = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwBug}>{t("Ошибка")}</Button>;
};
