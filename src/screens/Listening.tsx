import React, {useContext, useEffect, useState} from 'react';
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
import Icon from '../themes/Icon';
import {handleVoice} from '../helpers/voiceCenter';
import Collapsible from 'react-native-collapsible';
import {QuestionContext} from '../contexts/QuestionContext';
import {showMessage} from '../utils/showMessage';
import Carousel from 'react-native-reanimated-carousel';

export interface FourSkills {
  id: number;
  title: string;
  mainCategory?: string;
  description?: string;
  image: any;
  page: string;
}

const Listening = () => {
  const {questionText, answers, setAnswers, setQuestionText} =
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

  const checkAnswer = (selectedOption: string) => {
    if (currentQuestion + 1 === answers.length) {
      showMessage('Sorular bitti', 'error');
      return;
    }
    if (selectedOption === question.correct_option) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    setTotalQuestions(totalQuestions + 1);
    setCurrentQuestion(currentQuestion + 1);
    setQuestion(questionList[currentQuestion + 1]);
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
        <ScrollView
          style={[
            styles.card,
            {
              padding: 16,
            },
          ]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle} numberOfLines={3}>
                {questionTextTitle.title}
              </Text>
              <TouchableOpacity onPress={() => handleVoice(questionText.text)}>
                <Icon name="PlayAudio" width={30} height={30} color="green" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={toggleTextVisibility}>
                <Text style={styles.toggleButtonText}>
                  {isTextVisible ? 'Gizle' : 'Göster'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Collapsible collapsed={!isTextVisible}>
            <Text style={styles.text}>{questionTextTitle.text}</Text>
          </Collapsible>
        </ScrollView>
        <Carousel
          width={Dimensions.get('window').width - 40}
          overscrollEnabled
          style={styles.card}
          data={questionList}
          renderItem={({item}) => (
            <View style={{flex: 1, padding: 16}}>
              <ScrollView
                style={{
                  flex: 1,
                }}
                contentContainerStyle={styles.answerContainer}>
                <Text style={styles.cardTitle}>{item.question}</Text>
                <TouchableOpacity
                  style={styles.choice}
                  onPress={() => checkAnswer(item.option1)}>
                  <Text style={styles.choiceText}>{item.option1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.choice}
                  onPress={() => checkAnswer(item.option2)}>
                  <Text style={styles.choiceText}>{item.option2}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.choice}
                  onPress={() => checkAnswer(item.option3)}>
                  <Text style={styles.choiceText}>{item.option3}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.choice}
                  onPress={() => checkAnswer(item.option4)}>
                  <Text style={styles.choiceText}>{item.option4}</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          onSnapToItem={index => setCurrentQuestion(index)}
        />
        <View style={styles.questionNumberContainer}>
          <FlatList
            data={answers}
            renderItem={({item, index}) => {
              return (
                <View
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
                      fontWeight: index === currentQuestion ? 'bold' : 'normal',
                    }}>
                    {index + 1}
                  </Text>
                </View>
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
    flex: 1,
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
    flex: 1,
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
  choice: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
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
