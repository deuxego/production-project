import { FC } from 'react';
import { toBoolean } from 'shared/lib/toBoolean';
import cn from 'shared/lib/classNames';
import { useTheme } from 'shared/hooks/useTheme';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (className) => {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={cn('', {
        [className as string]: toBoolean(className)
      })}
    >
      <img src="./theme.svg" alt="theme" className="h-6" />
    </button>
  );
};

export default ThemeSwitcher;
