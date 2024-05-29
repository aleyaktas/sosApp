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
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BubbleOne from '../assets/icons/BubbleOne.png';
import BubbleTwo from '../assets/icons/BubbleTwo.png';
import Icon from '../themes/Icon';
import Collapsible from 'react-native-collapsible';
import {QuestionContext} from '../contexts/QuestionContext';
import Carousel from 'react-native-reanimated-carousel';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  State,
  useProgress,
} from 'react-native-track-player';

export interface FourSkills {
  id: number;
  title: string;
  mainCategory?: string;
  description?: string;
  image: any;
  page: string;
}

const Listening = () => {
  const carouselRef = useRef(null);
  const answersListRef = useRef<FlatList>(null);

  const {questionText, answers, setAnswers, setQuestionText, uniteno, type} =
    useContext(QuestionContext);
  const [questionTextTitle, setQuestionTextTitle] = useState({
    title: '',
    text: '',
  });
  const [isTextVisible, setIsTextVisible] = useState(true);
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
        stopWithApp: true,
        capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
    }

    setupPlayer();

    return async () => {
      await TrackPlayer.reset();
      progress.position = 0;
      await TrackPlayer.stop();
      await TrackPlayer.seekTo(0);
      setIsPlaying(false);
    };
  }, []);

  useEffect(() => {
    setUrl(
      `https://phdakademi.com/uploads/logo/${uniteno}${
        type === 'Listening' ? 'din' : type === 'Reading' ? 'oku' : ''
      }.mp3`,
    );
    console.log('URL:', type);
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

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  const checkAnswer = (selectedOption: string, optionTitle: string) => {
    console.log('Selected option:', selectedOption);
    console.log('Correct option:', question.correct_option);

    if (currentQuestion === answers.length) {
      console.log('Questions are finished');
      return;
    }
    if (selectedOption === question.correct_option) {
      setCorrectAnswers(correctAnswers + 1);
      const updatedQuestionList = questionList.map((item, index) => {
        if (index === currentQuestion) {
          return {
            ...item,
            isCorrectAnswer: true,
            selectedOption,
            selectedOptionTitle: optionTitle,
          };
        }
        return item;
      });
      setQuestionList(updatedQuestionList);
    } else {
      setWrongAnswers(wrongAnswers + 1);
      const updatedQuestionList = questionList.map((item, index) => {
        if (index === currentQuestion) {
          return {
            ...item,
            isCorrectAnswer: false,
            selectedOption,
            selectedOptionTitle: optionTitle,
          };
        }
        return item;
      });
      setQuestionList(updatedQuestionList);
    }
    setTotalQuestions(totalQuestions + 1);
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

  const renderChoice = ({
    optionTitle,
    option,
    bgColor,
    question,
  }: {
    optionTitle: string;
    option: string;
    bgColor: string;
    question: any;
  }) => {
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

  const playTrack = async () => {
    console.log('Playing track:', url);
    await TrackPlayer.add({
      id: url,
      url,
      title: 'Track Title',
      artist: 'Track Artist',
    });
    setIsPlaying(true);
    await TrackPlayer.play();
  };

  const pauseTrack = async () => {
    setIsPlaying(false);
    await TrackPlayer.pause();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={BubbleOne} style={styles.bubbleOne} />
      <Image source={BubbleTwo} style={styles.bubbleTwo} />
      <View style={styles.contentContainer}>
        <View style={styles.statisticHeaderView}>
          <View style={styles.statisticHeader}>
            <Text style={styles.statisticText}>Sorulan: {totalQuestions}</Text>
          </View>
          <View style={styles.statisticHeader}>
            <Text style={styles.statisticText}>Doğru: {correctAnswers}</Text>
          </View>
          <View style={styles.statisticHeader}>
            <Text style={styles.statisticText}>Yanlış: {wrongAnswers}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingHorizontal: 16,
            paddingVertical: 2,
            gap: 4,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <TouchableOpacity
            onPress={isPlaying ? pauseTrack : playTrack}
            style={{
              // backgroundColor: '#FFD369',
              // padding: 8,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name={isPlaying ? 'Pause' : 'Play'}
              width={32}
              height={32}
              color="green"
            />
          </TouchableOpacity>
          <Slider
            style={{
              // width: '100%',
              flex: 1,
              height: 40,
            }}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#bbb"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
          <Text>
            {Math.floor(progress.position / 60)}:
            {Math.floor(progress.position % 60) < 10
              ? '0' + Math.floor(progress.position % 60)
              : Math.floor(progress.position % 60)}
            {' / '}
            {Math.floor(progress.duration / 60)}:
            {Math.floor(progress.duration % 60) < 10
              ? '0' + Math.floor(progress.duration % 60)
              : Math.floor(progress.duration % 60)}
          </Text>
          {/* <Button title="Pause" onPress={pauseTrack} /> */}
        </View>
        <View style={[styles.card, styles.textCard]}>
          <ScrollView
            style={{
              // flexGrow: 1,
              maxHeight: Dimensions.get('window').height / 3,
            }}>
            <View style={styles.cardContainer}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle} numberOfLines={3}>
                  {questionTextTitle.title}
                </Text>
                {/* <TouchableOpacity
                  onPress={() => handleVoice(questionText.text)}>
                  <Icon name="PlayAudio" width={30} height={30} color="green" />
                </TouchableOpacity> */}
              </View>
              <TouchableOpacity onPress={toggleTextVisibility}>
                <Text style={styles.toggleButtonText}>
                  {isTextVisible ? 'Gizle' : 'Göster'}
                </Text>
              </TouchableOpacity>
            </View>
            <Collapsible collapsed={!isTextVisible}>
              <View style={styles.collapsibleContent}>
                <Text style={styles.text}>{questionTextTitle.text}</Text>
              </View>
            </Collapsible>
          </ScrollView>
        </View>

        <View
          style={{
            flex: 1,
          }}>
          <Carousel
            ref={carouselRef}
            width={Dimensions.get('window').width - 40}
            overscrollEnabled
            data={questionList}
            style={styles.card}
            onScrollBegin={() => {}}
            renderItem={({item}) => (
              <View style={{flex: 1, padding: 16}}>
                <ScrollView
                  style={{
                    flex: 1,
                  }}
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
                    console.log('Current question:', index);
                    console.log('Question changed to:', questionList[index]);
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
    // flex: 1,
  },
  textCard: {
    padding: 16,
    borderColor: '#FFCB77',
    borderWidth: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    gap: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
  toggleButtonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  collapsibleContent: {
    paddingVertical: 8,
  },
  statisticHeaderView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    marginTop: 8,
  },
  statisticHeader: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderColor: '#FFCB77',
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
  },
  // collapsible: {
  //   flexGrow: 0,
  // },
  statisticText: {
    color: '#282828',
    fontWeight: 'bold',
  },
  questionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  itemContainer: {
    padding: 8,
    backgroundColor: '#FFCB77',
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default Listening;
