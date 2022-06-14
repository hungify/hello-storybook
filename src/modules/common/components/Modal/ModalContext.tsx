import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

export type ModalContext = {
  showModal: (modal: () => JSX.Element) => void;
  hideModal: () => void;
  hideAllModals: () => void;
};

const initialValue = {
  showModal: () => undefined,
  hideModal: () => undefined,
  hideAllModals: () => undefined,
};

const ModalContext = createContext<ModalContext>(initialValue);

const push = (modal: () => JSX.Element) => (prevModals: JSX.Element[]) => [...prevModals, modal()];
const pop = (modals: JSX.Element[]) => modals.slice(0, modals.length - 1);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modals, setModals] = useState<JSX.Element[]>([]);

  const showModal = (modal: () => JSX.Element) => setModals(push(modal));
  const hideModal = () => setModals(pop);
  const hideAllModals = () => setModals([]);

  const ModalLatest = modals[modals.length - 1];

  return (
    <ModalContext.Provider value={{ showModal, hideModal, hideAllModals }}>
      {children}
      {!!modals.length && createPortal(ModalLatest, document.body)}
    </ModalContext.Provider>
  );
};

export { ModalProvider };

export default ModalContext;
