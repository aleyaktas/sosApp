import React, {createContext, useState, FC, ReactNode} from 'react';

interface QuestionContextType {
  uniteno: string;
  type: string;
  setType: (type: string) => void;
  setUniteno: (uniteno: string) => void;
  questionText: {title: string; text: string};
  answers: {
    id: number;
    question: string;
    correct_option: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  }[];
  fetchText: (uniteno: string, type: string) => Promise<void>;
  setQuestionText: (text: {title: string; text: string}) => void;
  setAnswers: (answers: any) => void;
  loading: boolean;
}

export const QuestionContext = createContext<QuestionContextType>({
  questionText: {title: '', text: ''},
  uniteno: '',
  type: '',
  setType: () => {},
  setUniteno: () => {},
  answers: [
    {
      id: 0,
      question: '',
      correct_option: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    },
  ],
  fetchText: async () => {},
  setQuestionText: () => {},
  setAnswers: () => {},
  loading: true,
});

interface QuestionProviderProps {
  children: ReactNode;
}

export const QuestionProvider: FC<QuestionProviderProps> = ({
  children,
}: QuestionProviderProps) => {
  const [questionText, setQuestionText] = useState({
    title: '',
    text: '',
  });
  const [answers, setAnswers] = useState([
    {
      id: 0,
      question: '',
      correct_option: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [uniteno, setUniteno] = useState('');
  const [type, setType] = useState('');

  const shuffleArray = (array: any) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  const fetchText = async (uniteno: string, type: string) => {
    const formData = new FormData();
    formData.append('uniteno', uniteno);
    try {
      const res = await fetch('https://phdakademi.com/api/sos/metinlerById', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      const findQuestions = data.filter((item: any) => item.type === type);
      setQuestionText({
        title: findQuestions[0].title,
        text: findQuestions[0].metin,
      });

      const formDataAnswers = new FormData();
      formDataAnswers.append('metin_id', findQuestions[0].id);

      try {
        const resAnswers = await fetch(
          'https://phdakademi.com/api/sos/questions',
          {
            method: 'POST',
            body: formDataAnswers,
          },
        );
        const dataAnswers = await resAnswers.json();
        const newArr = shuffleArray(dataAnswers);
        setAnswers(newArr);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        questionText,
        answers,
        setAnswers,
        setQuestionText,
        fetchText,
        loading,
        uniteno,
        type,
        setUniteno,
        setType,
      }}>
      {children}
    </QuestionContext.Provider>
  );
};
