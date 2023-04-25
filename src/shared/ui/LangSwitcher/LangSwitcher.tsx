import { t } from "i18next";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../config/i18n/i18n";
import { classNames } from "../../lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t } = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (

        <Button className={classNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>{t('Lang')}</Button>

    );
};
