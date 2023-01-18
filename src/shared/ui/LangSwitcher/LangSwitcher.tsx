import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

import type { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    if (i18n.language === "ru") {
      i18n.language = "en";
    } else if (i18n.language === "en") {
      i18n.language = "de";
    } else if (i18n.language === "de") {
      i18n.language = "ru";
    }
    // i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    i18n.changeLanguage(i18n.language);
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
