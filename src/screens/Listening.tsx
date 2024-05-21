import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import BubbleOne from '../assets/icons/BubbleOne.png';
import BubbleTwo from '../assets/icons/BubbleTwo.png';
import Icon from '../themes/Icon';
import {handleVoice} from '../helpers/voiceCenter';
import Collapsible from 'react-native-collapsible';
import {Route, useRoute} from '@react-navigation/native';
import {QuestionContext} from '../contexts/QuestionContext';
import {showMessage} from '../utils/showMessage';

export interface FourSkills {
  id: number;
  title: string;
  mainCategory?: string;
  description?: string;
  image: any;
  page: string;
}

interface Questions {
  question: string;
  correct_option: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}
[];

type FourSkillsRoute = Route<'FourSkills', {title: string; item?: any}>;

const Listening = () => {
  const route = useRoute<FourSkillsRoute>();
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
    setTotalQuestions(answers.length);
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
        <ScrollView style={styles.card}>
          <View
            style={{
              padding: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                <Text style={styles.cardTitle}>{questionTextTitle.title}</Text>
                <TouchableOpacity
                  onPress={() => handleVoice(questionText.text)}>
                  <Icon name="PlayAudio" width={30} height={30} color="green" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={toggleTextVisibility}>
                <Text style={styles.toggleButtonText}>
                  {isTextVisible ? 'Gizle' : 'Göster'}
                </Text>
              </TouchableOpacity>
            </View>
            <Collapsible collapsed={!isTextVisible}>
              <Text style={styles.text}>{questionTextTitle.text}</Text>
            </Collapsible>
          </View>
        </ScrollView>

        <View
          style={[
            styles.card,
            {
              padding: 16,
            },
          ]}>
          <Text style={styles.cardTitle}>{question && question.question}</Text>
          <TouchableOpacity
            style={styles.choice}
            onPress={() => checkAnswer(question && question.option1)}>
            <Text style={styles.choiceText}>
              {question && question.option1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choice}
            onPress={() => checkAnswer(question && question.option2)}>
            <Text style={styles.choiceText}>
              {question && question.option2}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choice}
            onPress={() => checkAnswer(question && question.option3)}>
            <Text style={styles.choiceText}>
              {question && question.option3}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choice}
            onPress={() => checkAnswer(question && question.option4)}>
            <Text style={styles.choiceText}>
              {question && question.option4}
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>A) at 7:00 a.m.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>B) at 8:00 a.m.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>C) at 9:00 a.m.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>D) at 10:00 a.m.</Text>
          </TouchableOpacity> */}
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
    gap: 10,
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
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',
    color: '#333',
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
    marginBottom: 8,
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
    // backgroundColor: '#FFCB77',
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
});

export default Listening;
