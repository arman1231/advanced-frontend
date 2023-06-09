import { Button } from "../../../../shared/ui/Button/Button";
import { classNames } from "../../../../shared/lib/classNames/classNames";
// import cls from "./BugButton.module.scss";
import { useEffect, useState } from "react";
interface BugButtonProps {
  className?: string;
}

// компонент для тестирования ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
        throw new Error();
    }
  }, [error]);
  return (
    <Button
      onClick={onThrow}
      className={classNames('', {}, [className])}
    >
      throw error
    </Button>
  );
};
