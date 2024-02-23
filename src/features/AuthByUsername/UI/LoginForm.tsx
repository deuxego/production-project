import React, { useState } from 'react';
import Button from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import cn from 'shared/lib/classNames';
import { toBoolean } from 'shared/lib/toBoolean';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div
      className={cn('flex flex-col items-center gap-8 p-9', {
        [className as string]: toBoolean(className)
      })}
    >
      <div className="flex flex-col gap-5">
        <Input title="Username" value={value} onChange={setValue}/>
        <Input title="Password" />
      </div>

      <Button className='w-32' color="primary">{'Login'}</Button>
    </div>
  );
};

export default LoginForm;
