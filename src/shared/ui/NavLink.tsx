import React, { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'shared/lib/classNames';
import { toBoolean } from 'shared/lib/toBoolean';

interface NavLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, active, className, ...otherProps }) => {
  return (
    <Link
      to={to}
      className={cn('nav-link', {
        ['nav-link-active']: toBoolean(active),
        [className as string]: toBoolean(className)
      })}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default NavLink;
