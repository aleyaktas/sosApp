import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {QuestionContext} from '../contexts/QuestionContext';
import {RouteProp, useRoute} from '@react-navigation/native';
import Icon from '../themes/Icon';
import Voice from '@react-native-voice/voice';
import CheckBox from 'react-native-check-box';
import {handleVoice} from '../helpers/voiceCenter';
import Carousel from 'react-native-reanimated-carousel';

const {width: screenWidth} = Dimensions.get('window');

type SubCategoryRouteProp = RouteProp<
  {Writing: {title: string; item: any}},
  'Writing'
>;

interface QuestionData {
  main_question: string;
  main_answers: string[];
}

const Writing: React.FC = () => {
  const route = useRoute<SubCategoryRouteProp>();
  const {title, item} = route.params;

  const [mainQuestion, setMainQuestion] = useState<QuestionData>({
    main_question: '',
    main_answers: [],
  });
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(0);

  const {uniteno} = useContext(QuestionContext);

  useEffect(() => {
    setupVoiceListeners();
    fetchQuestionData();
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const setupVoiceListeners = () => {
    Voice.onSpeechStart = () => setIsVoiceActive(true);
    Voice.onSpeechEnd = () => setIsVoiceActive(false);
    Voice.onSpeechResults = (e: any) =>
      console.log('Speech Results:', e.value[0]);
    Voice.onSpeechError = (e: any) => console.error('Speech Error:', e);
  };

  const fetchQuestionData = () => {
    fetch(
      `https://phdakademi.com/api/sos/questionsSpeakingWriting?type=Writing&uniteno=${uniteno}`,
      {method: 'POST', headers: {'Content-Type': 'application/json'}},
    )
      .then(res => res.json())
      .then(data => {
        const currentItem = data[item.id - 1];
        setMainQuestion({
          main_question: currentItem.main_question,
          main_answers: currentItem.main_answers,
        });
      })
      .catch(err => console.error(err));
  };

  const startVoiceRecognition = async () => {
    try {
      setIsVoiceActive(true);
      await Voice.start('en_US');
    } catch (e) {
      console.error(e);
    }
  };

  const stopVoiceRecognition = async () => {
    try {
      setIsVoiceActive(false);
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const renderCarouselItem = ({item}: {item: string}) => (
    <View style={styles.carouselItem}>
      <TouchableOpacity
        style={styles.carouselTouchable}
        onPress={() => handleVoice(item)}>
        <Text style={styles.answerText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require('../assets/icons/writing_robot.png')}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.bubble}
          onPress={() => handleVoice(mainQuestion.main_question)}>
          <Text style={styles.sentence}>{mainQuestion.main_question}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={7}
          placeholder="Write your answer here..."
        />
        <TouchableOpacity
          style={[styles.micButton, !isVoiceActive && styles.disabledMic]}
          onPressIn={startVoiceRecognition}
          onPressOut={stopVoiceRecognition}
          disabled={!isVoiceActive}>
          <Icon name="Mic" color="#282828" />
        </TouchableOpacity>
      </View>

      <CheckBox
        style={styles.checkBox}
        onClick={() => setChecked(!checked)}
        isChecked={checked}
        rightText="Olası Cevapları Göster"
        rightTextStyle={styles.checkBoxText}
        checkBoxColor="green"
      />

      {checked && (
        <View style={styles.carouselContainer}>
          <Text style={styles.possibleAnswersText}>Olası Cevaplar</Text>
          <Carousel
            width={screenWidth - 32}
            height={250}
            data={mainQuestion.main_answers}
            scrollAnimationDuration={1000}
            mode="parallax"
            renderItem={renderCarouselItem}
            loop={false}
            onSnapToItem={setCurrentAnswerIndex}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
          />
          <View style={styles.pagination}>
            {mainQuestion.main_answers.map((_, index) => (
              <View
                key={index}
                style={{
                  width: 30,
                  height: 8,
                  borderRadius: 12,
                  backgroundColor:
                    index === currentAnswerIndex ? '#31B166' : '#ccc',
                }}
              />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  image: {
    width: 60,
    height: 60,
  },
  bubble: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4FEFB',
    borderRadius: 8,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  sentence: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  checkBox: {
    borderRadius: 8,
    marginTop: 8,
  },
  checkBoxText: {
    color: 'black',
  },
  inputArea: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textInput: {
    textAlignVertical: 'top',
  },
  micButton: {
    backgroundColor: '#DAFEFB',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  disabledMic: {
    opacity: 0.5,
  },
  carouselContainer: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  possibleAnswersText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31B166',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 4,
  },
  carouselTouchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});

export default Writing;
