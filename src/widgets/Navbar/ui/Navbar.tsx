import { FC, useEffect, useState } from 'react';
import { toBoolean } from 'shared/lib/toBoolean';
import { LoginModal } from 'features/AuthByUsername';
import { RxAvatar } from 'react-icons/rx';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { userActions } from 'entities/User';
import cn from 'shared/lib/classNames';
import NavLink from 'shared/ui/NavLink';
import Button from 'shared/ui/Button';

interface NavbarProps {
  className?: string;
}

const baseStyles =
  'flex items-center w-full border-b-2 border-solid border-gray-300 dark:border-gray-800 dark:bg-gray-800 px-6 py-2';

const Navbar: FC<NavbarProps> = (className) => {
  const { authData } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  useEffect(() => {
    if (authData) {
      setIsOpen(false);
    }
  }, [authData]);

  return (
    <div
      className={cn(baseStyles, {
        [className as string]: toBoolean(className)
      })}
    >
      <div className="flex w-full justify-end gap-8 text-xl">
        <div className="flex gap-3 items-center">
          <NavLink to={'/'} active>
            Home
          </NavLink>
          <NavLink to={'/about'}>About</NavLink>
        </div>

        {authData ? (
          <div className="flex items-center gap-3">
            <RxAvatar className="text-2xl" />
            <Button onClick={onLogout} color="primary" className="py-1">
              Logout
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsOpen(true)} color="primary" className="py-1">
            Login
          </Button>
        )}

        <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default Navbar;
