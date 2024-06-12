import React, {createContext, useState, FC, ReactNode} from 'react';

export const MultipleChoiceContext = createContext<{
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  toggleModal: () => void;
  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
  selectedSubject: string;
  setSelectedSubject: (value: string) => void;
}>({
  isModalVisible: false,
  setIsModalVisible: () => {},
  toggleModal: () => {},
  selectedLevel: '',
  setSelectedLevel: () => {},
  selectedSubject: '',
  setSelectedSubject: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const MultipleChoiceProvider: FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <MultipleChoiceContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        toggleModal,
        selectedLevel,
        setSelectedLevel,
        selectedSubject,
        setSelectedSubject,
      }}>
      {children}
    </MultipleChoiceContext.Provider>
  );
};
