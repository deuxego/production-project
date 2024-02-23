import React, { memo, useCallback } from 'react';
import Button from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import cn from 'shared/lib/classNames';
import { toBoolean } from 'shared/lib/toBoolean';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { loginActions } from '../model/slice/loginSlice';
import { loginByUsername } from '../model/services/loginByUsername';
import Loader from 'shared/ui/Loader';
import Text from 'shared/ui/Text';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = memo(({ className }) => {
  const { username, password, isLoading, error } = useAppSelector((state) => state.login);

  const dispatch = useAppDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = () => {
    dispatch(loginByUsername({ username, password }));
    dispatch(loginActions.setPassword(''));
    dispatch(loginActions.setUsername(''));
  };

  return (
    <div
      className={cn('flex flex-col items-center gap-8 px-32', {
        [className as string]: toBoolean(className)
      })}
    >
      <p className="text-bold text-2xl">Login</p>

      <div className="flex flex-col gap-5">
        <Input title="Username" value={username} onChange={onChangeUsername} />
        <Input title="Password" value={password} onChange={onChangePassword} />
      </div>

      {error && <Text color="error">{error}</Text>}

      <Button className="w-32" color="primary" onClick={onLoginClick} disabled={isLoading}>
        {isLoading ? <Loader /> : 'Login'}
      </Button>
    </div>
  );
});

export default LoginForm;
