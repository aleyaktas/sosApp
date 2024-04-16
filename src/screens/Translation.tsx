import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
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
import Table from '../components/Table';
import {translationWords} from '../utils/translation';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {handleVoice} from '../helpers/voiceCenter';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../themes/Icon';
import Voice from '@react-native-voice/voice';
import CheckBox from 'react-native-check-box';

const Translation: React.FC = () => {
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const [selectedCells, setSelectedCells] = useState<string[]>(['B1']);
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

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSelect = (item: string) => {
    handleVoice(item);
    setTextInputValue(prevValue => [...prevValue, item]);
    setMeaning(prevMeaning => prevMeaning.filter(word => word !== item));
  };

  const handleSelectReverse = (item: string) => {
    setMeaning(prevMeaning => [...prevMeaning, item]);
    setTextInputValue(prevValue => prevValue.filter(word => word !== item));
  };

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

  const renderCorrectAnswer = () => (
    <View style={styles.answerContainer}>
      <View style={styles.answerHeader}>
        <Icon name="TickFilled" color="#56A500" />
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
        <Icon name="CloseFilled" color="#DE3F41" />
        <Text style={styles.incorrectAnswerText}>Üzgünüm, yanlış cevap!</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleVoice(answer)}
        style={styles.answerButtonHeader}>
        <Icon name="Sound" color="#DE3F41" width={20} height={20} />
        <Text style={styles.incorrectAnswerText}>{answer}</Text>
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

  const generateQuestion = () => {
    const randomIndexWords = Math.floor(
      Math.random() * translationWords.length,
    );

    const questions: {[key: string]: string} =
      translationWords[randomIndexWords];
    const keys = Object.keys(questions);
    const filteredKeys = keys.filter(key =>
      selectedCells.includes(key.replace('-meaning', '')),
    );

    if (filteredKeys.length === 0) {
      return Alert.alert(
        'Seçilen hücreler için bir soru bulunamadı',
        'Lütfen farklı hücreler seçiniz',
        [
          {
            text: 'Tamam',
            onPress: () => {
              setIsAnswerVisible(true);
              setSelectedCell('');
              setSentence(
                'Henüz bir soru yok, hücrelerden seçim yapıp sor tuşuna basmalısın!',
              );
              setTextInputValue([]);
              setAnswer('');
              setMeaning([]);
            },
          },
        ],
      );
    }

    const randomIndex =
      Math.floor(Math.random() * (filteredKeys.length / 2)) * 2;
    const meaningKey = filteredKeys[randomIndex];
    const sentenceKey = filteredKeys[randomIndex + 1];

    const sentence = questions[sentenceKey];
    setAnswer(questions[meaningKey]);
    const meaning = questions[meaningKey].split(' ');
    const mixSentence = shuffleArray([...meaning]);

    setSelectedCell(sentenceKey.replace('-meaning', ''));
    setSentence(sentence);
    setMeaning(mixSentence);
  };

  const contractions = {
    'is not': "isn't",
    'are not': "aren't",
    'will not': "won't",
    'has not': "hasn't",
    'have not': "haven't",
    'had not': "hadn't",
    'would not': "wouldn't",
    'could not': "couldn't",
    'should not': "shouldn't",
    'do not': "don't",
    'does not': "doesn't",
    'did not': "didn't",
    'was not': "wasn't",
    'were not': "weren't",
  };

  const replaceContractions = (text: string): string => {
    Object.entries(contractions).forEach(([key, value]) => {
      console.log('key', key);
      console.log('value', value);
      text = text.replace(new RegExp(key, 'g'), value);
    });
    return text;
  };

  const checkAnswer = () => {
    if (textInputValue.length === 0) {
      return;
    }

    let normalizedInput = textInputValue
      .join(' ')
      .toLowerCase()
      .replace(/[?.,]/g, '');
    const normalizedAnswer = answer.toLowerCase().replace(/[?.,]/g, '');
    let normalizedInputWithContractions = replaceContractions(normalizedInput);

    // i'm => i am, i'd => i had, he's => he is, they're => they are, we're => we are, you're => you are, she's => she is, it's => it is
    if (selectedCell[1] !== '4') {
      normalizedInputWithContractions = normalizedInputWithContractions.replace(
        /i'm not|he's not|they're not|we're not|you're not|she's not|it's not/g,
        match => {
          return match === "i'm not"
            ? 'i am not'
            : match === "he's not"
            ? "he isn't"
            : match === "they're not"
            ? "they aren't"
            : match === "we're not"
            ? "we aren't"
            : match === "you're not"
            ? "you aren't"
            : match === "she's not"
            ? "she isn't"
            : "it isn't";
        },
      );
      normalizedInputWithContractions = normalizedInputWithContractions.replace(
        /i'm|he's|they're|we're|you're|she's|it's/g,
        match => {
          return match === "i'm"
            ? 'i am'
            : match === "he's"
            ? 'he is'
            : match === "they're"
            ? 'they are'
            : match === "we're"
            ? 'we are'
            : match === "you're"
            ? 'you are'
            : match === "she's"
            ? 'she is'
            : 'it is';
        },
      );
    }

    //i'll not => i won't, he'll not => he won't, they'll not => they won't, we'll not => we won't, you'll not => you won't, she'll not => she won't, it'll not => it won't
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i'll not|he'll not|they'll not|we'll not|you'll not|she'll not|it'll not/g,
      match => {
        return match === "i'll not"
          ? "i won't"
          : match === "he'll not"
          ? "he won't"
          : match === "they'll not"
          ? "they won't"
          : match === "we'll not"
          ? "we won't"
          : match === "you'll not"
          ? "you won't"
          : match === "she'll not"
          ? "she won't"
          : "it won't";
      },
    );

    //he'll => he will , they'll => they will, we'll => we will, you'll => you will, she'll => she will, it'll => it will
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i'll|he'll|they'll|we'll|you'll|she'll|it'll/g,
      match => {
        return match === "i'll"
          ? 'i will'
          : match === "he'll"
          ? 'he will'
          : match === "they'll"
          ? 'they will'
          : match === "we'll"
          ? 'we will'
          : match === "you'll"
          ? 'you will'
          : match === "she'll"
          ? 'she will'
          : 'it will';
      },
    );

    if (selectedCell[1] === '4') {
      //i've not => i have not, you've not => you have not, they've not => they have not, we've not => we have not, he's not => he has not, she's not => she has not, it's not => it has not
      normalizedInputWithContractions = normalizedInputWithContractions.replace(
        /i've not|you've not|they've not|we've not|he's not|she's not|it's not/g,
        match => {
          return match === "i've not"
            ? "i haven't"
            : match === "you've not"
            ? "you haven't"
            : match === "they've not"
            ? "they haven't"
            : match === "we've not"
            ? "we haven't"
            : match === "he's not"
            ? "he hasn't"
            : match === "she's not"
            ? "she hasn't"
            : "it hasn't";
        },
      );
    }
    // i'd not => i had not, he'd not => he had not, they'd not => they had not, we'd not => we had not, you'd not => you had not, she'd not => she had not, it'd not => it had not
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i'd not|he'd not|they'd not|we'd not|you'd not|she'd not|it'd not/g,
      match => {
        return match === "i'd not"
          ? "i hadn't"
          : match === "he'd not"
          ? "he hadn't"
          : match === "they'd not"
          ? "they hadn't"
          : match === "we'd not"
          ? "we hadn't"
          : match === "you'd not"
          ? "you hadn't"
          : match === "she'd not"
          ? "she hadn't"
          : "it hadn't";
      },
    );

    // i'd => i had, he'd => he had, they'd => they had, we'd => we had, you'd => you had, she'd => she had, it'd => it had
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i'd|he'd|they'd|we'd|you'd|she'd|it'd/g,
      match => {
        return match === "i'd"
          ? 'i had'
          : match === "he'd"
          ? 'he had'
          : match === "they'd"
          ? 'they had'
          : match === "we'd"
          ? 'we had'
          : match === "you'd"
          ? 'you had'
          : match === "she'd"
          ? 'she had'
          : 'it had';
      },
    );

    normalizedInput = normalizedInput.trim();
    normalizedInputWithContractions = normalizedInputWithContractions.trim();
    console.log('normalizedInput', normalizedInput);
    console.log('normalizedAnswer', normalizedAnswer);
    console.log(
      'normalizedInputWithContractions',
      normalizedInputWithContractions,
    );

    if (
      // textInputValue.join(' ').replace('.', '').toLowerCase() ===
      // answer.toLowerCase().replace('.', '')
      normalizedAnswer === normalizedInputWithContractions
    ) {
      bottomSheetRef.current?.expand();
      handleVoice(answer);
      setIsAnswerTrue(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      bottomSheetRef.current?.expand();
      handleVoice(answer);
      setIsAnswerTrue(false);
      setWrongAnswers(wrongAnswers + 1);
    }
    setSelectedCell('');
    setTextInputValue([]);
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
        <View style={styles.headerView}>
          <View style={styles.header}>
            <Text>Sorulan: {totalQuestions}</Text>
          </View>
          <View style={styles.header}>
            <Text>Doğru: {correctAnswers}</Text>
          </View>
          <View style={styles.header}>
            <Text>Yanlış: {wrongAnswers}</Text>
          </View>
        </View>
        <Table
          selectedCells={selectedCells}
          setSelectedCells={setSelectedCells}
          selectedCell={selectedCell}
          isSymbolActive={false}
        />
        <View style={styles.askButtonContainer}>
          <TouchableOpacity
            style={styles.askButton}
            activeOpacity={0.7}
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
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => handleSelectReverse(item)}
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
            <CheckBox
              style={{
                borderRadius: 8,
                width: 'auto',
                height: 'auto',
                alignSelf: 'flex-start',
              }}
              onClick={() => {
                setIsVoiceActive(!isVoiceActive);
                textInputValue.map(item => handleSelectReverse(item));
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

            <View
              style={{
                flex: 1,
              }}>
              <DraggableFlatList
                data={meaning}
                contentContainerStyle={styles.draggableList}
                renderItem={({item, drag}) => (
                  <TouchableOpacity
                    onLongPress={drag}
                    onPress={() => handleSelect(item)}
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
        snapPoints={['30%']}>
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
    padding: 16,
  },
  bottomSheetContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    marginVertical: 28,
  },
  header: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCB77',
    color: 'white',
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
    gap: 12,
  },
  answerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  incorrectAnswerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DE3F41',
    paddingHorizontal: 4,
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
  answerButtonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
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
});

export default Translation;
