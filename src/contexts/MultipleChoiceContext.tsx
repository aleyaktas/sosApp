import React, {createContext, useState, FC, ReactNode} from 'react';

export const MultipleChoiceContext = createContext<{
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  toggleModal: () => void;
  selectedLevels: string[];
  setSelectedLevels: (value: string[]) => void;
  selectedSubjects: string[];
  setSelectedSubjects: (value: string[]) => void;
  fetchCategoriesLevels: () => void;
  fetchQuestions: () => Promise<any>;
  categories: any[];
  levels: any[];
  questions: any[];
  setQuestions: (value: any[]) => void;
  loading: boolean;
  selectedQuestionCount: number;
  setSelectedQuestionCount: (value: number) => void;
}>({
  isModalVisible: false,
  setIsModalVisible: () => {},
  toggleModal: () => {},
  selectedLevels: [],
  setSelectedLevels: () => {},
  selectedSubjects: [],
  setSelectedSubjects: () => {},
  fetchCategoriesLevels: () => {},
  fetchQuestions: async () => {},
  categories: [],
  levels: [],
  questions: [],
  setQuestions: () => {},
  loading: false,
  selectedQuestionCount: 0,
  setSelectedQuestionCount: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const MultipleChoiceProvider: FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);
  const [questions, setQuestions] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(0);

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
    console.log('selectedSubject', selectedSubjects);
    console.log('selectedLevel', selectedLevels);

    const formData = new FormData();
    formData.append('kategori_id', '5');

    // Dizilere dönüştürün
    const subjectsArray = Array.isArray(selectedSubjects)
      ? selectedSubjects
      : [selectedSubjects];
    const levelsArray = Array.isArray(selectedLevels)
      ? selectedLevels
      : [selectedLevels];

    // selectedSubjects array'ini ekleyin
    subjectsArray.forEach((subject, index) => {
      formData.append(`konu_id[${index}]`, subject);
    });

    // selectedLevels array'ini ekleyin
    levelsArray.forEach((level, index) => {
      formData.append(`seviye_id[${index}]`, level);
    });

    console.log('formData', formData);

    try {
      setLoading(true); // Start loading indicator

      console.log('fetchQuestions try');
      const res = await fetch(
        'https://phdakademi.com/api/sos/questionsAllPhdMulti',
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

      const newArr = shuffleArray(data.sorular);
      setQuestions(newArr);

      return newArr;
    } catch (err) {
      console.log('Error fetching questions:', err);
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
        selectedLevels,
        setSelectedLevels,
        selectedSubjects,
        setSelectedSubjects,
        fetchCategoriesLevels,
        fetchQuestions,
        categories,
        levels,
        questions,
        setQuestions,
        loading,
        selectedQuestionCount,
        setSelectedQuestionCount,
      }}>
      {children}
    </MultipleChoiceContext.Provider>
  );
};
