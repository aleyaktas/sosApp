import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BubbleOne from '../assets/icons/BubbleOne.png';
import BubbleTwo from '../assets/icons/BubbleTwo.png';
import {QuestionContext} from '../contexts/QuestionContext';
import Carousel from 'react-native-reanimated-carousel';
import TrackPlayer, {Capability, useProgress} from 'react-native-track-player';
import MediaPlayer from '../components/MediaPlayer';
import QuestionText from '../components/QuestionText';
import Statistics from '../components/Statistics';
import {Choice} from '../types/Choice';

const Listening = () => {
  const carouselRef = useRef(null);
  const answersListRef = useRef<FlatList>(null);

  const {questionText, answers, setAnswers, setQuestionText, uniteno, type} =
    useContext(QuestionContext);
  const [questionTextTitle, setQuestionTextTitle] = useState({
    title: '',
    text: '',
  });
  const [questionList, setQuestionList] = useState(answers);
  const [question, setQuestion] = useState(answers[0]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function setupPlayer() {
      await TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
    }

    setupPlayer();

    return () => {
      (async () => {
        await TrackPlayer.reset();
        progress.position = 0;
        await TrackPlayer.stop();
        await TrackPlayer.seekTo(0);
        setIsPlaying(false);
      })();
    };
  }, []);

  useEffect(() => {
    setUrl(
      `https://phdakademi.com/uploads/logo/${uniteno}${
        type === 'Listening' ? 'din' : type === 'Reading' ? 'oku' : ''
      }.mp3`,
    );
  }, [uniteno, type]);

  useEffect(() => {
    return () => {
      setAnswers([]);
      setQuestionText({title: '', text: ''});
    };
  }, []);

  useEffect(() => {
    setQuestionTextTitle(questionText);
    setQuestionList(answers);
    setQuestion(answers[0]);
  }, [answers, questionText]);

  const checkAnswer = (selectedOption: string, optionTitle: string) => {
    if (currentQuestion === answers.length) {
      return;
    }

    const isCorrect = selectedOption === question.correct_option;
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

    setTotalQuestions(prevTotalQuestions => prevTotalQuestions + 1);

    if (isCorrect) {
      setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
    } else {
      setWrongAnswers(prevWrongAnswers => prevWrongAnswers + 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      (carouselRef.current as any).scrollTo({
        index: currentQuestion,
        animated: true,
      });
    }
    setQuestion(questionList[currentQuestion]);
  }, [currentQuestion]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (answersListRef.current && answers.length > 0) {
        answersListRef.current.scrollToIndex({
          index: currentQuestion,
          animated: true,
        });
      }
      setQuestion(questionList[currentQuestion]);
    }, 10);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  useEffect(() => {
    if (!Number.isNaN((carouselRef.current as any).getCurrentIndex())) {
      setCurrentQuestion((carouselRef.current as any).getCurrentIndex());
      setQuestion(questionList[(carouselRef.current as any).getCurrentIndex()]);
    }
  }, [carouselRef.current]);

  const renderChoice = (choice: Choice) => {
    const {optionTitle, option, bgColor, question} = choice;
    return (
      <TouchableOpacity
        disabled={
          question.selectedOptionTitle && question.selectedOptionTitle !== ''
        }
        style={[
          styles.choice,
          {
            backgroundColor:
              question.selectedOptionTitle === optionTitle &&
              question.selectedOption === question.correct_option
                ? '#98D832'
                : question.selectedOptionTitle === optionTitle &&
                  question.selectedOption !== question.correct_option
                ? '#FF4D4F'
                : question.selectedOptionTitle !== optionTitle &&
                  question.selectedOption &&
                  option === question.correct_option
                ? '#98D832'
                : '#F5F5F5',
          },
        ]}
        onPress={() => {
          checkAnswer(option, optionTitle);
        }}>
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

  const progress = useProgress();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={BubbleOne} style={styles.bubbleOne} />
      <Image source={BubbleTwo} style={styles.bubbleTwo} />
      <View style={styles.contentContainer}>
        <Statistics
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
        />
        <MediaPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          url={url}
          progress={progress}
        />
        <QuestionText
          title={questionTextTitle.title}
          text={questionTextTitle.text}
          type={type}
        />
        <View style={styles.flex}>
          <Carousel
            ref={carouselRef}
            width={Dimensions.get('window').width - 40}
            overscrollEnabled
            data={questionList}
            style={styles.card}
            onScrollBegin={() => {}}
            renderItem={({item}) => (
              <View style={styles.choiceContainer}>
                <ScrollView
                  style={styles.flex}
                  contentContainerStyle={styles.answerContainer}>
                  <Text style={styles.cardTitle}>{item.question}</Text>
                  {renderChoice({
                    optionTitle: 'A',
                    option: item.option1,
                    bgColor: '#FACA77',
                    question: item,
                  })}
                  {renderChoice({
                    optionTitle: 'B',
                    option: item.option2,
                    bgColor: '#13E0E6',
                    question: item,
                  })}
                  {renderChoice({
                    optionTitle: 'C',
                    option: item.option3,
                    bgColor: '#D274DB',
                    question: item,
                  })}
                  {renderChoice({
                    optionTitle: 'D',
                    option: item.option4,
                    bgColor: '#98D832',
                    question: item,
                  })}
                </ScrollView>
              </View>
            )}
            onSnapToItem={index => setCurrentQuestion(index)}
          />
        </View>
        <View style={styles.questionNumberContainer}>
          <FlatList
            ref={answersListRef}
            data={answers}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                    borderRadius: 8,
                    backgroundColor:
                      index === currentQuestion ? '#FFCB77' : 'white',
                  }}
                  onPress={() => {
                    setCurrentQuestion(index);
                    setQuestion(questionList[index]);
                  }}>
                  <Text
                    style={{
                      color: index === currentQuestion ? '#282828' : '#333',
                      fontWeight: index === currentQuestion ? 'bold' : 'normal',
                    }}>
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.questionNumberList}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 20,
    position: 'relative',
    flexShrink: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 12,
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
    flex: 1,
  },
  answerContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  choiceContainer: {flex: 1, padding: 16},
});

export default Listening;
