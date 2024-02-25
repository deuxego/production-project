import React, { ReactNode, memo, useMemo } from 'react';
import SidebarItem from './SidebarItem';
import { AiFillCheckSquare } from 'react-icons/ai';

import cn from 'shared/lib/classNames';
import { toBoolean } from 'shared/lib/toBoolean';
import { Link } from 'react-router-dom';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

interface SidebarItem {
  title: string;
  to: string;
  icon: ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Item 1',
    to: '/path',
    icon: <AiFillCheckSquare />
  },
  {
    title: 'Item 2',
    to: '/path',
    icon: <AiFillCheckSquare />
  },
  {
    title: 'Item 3',
    to: '/path',
    icon: <AiFillCheckSquare />
  }
];

const Sidebar: React.FC<SidebarProps> = memo(({ className }) => {
  const itemsList = useMemo(
    () =>
      sidebarItems.map(({ icon, title, to }) => (
        <Link to={to} key={title}>
          <SidebarItem>
            <span className="text-2xl">{icon}</span>
            {title}
          </SidebarItem>
        </Link>
      )),
    []
  );

  return (
    <div className={cn('sidebar justify-between', { [className as string]: toBoolean(className) })}>
      <div>{itemsList}</div>
      <ThemeSwitcher className="w-10 ml-8 mb-5" />
    </div>
  );
});

export default Sidebar;
