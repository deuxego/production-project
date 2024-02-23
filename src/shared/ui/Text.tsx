import React, { ComponentProps, ReactNode } from 'react';
import cn from 'shared/lib/classNames';
import { excludeProps } from 'shared/lib/excludeProps';
import { toBoolean } from 'shared/lib/toBoolean';

type Color = 'primary' | 'success' | 'error' | 'ghost' | 'purple' | 'default';

interface TextProps extends ComponentProps<'p'> {
  children: ReactNode;
  color?: Color;
  highlighted?: boolean;
}

const Text: React.FC<TextProps> = ({ children, color = 'default', highlighted = false, ...props }) => {
  return (
    <p
      className={cn('text-base	', {
        [props.className as string]: toBoolean(props.className),
        ['text-cyan-700']: color === 'primary',
        ['text-green-500']: color === 'success',
        ['text-rose-600']: color === 'error',
        ['text-violet-400']: color === 'purple',
        ['text-gray-400	']: color === 'ghost',
        ['text-black']: color === 'default',
        ['p-2 bg-gray-100 dark:bg-gray-600']: highlighted
      })}
      {...excludeProps<'p'>(props, 'className')}
    >
      {children}
    </p>
  );
};

export default Text;
