import Modal from 'shared/ui/Modal';
import Loader from 'shared/ui/Loader';
import { FC, Suspense } from 'react';
import { LoginFormLazy } from './LoginFormLazy';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy/>
      </Suspense>
    </Modal>
  );
};
