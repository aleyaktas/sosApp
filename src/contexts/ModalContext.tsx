import React, {createContext, useState, FC, ReactNode} from 'react';

export const ModalContext = createContext<{
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  toggleModal: () => void;
}>({
  isModalVisible: false,
  setIsModalVisible: () => {},
  toggleModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ModalContext.Provider
      value={{isModalVisible, setIsModalVisible, toggleModal}}>
      {children}
    </ModalContext.Provider>
  );
};
