import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {handleVoice} from '../helpers/voiceCenter';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../themes/Icon';
import Voice from '@react-native-voice/voice';
import CheckBox from 'react-native-check-box';
import {Bar} from 'react-native-progress';
import {Route, useRoute} from '@react-navigation/native';
import {RcNcTranslationSentences} from '../utils/translation';
import Blink from '../components/Blink';
import {translateActivePassive} from '../helpers/translateArray';
import {test} from '../utils/data';

export interface Translation {
  id: number;
  title: string;
  mainCategory?: string;
  description?: string;
  image: any;
  page: string;
}
type TranslationRoute = Route<'Translation', {title: string; item?: any}>;

const RcNcTranslation: React.FC = () => {
  const route = useRoute<TranslationRoute>();

  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const [selectedCells, setSelectedCells] = useState<string[]>(['RC', 'NC']);
  const [selectedCell, setSelectedCell] = useState<string>('');
  const [sentence, setSentence] = useState<string>(
    'Henüz bir soru yok, hücrelerden seçim yapıp sor tuşuna basmalısın!',
  );
  const [answer, setAnswer] = useState<string>('');
  const [meaning, setMeaning] = useState<string[]>([]);
  const [textInputValue, setTextInputValue] = useState<string[]>([]);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isAnswerTrue, setIsAnswerTrue] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [snapPoints, setSnapPoints] = useState(['30%']);
  const [translationSentences, setTranslationSentences] = useState<any>({});
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [remainingQuestionCount, setRemainingQuestionCount] =
    useState<number>(0);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSelect = (item: string, index: number) => {
    handleVoice(item);
    setTextInputValue(prevValue => [...prevValue, item]);
    setMeaning(prevMeaning => prevMeaning.filter((word, idx) => idx !== index));
  };

  const handleSelectReverse = (item: string, index: number) => {
    setMeaning(prevMeaning => [...prevMeaning, item]);
    setTextInputValue(prevValue =>
      prevValue.filter((word, idx) => idx !== index),
    );
  };

  useEffect(() => {
    console.log('data', translateActivePassive(test));
  }, []);

  const continueButton = () => {
    setSentence('Yeni soru için sor butonuna basınız!');
    setTextInputValue([]);
    setAnswer('');
    setMeaning([]);
    handleAskButton();
    bottomSheetRef.current?.close();
  };

  const [started, setStarted] = useState('');
  const [ended, setEnded] = useState('');
  const [results, setResults] = useState<string[]>([]);

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
    setStarted('√');
  };

  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd', e);
    setEnded('√');
  };

  const onSpeechResults = (e: any) => {
    console.log('onSpeechResults', e.value[0]);
    setResults(e.value);
    setTextInputValue(e.value[0].split(' '));
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('en_US');
      setStarted('');
      setEnded('');
      setResults([]);
    } catch (e) {
      console.log(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
      setStarted('');
      setEnded('');
      setResults([]);
    } catch (e) {
      console.error(e);
    }
  };

  const ChartComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginTop: 16,
        }}>
        <Bar
          progress={totalQuestions !== 0 ? correctAnswers / totalQuestions : 0}
          color={'#56A500'}
          unfilledColor={wrongAnswers !== 0 ? '#DE3F41' : '#E1D9DC'}
          borderWidth={0}
          width={Dimensions.get('window').width - 80}
          style={{
            borderRadius: 8,
          }}
        />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {correctAnswers}/{totalQuestions}
        </Text>
      </View>
    );
  };

  const renderCorrectAnswer = () => (
    <View style={styles.answerContainer}>
      <View style={styles.answerHeader}>
        <Icon name="TickFilled" color="#56A500" width={20} height={20} />
        <Text style={styles.correctAnswerText}>Tebrikler, doğru cevap!</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleVoice(answer)}
        style={styles.answerButtonHeader}>
        <Icon name="Sound" color="#56A500" width={20} height={20} />
        <Text style={styles.correctAnswerText}>{answer}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => continueButton()}
        style={[styles.answerButton, styles.correctButton]}>
        <Text style={styles.answerButtonText}>DEVAM ET</Text>
      </TouchableOpacity>
    </View>
  );

  const renderIncorrectAnswer = () => (
    <View style={styles.answerContainer}>
      <View style={styles.answerHeader}>
        <Icon name="CloseFilled" color="#DE3F41" width={24} height={24} />
        <Text style={styles.incorrectAnswerText}>Üzgünüm, yanlış cevap!</Text>
      </View>
      <View style={styles.answerHeader}>
        <Icon name="RightArrow" color="#DE3F41" width={20} height={20} />
        <Text style={styles.incorrectAnswerText}>
          {textInputValue.join(' ')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleVoice(answer)}
        style={styles.answerButtonHeader}>
        <Icon name="Sound" color="#56A500" width={20} height={20} />
        <Text style={styles.correctAnswerText}>{answer}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => continueButton()}
        style={[styles.incorrectButton, styles.answerButton]}>
        <Text style={styles.answerButtonText}>TAMAM</Text>
      </TouchableOpacity>
    </View>
  );

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  type SymbolKeys = 'RC' | 'NC';
  const generateQuestion = () => {
    const randomIndexForSymbols = Math.floor(
      Math.random() * selectedCells.length,
    );

    const newSelectedSymbol = selectedCells[
      randomIndexForSymbols
    ] as SymbolKeys;
    setSelectedCell(newSelectedSymbol);

    let newTranslationSentences = RcNcTranslationSentences[newSelectedSymbol];
    setTranslationSentences(newTranslationSentences);

    if (!newTranslationSentences) {
      setSentence('Çeviri cümlesi bulunamadı, hücre seçimi yapmalısın!');
      return Alert.alert(
        `Çeviri cümlesi bulunamadı!`,
        'Lütfen hücre seçiniz.',
        [
          {
            text: 'OK',
            onPress: () => {
              setIsAnswerVisible(true);
              return;
            },
          },
        ],
      );
    }

    const randomIndexSentences = Math.floor(
      Math.random() * newTranslationSentences.length,
    );

    const newSelectedSentence = newTranslationSentences[randomIndexSentences];

    setSentence(newSelectedSentence.tr);

    setAnswer(newSelectedSentence.ing);

    const meaning = newSelectedSentence.ing.split(' ');

    const mixSentence = shuffleArray([...meaning]);

    setMeaning(mixSentence);

    setQuestionIndex(randomIndexSentences);

    setRemainingQuestionCount(newTranslationSentences.length);
  };

  const checkAnswer = () => {
    if (textInputValue.length === 0) {
      return;
    }

    if (textInputValue.join(' ') === answer) {
      setSnapPoints(['32%']);
      bottomSheetRef.current?.expand();
      handleVoice(answer);
      setIsAnswerTrue(true);
      setCorrectAnswers(correctAnswers + 1);

      const translationSentences =
        RcNcTranslationSentences[selectedCell as SymbolKeys];
      translationSentences.splice(questionIndex, 1);
      setTranslationSentences(translationSentences);
      setRemainingQuestionCount(translationSentences.length);
    } else {
      setSnapPoints(['38%']);
      bottomSheetRef.current?.expand();
      handleVoice(answer);
      setIsAnswerTrue(false);
      setWrongAnswers(wrongAnswers + 1);
    }

    setSelectedCell('');
  };

  const handleAskButton = () => {
    if (selectedCells.length === 0) {
      setIsAnswerVisible(true);
      return Alert.alert('Lütfen bir hücre seçiniz');
    }
    isAnswerVisible && generateQuestion();
    isAnswerVisible && setTotalQuestions(totalQuestions + 1);
    !isAnswerVisible && setSelectedCell('');
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.chartContainer}>
          <ChartComponent />
          <View style={styles.statisticHeaderView}>
            <View style={styles.statisticHeader}>
              <Text style={styles.statisticText}>
                Sorulan: {totalQuestions}
              </Text>
            </View>
            <View style={styles.statisticHeader}>
              <Text style={styles.statisticText}>Doğru: {correctAnswers}</Text>
            </View>
            <View style={styles.statisticHeader}>
              <Text style={styles.statisticText}>Yanlış: {wrongAnswers}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,

            paddingHorizontal: 16,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setSelectedCells(prev => {
                if (prev.includes('RC')) {
                  return prev.filter(item => item !== 'RC');
                }
                return [...prev, 'RC'];
              });
            }}
            style={[
              styles.choiceCard,
              {
                borderColor: selectedCells.includes('RC') ? '#2CC2DB' : '#fff',
              },
              !selectedCells.includes('RC') && styles.shadow,
            ]}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              Relative Clause
            </Text>
            {selectedCells.includes('RC') && selectedCell === 'RC' ? (
              <Blink
                duration={500}
                style={{
                  position: 'absolute',
                  right: -10,
                  top: -10,
                }}>
                <View style={[styles.tickIconContainer]}>
                  <Icon name="Tick" color="#fff" width={24} height={24} />
                </View>
              </Blink>
            ) : selectedCells.includes('RC') ? (
              <View
                style={[
                  styles.tickIconContainer,
                  {
                    position: 'absolute',
                    right: -10,
                    top: -10,
                  },
                ]}>
                <Icon name="Tick" color="#fff" width={24} height={24} />
              </View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setSelectedCells(prev => {
                if (prev.includes('NC')) {
                  return prev.filter(item => item !== 'NC');
                }
                return [...prev, 'NC'];
              });
            }}
            style={[
              styles.choiceCard,
              {
                borderColor: selectedCells.includes('NC') ? '#2CC2DB' : '#fff',
              },
              !selectedCells.includes('NC') && styles.shadow,
            ]}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              Noun Clause
            </Text>
            {selectedCells.includes('NC') && selectedCell === 'NC' ? (
              <Blink
                duration={500}
                style={{
                  position: 'absolute',
                  right: -10,
                  top: -10,
                }}>
                <View style={[styles.tickIconContainer]}>
                  <Icon name="Tick" color="#fff" width={24} height={24} />
                </View>
              </Blink>
            ) : selectedCells.includes('NC') ? (
              <View
                style={[
                  styles.tickIconContainer,
                  {
                    position: 'absolute',
                    right: -10,
                    top: -10,
                  },
                ]}>
                <Icon name="Tick" color="#fff" width={24} height={24} />
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.askButtonContainer}>
          <TouchableOpacity
            style={styles.askButton}
            activeOpacity={0.7}
            disabled={selectedCell === '' && !isAnswerVisible}
            // disabled={textInputValue.length !== 0 && !isAnswerVisible}
            onPress={() => {
              {
                isAnswerVisible ? handleAskButton() : checkAnswer();
              }
            }}>
            <Text
              style={[
                styles.askButtonText,
                {
                  opacity:
                    textInputValue.length === 0 && !isAnswerVisible ? 0.5 : 1,
                },
              ]}>
              {isAnswerVisible ? 'Sor' : 'Cevapla'}
            </Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={require('../assets/icons/translate_robot.png')}
              style={styles.image}
            />
            <View style={styles.bubble}>
              <Text style={styles.sentence}>{sentence}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              gap: 10,
            }}>
            <View
              style={[
                styles.inputArea,
                started ? styles.voiceInputArea : styles.inputArea,
              ]}>
              {isVoiceActive ? (
                <TextInput
                  style={{
                    fontSize: 16,
                    color: 'black',
                  }}
                  value={textInputValue.join(' ')}
                  onChangeText={text => setTextInputValue([text])}
                />
              ) : (
                <FlatList
                  data={textInputValue}
                  contentContainerStyle={styles.inputValues}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => handleSelectReverse(item, index)}
                      style={styles.inputButton}>
                      <Text style={styles.inputText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => `meaning-${index}`}
                />
              )}
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 10,
                  bottom: 10,
                  opacity: isVoiceActive ? 1 : 0.5,
                }}
                disabled={!isVoiceActive}
                onPressIn={() => {
                  startRecognizing();
                }}
                onPressOut={() => {
                  stopRecognizing();
                }}>
                <Icon name="Mic" color="#282828" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <CheckBox
                style={{
                  borderRadius: 8,
                  width: 'auto',
                  height: 'auto',
                  alignSelf: 'flex-start',
                }}
                onClick={() => {
                  setIsVoiceActive(!isVoiceActive);
                  textInputValue.map((item, index) =>
                    handleSelectReverse(item, index),
                  );
                  setTextInputValue([]);
                }}
                isChecked={isVoiceActive}
                rightText="Sesli yanıtla"
                rightTextStyle={{
                  flex: 0,
                  marginLeft: 2,
                  color: 'black',
                }}
                checkBoxColor="green"
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Kalan Soru: {remainingQuestionCount}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                marginBottom: 20,
              }}>
              <DraggableFlatList
                data={meaning}
                contentContainerStyle={styles.draggableList}
                renderItem={({item, getIndex, drag}) => (
                  <TouchableOpacity
                    onLongPress={drag}
                    onPress={() => handleSelect(item, getIndex() || 0)} // Use a default value of 0 if getIndex() returns undefined
                    disabled={isVoiceActive}
                    style={styles.draggableItem}>
                    <Text style={styles.draggableText}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => `draggable-item-${index}`}
                onDragEnd={({data}) => console.log('data', data)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={isBottomSheetVisible ? 0 : -1}
        snapPoints={snapPoints}>
        <BottomSheetView
          style={[
            styles.bottomSheetContainer,
            {
              backgroundColor: isAnswerTrue ? '#C8EFAE' : '#F8D9DC',
              opacity: 0.9,
            },
          ]}>
          {isAnswerTrue ? renderCorrectAnswer() : renderIncorrectAnswer()}
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    // paddingHorizontal: 16,
  },
  bottomSheetContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  statisticHeaderView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    marginBottom: 28,
    marginTop: 16,
    paddingHorizontal: 16,
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
  voiceInputArea: {
    borderColor: 'green',
    borderWidth: 2,
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputArea: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    minHeight: 100,
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  inputValues: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  inputButton: {
    backgroundColor: '#227C9D',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 2,
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  sentence: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  askButtonContainer: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  askButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE6D73',
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 10,
  },
  askButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 16,
  },
  bubble: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginLeft: 10,
    maxWidth: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  correctAnswerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#56A500',
  },
  answerContainer: {
    flex: 1,
    padding: 20,
    gap: 6,
  },
  incorrectAnswerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DE3F41',
  },
  possibleAnswerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c9aa8',
  },
  answerText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#DE3F41',
  },
  answerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    bottom: 0,
    marginTop: 'auto',
  },
  incorrectButton: {
    backgroundColor: '#FF4B4C',
  },
  correctButton: {
    backgroundColor: '#57CC06',
  },
  answerButtonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  answerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  answerButtonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingRight: 8,
  },
  draggableList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  draggableItem: {
    backgroundColor: '#227C9D',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  draggableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  statisticText: {
    color: '#282828',
    fontWeight: 'bold',
  },
  choiceCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
    height: 80,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tickIconContainer: {
    backgroundColor: '#2CC2DB',
    borderRadius: 12,
    borderColor: '#2CC2DB',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default RcNcTranslation;
