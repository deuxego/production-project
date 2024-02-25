import { FC, memo } from 'react';
import { toBoolean } from 'shared/lib/toBoolean';
import cn from 'shared/lib/classNames';
import { useTheme } from 'shared/hooks/useTheme';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={cn('', {
        [className as string]: toBoolean(className)
      })}
    >
      <img
        src="./theme.svg"
        alt="theme"
        className={cn('w-5', { [className as string]: toBoolean(className) })}
      />
    </button>
  );
});

export default ThemeSwitcher;
