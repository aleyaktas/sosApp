import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {QuestionContext} from '../contexts/QuestionContext';
import {Route, useRoute} from '@react-navigation/native';
import Voice from '@react-native-voice/voice';
import Icon from '../themes/Icon';
import {handleVoice} from '../helpers/voiceCenter';

type SubCategoryRoute = Route<'Speaking', {title: string; item: any}>;

const Speaking = () => {
  const route = useRoute<SubCategoryRoute>();
  const item = route.params.item;
  const {uniteno} = useContext(QuestionContext);

  const [mainQuestion, setMainQuestion] = useState({question: '', answers: []});
  const [followUpQuestions, setFollowUpQuestions] = useState<
    Array<{question: string; options: Array<string>}>
  >([]);
  const [chatHistory, setChatHistory] = useState<
    Array<{sender: string; text: string; type?: string}>
  >([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isResponseAllowed, setIsResponseAllowed] = useState(true);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = error => {
      console.log('error', error);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart', e);
  };

  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd', e);
    setIsVoiceActive(false);
  };

  const onSpeechResults = (e: any) => {
    console.log('onSpeechResults', e.value[0]);
    setUserResponse(e.value[0]);
  };

  const startRecognizing = async () => {
    setIsVoiceActive(true);
    try {
      await Voice.start('en_US');
    } catch (e) {
      console.log(e);
    }
  };

  const stopRecognizing = async () => {
    setIsVoiceActive(false);
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetch(
      `https://phdakademi.com/api/sos/questionsSpeakingWriting?type=Speaking&uniteno=${uniteno}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      },
    )
      .then(res => res.json())
      .then(data => {
        const currentItem = data[item.id - 1];
        setMainQuestion({
          question: currentItem.main_question,
          answers: currentItem.main_answers,
        });
        setFollowUpQuestions(currentItem.follow_up_questions);
        setChatHistory([
          {sender: 'system', text: currentItem.main_question, type: 'question'},
        ]);
        setCurrentQuestion(currentItem.main_question);
      })
      .catch(err => console.log(err));
  }, []);

  const addMessageWithDelay = (
    messages: Array<{sender: string; text: string; type?: string}>,
    delay: number,
  ) => {
    messages.forEach((message, index) => {
      setTimeout(() => {
        setChatHistory(prev => [...prev, message]);
        scrollViewRef.current?.scrollToEnd({animated: true});
      }, index * delay);
    });
  };

  const handleResponseSubmit = () => {
    if (!isResponseAllowed || userResponse.trim() === '') return;

    const newChat = [
      ...chatHistory,
      {sender: 'user', text: userResponse, type: 'response'},
    ];
    setChatHistory(newChat);
    scrollViewRef.current?.scrollToEnd({animated: true});
    setIsResponseAllowed(false); // Disable user input after submitting response

    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          sender: 'system',
          text: 'Possible answers are being listed...',
          type: 'info',
        },
      ]);
      scrollViewRef.current?.scrollToEnd({animated: true});
    }, 500);

    setTimeout(() => {
      if (questionIndex === 0) {
        const possibleAnswers = mainQuestion.answers.map(answer => ({
          sender: 'system',
          text: answer,
          type: 'answer',
        }));
        addMessageWithDelay(possibleAnswers, 1200);
      } else if (
        followUpQuestions[questionIndex - 1] &&
        followUpQuestions[questionIndex - 1].options
      ) {
        const possibleAnswers = followUpQuestions[
          questionIndex - 1
        ]?.options?.map(option => ({
          sender: 'system',
          text: option,
          type: 'answer',
        }));
        addMessageWithDelay(possibleAnswers, 1200);
      } else {
        addMessageWithDelay(
          [
            {sender: 'system', text: 'Thanks for your response!', type: 'info'},
            {sender: 'system', text: 'Please wait...', type: 'info'},
            {sender: 'system', text: 'Calculating your score...', type: 'info'},
            {sender: 'system', text: 'Your score is 90/100', type: 'info'},
          ],
          1200,
        );
      }

      if (questionIndex < followUpQuestions.length) {
        const nextQuestion = followUpQuestions[questionIndex].question;
        setTimeout(() => {
          setCurrentQuestion(nextQuestion);
          setChatHistory(prev => [
            ...prev,
            {sender: 'system', text: nextQuestion, type: 'question'},
          ]);
          scrollViewRef.current?.scrollToEnd({animated: true});
          setIsResponseAllowed(true); // Re-enable user input after answers are listed
        }, mainQuestion.answers.length * 1200 + 1200);
        setQuestionIndex(questionIndex + 1);
      } else {
        setCurrentQuestion('');
        setIsResponseAllowed(true); // Re-enable user input for final question
      }
    }, 1200);

    setUserResponse('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.chatContainer}
        contentContainerStyle={{
          paddingBottom: 10,
        }}>
        {chatHistory.map((message, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              justifyContent:
                message.sender === 'user' ? 'flex-end' : 'flex-start',
            }}>
            {message.sender === 'system' &&
              (message.type === 'question' || message.type === 'info') && (
                <Image
                  source={require('../assets/icons/translate_robot.png')}
                  style={{width: 60, height: 60}}
                />
              )}
            {message.sender === 'system' && message.type === 'answer' && (
              <Icon name="Bolt" width={25} height={25} color={'#FEC221'} />
            )}

            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => handleVoice(message.text)}
              style={[
                styles.chatBubble,
                message.sender === 'user'
                  ? styles.userBubble
                  : message.type === 'question' || message.type === 'info'
                  ? styles.questionBubble
                  : message.type === 'answer'
                  ? styles.answerBubble
                  : styles.systemBubble,
              ]}>
              <Text
                style={[
                  styles.chatText,
                  {
                    color: message.sender === 'user' ? 'white' : 'black',
                  },
                ]}>
                {message.text}
              </Text>
            </TouchableOpacity>
            {message.sender === 'user' && (
              <View style={styles.userProfile}>
                <Icon name="User" width={20} height={20} color={'white'} />
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {currentQuestion !== '' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your answer..."
            value={userResponse}
            onChangeText={setUserResponse}
          />

          <TouchableOpacity
            onPress={isVoiceActive ? stopRecognizing : startRecognizing}
            disabled={!isResponseAllowed}
            style={[
              styles.voiceButton,
              {
                opacity: isResponseAllowed ? 1 : 0.7,
              },
            ]}>
            <Icon
              name={isVoiceActive ? 'Mic' : 'Mic'}
              width={28}
              height={28}
              color={isVoiceActive ? 'red' : 'black'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleResponseSubmit}
            activeOpacity={0.7}
            style={[
              styles.sendButton,
              {
                opacity: isResponseAllowed ? 1 : 0.7,
              },
            ]}
            disabled={!isResponseAllowed}>
            <Icon name="Send" width={28} height={28} color={'white'} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatBubble: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#5E7AED',
    borderBottomRightRadius: 0,
  },
  systemBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  questionBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
  },
  answerBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  chatText: {
    fontSize: 16,
    color: 'white',
    padding: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  voiceButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  userProfile: {
    backgroundColor: '#5E7AED',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#5E7AED',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
});

export default Speaking;
