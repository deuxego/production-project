import React, { ComponentProps, ReactNode } from 'react';
import cn from 'shared/lib/classNames';
import { excludeProps } from 'shared/lib/excludeProps';
import { toBoolean } from 'shared/lib/toBoolean';

type TColor = 'primary' | 'success' | 'error';

interface ButtonProps extends ComponentProps<'button'> {
  color: TColor;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, children, ...props }) => {
  return (
    <button
      className={cn({
        ['primary-btn']: color === 'primary',
        ['success-btn']: color === 'success',
        ['error-btn']: color === 'error',
        [props.className as string]: toBoolean(props.className)
      })}
      
      {...excludeProps<'button'>(props, 'className')}
    >
      {children}
    </button>
  );
};

export default Button;
