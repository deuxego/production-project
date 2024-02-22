import React, { ComponentProps, ReactNode } from 'react';

interface SidebarItemProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, ...props }) => {
  return (
    <div className="sidebar-item" {...props}>
      {children}
    </div>
  );
};

export default SidebarItem;
