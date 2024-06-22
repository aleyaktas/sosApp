import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MultipleChoiceContext} from '../contexts/MultipleChoiceContext';
import Statistics from '../components/Statistics';
import BubbleOne from '../assets/icons/BubbleOne.png';
import BubbleTwo from '../assets/icons/BubbleTwo.png';
import MultipleChoiceModal from '../components/MultipleChoiceModal';
import Carousel from 'react-native-reanimated-carousel';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../navigation/types';
import {showMessage} from '../utils/showMessage';

interface QuestionItem {
  id: number;
  kategori_id: number;
  konu_id: number;
  seviye_id: number;
  soru_metni: string;
  soru: string;
  a_secenegi: string;
  b_secenegi: string;
  c_secenegi: string;
  d_secenegi: string;
  e_secenegi: string;
  dogru_secenek: string;
  selectedOption?: string;
  selectedOptionTitle?: string;
  isCorrectAnswer?: boolean;
}

const MultipleChoice = () => {
  const answersListRef = useRef<FlatList>(null);
  const navigation = useNavigation<ScreenProp>();
  const {
    questions,
    setQuestions,
    fetchQuestions,
    loading,
    selectedLevel,
    selectedSubject,
  } = useContext(MultipleChoiceContext);
  const [questionList, setQuestionList] = useState<QuestionItem[]>([]);
  const [question, setQuestion] = useState<QuestionItem>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    return () => {
      setQuestionList([]);
      setQuestions([]);
    };
  }, []);

  const carouselRef = useRef(null);

  const onSnapToItem = (index: number) => {
    // setActiveIndex(index);
    console.log('Index123', index);
    setCurrentQuestion(index);
    setQuestion(questionList[index]);
    if (index === questionList.length - 1) {
      loadMoreQuestions();
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        if (modalVisible) {
          setModalVisible(false);
          navigation.goBack(); // Sayfadan çık
          return true; // Geri tuşunu burada durdurun
        }
        return false; // Geri tuşunun normal işlevine devam etmesine izin verin
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, [modalVisible]),
  );

  useEffect(() => {
    console.log('Current Question', currentQuestion);
    console.log('Question', question);
    setQuestion(questionList[currentQuestion]);
  }, [currentQuestion, question]);

  useEffect(() => {
    if (questions.length === 0) {
      return;
    }
    //get 10 item from questions
    let newQuestions = questions.slice(0, 10);
    setQuestionList(newQuestions);

    setQuestion(questions[0]);
  }, [questions]);

  const loadMoreQuestions = () => {
    let newQuestions = questions.slice(
      questionList.length,
      questionList.length + 10,
    );
    setQuestionList([...questionList, ...newQuestions]);
  };

  useEffect(() => {
    if (questionList.length === 0) {
      return;
    }
    const timer = setTimeout(() => {
      if (answersListRef.current && questions.length > 0) {
        answersListRef.current.scrollToIndex({
          index: currentQuestion,
          animated: true,
        });
      }
      // setQuestion(questionList[currentQuestion]);
    }, 5);
    return () => clearTimeout(timer);
  }, [currentQuestion, questionList]);

  const renderChoice = ({optionTitle, option, bgColor, question}: any) => {
    const isSelected = question.selectedOptionTitle === optionTitle;
    const optionNumber =
      optionTitle === 'A'
        ? '1'
        : optionTitle === 'B'
        ? '2'
        : optionTitle === 'C'
        ? '3'
        : optionTitle === 'D'
        ? '4'
        : '5';
    const isCorrect = question.dogru_secenek === optionNumber;
    const bgColorStyle = isSelected
      ? isCorrect
        ? '#98D832'
        : '#FF4D4F'
      : optionTitle === question.dogru_secenek
      ? '#98D832'
      : '#F5F5F5';

    return (
      <TouchableOpacity
        key={optionTitle}
        disabled={
          question.selectedOptionTitle && question.selectedOptionTitle !== ''
        }
        style={[
          styles.choice,
          {
            backgroundColor: bgColorStyle,
          },
        ]}
        onPress={() => checkAnswer(option, optionTitle)}>
        <View
          style={[
            styles.choiceOption,
            {
              backgroundColor: bgColor,
            },
          ]}>
          <Text style={styles.choiceOptionText}>{optionTitle}</Text>
        </View>
        <Text style={styles.choiceText}>{option}</Text>
      </TouchableOpacity>
    );
  };

  const checkAnswer = (selectedOption: string, optionTitle: string) => {
    if (currentQuestion >= questions.length) {
      return;
    }

    const optionNumber =
      optionTitle === 'A'
        ? '1'
        : optionTitle === 'B'
        ? '2'
        : optionTitle === 'C'
        ? '3'
        : optionTitle === 'D'
        ? '4'
        : '5';

    const isCorrect = question?.dogru_secenek === optionNumber;

    const updatedQuestionList = questionList.map((item, index) => {
      if (index === currentQuestion) {
        return {
          ...item,
          isCorrectAnswer: isCorrect,
          selectedOption,
          selectedOptionTitle: optionTitle,
        };
      }
      return item;
    });

    setQuestionList(updatedQuestionList);

    if (isCorrect) {
      console.log('Correct Answer');
      setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
    } else {
      console.log('Wrong Answer');
      setWrongAnswers(prevWrongAnswers => prevWrongAnswers + 1);
    }
    setTotalQuestions(prevTotalQuestions => prevTotalQuestions + 1);

    // setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {modalVisible ? (
        <MultipleChoiceModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          showQuestionsPress={async () => {
            const res = await fetchQuestions();
            console.log('res1111', res);
            console.log('selectedLevel', selectedLevel);
            console.log('selectedSubject', selectedSubject);
            console.log('questions', questions);
            if (loading) {
              setModalVisible(true);
            } else {
              if (res?.length === 0) {
                showMessage('Sorular bulunamadı', 'error');
                Alert.alert(
                  'Hata',
                  'Seçtiğiniz kategori ve seviyeye ait soru bulunamadı',
                  [
                    {
                      text: 'Tamam',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ],
                );
                return;
              }
              setModalVisible(false);
            }
          }}
        />
      ) : (
        <>
          <Image source={BubbleOne} style={styles.bubbleOne} />
          <Image source={BubbleTwo} style={styles.bubbleTwo} />
          <View style={styles.contentContainer}>
            <Statistics
              totalQuestions={totalQuestions}
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
            />

            <Carousel
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                paddingVertical: 8,
                paddingHorizontal: 16,
                flex: 1,
              }}
              ref={carouselRef}
              onSnapToItem={onSnapToItem}
              vertical={false}
              width={Dimensions.get('window').width - 40}
              data={questionList}
              renderItem={({item}) => {
                return (
                  <View style={styles.choiceContainer}>
                    <View style={(styles.answerContainer, styles.flex)}>
                      <Text style={styles.cardTitle}>{item.soru}</Text>
                      <Text style={styles.cardText}>{item.soru_metni}</Text>
                      {renderChoice({
                        optionTitle: 'A',
                        option: item.a_secenegi,
                        bgColor: '#FACA77',
                        question: item,
                      })}
                      {renderChoice({
                        optionTitle: 'B',
                        option: item.b_secenegi,
                        bgColor: '#13E0E6',
                        question: item,
                      })}
                      {renderChoice({
                        optionTitle: 'C',
                        option: item.c_secenegi,
                        bgColor: '#D274DB',
                        question: item,
                      })}
                      {renderChoice({
                        optionTitle: 'D',
                        option: item.d_secenegi,
                        bgColor: '#98D832',
                        question: item,
                      })}
                      {renderChoice({
                        optionTitle: 'E',
                        option: item.e_secenegi,
                        bgColor: '#EF4D4F',
                        question: item,
                      })}
                    </View>
                  </View>
                );
              }}
            />

            <View style={styles.questionNumberContainer}>
              <FlatList
                ref={answersListRef}
                data={questionList}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    key={item.id.toString()}
                    disabled
                    // onPress={() => {
                    //   setCurrentQuestion(index);
                    //   setQuestion(questionList[index]);
                    // }}
                    style={{
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      borderRadius: 8,
                      backgroundColor:
                        index === currentQuestion ? '#FFCB77' : 'white',
                    }}>
                    <Text
                      style={{
                        color: index === currentQuestion ? '#282828' : '#333',
                        fontWeight:
                          index === currentQuestion ? 'bold' : 'normal',
                      }}>
                      {index + 1}
                    </Text>
                  </TouchableOpacity>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.questionNumberList}
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    position: 'relative',
    flexShrink: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  bubbleOne: {
    position: 'absolute',
    top: -70,
    left: -60,
    width: 150,
    height: 170,
  },
  bubbleTwo: {
    position: 'absolute',
    bottom: -40,
    right: -40,
    transform: [{rotate: '180deg'}],
    width: 150,
    height: 150,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333',
    marginBottom: 8,
    fontSize: 16,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 8,
  },
  answerContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  choiceOption: {
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceOptionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  choice: {
    backgroundColor: '#F5F5F5',
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  choiceText: {
    fontSize: 16,
    color: '#333',
  },
  questionNumberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  questionNumberList: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    gap: 16,
  },
  flex: {
    flex: 1,
  },
  choiceContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    padding: 16,
  },
});

export default MultipleChoice;
