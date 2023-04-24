import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widgets/Navbar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
