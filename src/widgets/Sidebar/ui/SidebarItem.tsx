import React, { ComponentProps, ReactNode, memo } from 'react';

interface SidebarItemProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = memo(({ children, ...props }) => {
  return (
    <div className="sidebar-item" {...props}>
      {children}
    </div>
  );
});

export default SidebarItem;
