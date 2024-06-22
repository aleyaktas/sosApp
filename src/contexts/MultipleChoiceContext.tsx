import React, {createContext, useState, FC, ReactNode} from 'react';

export const MultipleChoiceContext = createContext<{
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  toggleModal: () => void;
  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
  selectedSubject: string;
  setSelectedSubject: (value: string) => void;
  fetchCategoriesLevels: () => void;
  fetchQuestions: () => void;
  categories: any[];
  levels: any[];
  questions: any[];
  setQuestions: (value: any[]) => void;
  loading: boolean;
}>({
  isModalVisible: false,
  setIsModalVisible: () => {},
  toggleModal: () => {},
  selectedLevel: '',
  setSelectedLevel: () => {},
  selectedSubject: '',
  setSelectedSubject: () => {},
  fetchCategoriesLevels: () => {},
  fetchQuestions: () => {},
  categories: [],
  levels: [],
  questions: [],
  setQuestions: () => {},
  loading: true,
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
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);
  const [questions, setQuestions] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const shuffleArray = (array: any) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  const fetchCategoriesLevels = async () => {
    console.log('fetchCategoriesLevels');

    try {
      console.log('fetchCategoriesLevels try');
      const res = await fetch('https://phdakademi.com/api/sos/getQuizData', {
        method: 'POST',
        headers: {
          'X-Custom-Header': 'Hilal',
        },
      });
      const data = await res.json();

      console.log('data', data);
      console.log('data.kategoriler', data.kategoriler);
      console.log('data.seviyeler', data.seviyeler);

      setCategories(data.kategoriler);
      setLevels(data.seviyeler);
    } catch (err) {
      console.log('err', err);
    }
  };

  const fetchQuestions = async () => {
    console.log('selectedSubject', selectedSubject);
    console.log('selectedLevel', selectedLevel);

    const formData = new FormData();
    formData.append('kategori_id', 5);
    formData.append('konu_id', selectedSubject);
    formData.append('seviye_id', selectedLevel);

    console.log('selectedSubject', selectedSubject);
    console.log('selectedLevel', selectedLevel);

    try {
      setLoading(true);
      console.log('fetchQuestions try');
      const res = await fetch(
        'https://phdakademi.com/api/sos/questionsAllPhd',
        {
          method: 'POST',
          headers: {
            'X-Custom-Header': 'Hilal',
          },
          body: formData,
        },
      );
      const data = await res.json();

      console.log('data', data);

      const newArr = await shuffleArray(data.sorular);
      if (newArr) {
        setQuestions(newArr);
      }
      return newArr;
    } catch (err) {
      console.log('err', err);
    } finally {
      setLoading(false);
    }
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
        fetchCategoriesLevels,
        fetchQuestions,
        categories,
        levels,
        questions,
        setQuestions,
        loading,
      }}>
      {children}
    </MultipleChoiceContext.Provider>
  );
};
