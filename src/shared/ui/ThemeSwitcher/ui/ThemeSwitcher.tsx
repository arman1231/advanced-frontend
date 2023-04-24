import { Theme, useTheme } from "../../../../app/providers/ThemeProvider";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "../../../assets/icons/theme-light.svg";
import DarkIcon from "../../../assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "../../Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {" "}
      { Theme.DARK === theme ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
