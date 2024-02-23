import React, { ReactNode } from 'react';
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

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <>
      <div
        className={cn('sidebar justify-between', { [className as string]: toBoolean(className) })}
      >
        <div>
          {sidebarItems.map(({ icon, title, to }) => (
            <Link to={to} key={title}>
              <SidebarItem>
                <span className="text-2xl">{icon}</span>
                {title}
              </SidebarItem>
            </Link>
          ))}
        </div>
        <ThemeSwitcher className="pl-7 pb-3 w-24" />
      </div>
    </>
  );
};

export default Sidebar;
