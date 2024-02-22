import { FC } from 'react';
import { toBoolean } from 'shared/lib/toBoolean';
import cn from 'shared/lib/classNames';
import NavLink from 'shared/ui/NavLink';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

const baseStyles = 'flex items-center w-full border-b-2 border-solid border-gray-300 dark:border-gray-800 dark:bg-gray-800 px-6 py-2';

const Navbar: FC<NavbarProps> = (className) => {
  return (
    <div
      className={cn(baseStyles, {
        [className as string]: toBoolean(className)
      })}
    >
      <div className="flex w-full justify-end gap-4 text-xl">
        <NavLink to={'/'} active>
          Home
        </NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
