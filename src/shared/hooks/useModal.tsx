import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

const ModalContext = createContext((_: ReactNode) => {});

export const ModalProvider = (props: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode>(undefined);
  const resetModal = useCallback(() => {
    setModal(undefined);
  }, [setModal]);
  return (
    <ModalContext.Provider value={setModal as (modal: ReactNode) => {}}>
      {props.children}
      {!!modal && (
        <div
          className="bg-opacity-75 fixed top-0 left-0 z-50 h-[calc(100vh-4rem)] w-screen cursor-pointer overflow-hidden bg-white p-8 backdrop-blur-sm backdrop-filter md:mt-16 dark:bg-black"
          onClick={resetModal}
        >
          {modal}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}
