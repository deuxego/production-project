import { FC, ReactNode } from 'react';
import cn from 'shared/lib/classNames';
import { toBoolean } from 'shared/lib/toBoolean';

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ children, className, isOpen = false, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClose}
      className={cn('overlay', {
        ['hidden']: !isOpen,
        [className as string]: toBoolean(className)
      })}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'flex modal-content bg-white rounded-lg shadow dark:bg-gray-700 max-w-[700px] p-5',
          { [className as string]: toBoolean(className) }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
