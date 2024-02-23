import React, { ComponentProps } from 'react';
import { toBoolean } from 'shared/lib/toBoolean';
import cn from 'shared/lib/classNames';

type HTMLInputProps = Omit<ComponentProps<'input'>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  title?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, title, className, type = 'text' }) => {
  return (
    <div className="flex flex-col gap-1">
      {title && <span>{title}</span>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={cn('border border-solid border-gray-700 w-[300px] h-[30px] py-4 px-2 dark:text-black', {
          [className as string]: toBoolean(className)
        })}
      />
    </div>
  );
};

export default Input;
