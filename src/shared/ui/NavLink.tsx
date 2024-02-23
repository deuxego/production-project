import React, { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { toBoolean } from 'shared/lib/toBoolean';
import cn from 'shared/lib/classNames';

interface NavLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, active, className, ...props }) => {
  return (
    <Link
      to={to}
      className={cn('nav-link', {
        ['nav-link-active']: toBoolean(active),
        [className as string]: toBoolean(className)
      })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
