import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import verbs from '../utils/verbs.json';
import {useEffect, useState} from 'react';
import {IVerb} from '../types/IVerb';
import Voice from '@react-native-voice/voice';
import {showMessage} from '../utils/showMessage';
import Toast from '../components/Toast';
import Icon from '../themes/Icon';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {handleVoice} from '../helpers/voiceCenter';
import IVerbsModal from '../components/IVerbsModal';
import {ttsSettings} from '../utils/ttsSettings';
import {Route, useRoute} from '@react-navigation/native';
import TestTable from '../components/TestTable';
import {checkAbbreviation} from '../utils/modalsabbreviation';
import ChartComponent from './Translation/components/ChartComponent';
import ModalsSosCellSelectComponent from './Translation/components/ModalsSosCellSelect';
import TextLabel from '../components/TextLabel';

export interface SosTable {
  id: number;
  title: string;
  mainCategory?: string;
  description?: string;
  image: any;
  page: string;
}
type SosTableRoute = Route<'Sos', {title: string; item?: any}>;

const ModalsSosTable = () => {
  const route = useRoute<SosTableRoute>();
  const symbols = route.params.item.selectedSymbols || ['+', '-', '?'];

  const [inputText, setInputText] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState<string>('');
  const [entry, setEntry] = useState<IVerb>({
    presentPlural: '',
    turkishMean: '',
  });
  const [selectedSubject, setSelectedSubject] = useState('Are');
  const [question, setQuestion] = useState('you ready?');
  const [isSubjectSingle, setIsSubjectSingle] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedCells, setSelectedCells] = useState(['Can']);
  const [selectedCell, setSelectedCell] = useState('');
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>(symbols);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [time, setTime] = useState(15);

  const subjects = ['I', 'you', 'he', 'she', 'it', 'we', 'they'];

  const getRandomItem = (array: any) => {
    const length = array.length;
    const randomIndex = Math.floor(Math.random() * length);
    return array[randomIndex];
  };

  useEffect(() => {
    ttsSettings();
  }, []);

  const generateQuestion = () => {
    let entry: IVerb;
    setInputText('');
    const subject = getRandomItem(subjects);
    const symbol = getRandomItem(selectedSymbols);
    const selectedCell = getRandomItem(selectedCells);
    setSelectedSubject(subject);
    setIsSubjectSingle(
      subject === 'he' || subject === 'she' || subject === 'it',
    );
    setSelectedSymbol(symbol);
    setSelectedCell(selectedCell);

    entry = getRandomItem(verbs);
    setEntry(entry);

    if (isSubjectSingle) {
      const answer = generateAnswer(
        selectedCell,
        entry,
        symbol,
        subject,
        subject === 'he' || subject === 'she' || subject === 'it',
      );
      setAnswer(answer);
      setQuestion(`${entry.presentPlural}`);
    } else {
      const answer = generateAnswer(
        selectedCell,
        entry,
        symbol,
        subject,
        subject === 'he' || subject === 'she' || subject === 'it',
      );
      setAnswer(answer);
      setQuestion(`${entry.presentPlural}`);
    }
  };

  const generateAnswer = (
    option: string,
    selectedEntry: IVerb,
    state: string,
    subject: string,
    isSingle: boolean,
  ) => {
    if (state === '?') {
      if (option === 'Ought To') {
        return `Ought ${subject} to ${selectedEntry.presentPlural}?`;
      } else if (option === 'Had Better') {
        return `Had ${subject} better ${selectedEntry.presentPlural}?`;
      } else if (option === 'Be Likely') {
        return `${
          subject === 'I'
            ? 'Am I likely to'
            : isSingle
            ? `Is ${subject} likely to`
            : `Are ${subject} likely to`
        } ${selectedEntry.presentPlural}?`;
      } else if (option === 'Be Able To') {
        return `${
          subject === 'I'
            ? 'Am I'
            : isSingle
            ? `Is ${subject}`
            : `Are ${subject}`
        } able to ${selectedEntry.presentPlural}?`;
      } else if (option === 'Have To') {
        return `${
          subject === 'I' || !isSingle
            ? `Do ${subject} have to`
            : `Does ${subject} have to`
        }  ${selectedEntry.presentPlural}?`;
      }

      return `${option.toLowerCase()} ${subject} ${
        selectedEntry.presentPlural
      }?`;
    } else if (state === '+') {
      if (option === 'Be Able To') {
        return `${subject} ${
          subject === 'I' ? 'am' : isSingle ? `is` : `are`
        } able to ${selectedEntry.presentPlural}`;
      } else if (option === 'Have To') {
        return `${subject} ${
          subject === 'I' || !isSingle ? 'have to' : 'has to'
        } ${selectedEntry.presentPlural}`;
      } else if (option === 'Be Likely') {
        return `${subject} ${
          subject === 'I' ? 'am' : isSingle ? `is` : `are`
        } likely to ${selectedEntry.presentPlural}`;
      }
      return `${subject} ${option.toLowerCase()} ${
        selectedEntry.presentPlural
      }`;
    } else if (state === '-') {
      if (option === 'Can') {
        return `${subject} can't ${selectedEntry.presentPlural}`;
      } else if (option === 'Could') {
        return `${subject} couldn't ${selectedEntry.presentPlural}`;
      } else if (option === 'Must') {
        return `${subject} mustn't ${selectedEntry.presentPlural}`;
      } else if (option === 'Should') {
        return `${subject} shouldn't ${selectedEntry.presentPlural}`;
      } else if (option === 'Ought To') {
        return `${subject} ought not to ${selectedEntry.presentPlural}`;
      } else if (option === 'Had Better') {
        return `${subject} had better not ${selectedEntry.presentPlural}`;
      } else if (option === 'May') {
        return `${subject} may not ${selectedEntry.presentPlural}`;
      } else if (option === 'Have To') {
        return `${subject} ${isSingle ? `doesn't have to` : `don't have to`} ${
          selectedEntry.presentPlural
        }`;
      } else if (option === 'Be Able To') {
        return `${subject} ${
          isSingle ? `isn't` : subject === 'I' ? 'am not' : `aren't`
        } able to ${selectedEntry.presentPlural}`;
      } else if (option === 'Be Likely') {
        return `${subject} ${
          isSingle ? `isn't` : subject === 'I' ? 'am not' : `aren't`
        } likely to ${selectedEntry.presentPlural}`;
      }
    }

    return '';
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const handleAskButton = () => {
    if (selectedCells.length === 0 || selectedSymbols.length === 0) {
      return Alert.alert('Warning!', 'Please select a state and an option');
    }
    isAnswerVisible && generateQuestion();
    isAnswerVisible && setTotalQuestions(totalQuestions + 1);
    !isAnswerVisible && setSelectedCell('');
    !isAnswerVisible && setSelectedSymbol('');
    !isAnswerVisible && handleVoice(answer);
    setIsAnswerVisible(!isAnswerVisible);
  };

  useEffect(() => {
    setTime(15);
  }, [isAnswerVisible]);

  const checkAnswer = () => {
    setSelectedCell('');
    setSelectedSymbol('');

    const {normalizedInput, normalizedAnswer, normalizedInputWithContractions} =
      checkAbbreviation({
        input: inputText.split(' '),
        answer,
        selectedCell: selectedCell,
      });

    if (normalizedAnswer === normalizedInputWithContractions) {
      setCorrectAnswers(correctAnswers + 1);
      showMessage('Correct answer!', 'success');
      setIsAnswerVisible(true);
      setInputText('');
    } else {
      setWrongAnswers(wrongAnswers + 1);
      showMessage('Wrong answer!', 'error');
      setIsAnswerVisible(true);
    }
    handleAskButton();
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

  const formatText = (text: string): string =>
    text.charAt(0).toUpperCase() + text.slice(1);

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
    setInputText(e.value[0]);
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <Toast />
      <KeyboardAvoidingView>
        <ScrollView
          contentContainerStyle={{
            gap: 16,
          }}>
          <ChartComponent
            style={styles.chartContainer}
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
          />
          <ModalsSosCellSelectComponent
            selectedCells={selectedCells}
            setSelectedCells={setSelectedCells}
            selectedCell={selectedCell}
            cells={[
              {
                value: 'Can',
                label: 'Can',
              },
              {
                value: 'Could',
                label: 'Could',
              },
              {
                value: 'Must',
                label: 'Must',
              },
              {
                value: 'Should',
                label: 'Should',
              },
              {
                value: 'Ought To',
                label: 'Ought To',
              },
              {
                value: 'Had Better',
                label: 'Had Better',
              },
              {
                value: 'May',
                label: 'May',
              },
              {
                value: 'Have To',
                label: 'Have To',
              },
              {
                value: 'Be Able To',
                label: 'Be Able To',
              },
              {
                value: 'Be Likely',
                label: 'Be Likely',
              },
            ]}
          />
          <View>
            <TestTable
              selectedCells={selectedCells}
              setSelectedCells={setSelectedCells}
              selectedSymbols={selectedSymbols}
              setSelectedSymbols={setSelectedSymbols}
              selectedCell={selectedCell}
              selectedSymbol={selectedSymbol}
              isSymbolActive={true}
              symbols={symbols}
              mainCategory="Sos"
            />
            <View>
              <TouchableOpacity
                style={styles.askButton}
                activeOpacity={0.7}
                onPress={() => {
                  handleAskButton();
                }}>
                <Text style={styles.askButtonText}>
                  {isAnswerVisible ? 'SOR' : 'CEVABI GÖR'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.questionContainer}>
              <View style={styles.subjectContainer}>
                <Text style={styles.readyText}>{selectedSubject}</Text>
              </View>
              <TouchableOpacity
                style={styles.sentenceContainer}
                activeOpacity={0.7}
                onPress={() => {
                  handleVoice(question);
                }}>
                <Text style={styles.readyText}>{question}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingTop: 8,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={styles.answerDetails}>
                <TextLabel
                  title="Anlam:"
                  content={
                    isAnswerVisible ? formatText(entry.turkishMean) : null
                  }
                />
                <TextLabel
                  title="Cevap:"
                  content={isAnswerVisible ? answer : null}
                  onPress={() => handleVoice(answer)}
                />
              </View>
              <View
                style={{
                  marginRight: 20,
                }}>
                <TouchableOpacity
                  onPress={() => handleVoice(answer)}
                  activeOpacity={0.7}>
                  <CountdownCircleTimer
                    key={!isAnswerVisible ? time : undefined}
                    size={40}
                    strokeWidth={5}
                    isPlaying={!isAnswerVisible}
                    duration={time}
                    onComplete={() => checkAnswer()}
                    colors={['#2AC769', '#86E892', '#FB4E4E', '#F12100']}
                    colorsTime={[time, (2 * time) / 3, time / 3, 0]}>
                    {({remainingTime}) =>
                      isAnswerVisible && answer ? (
                        <TouchableOpacity
                          onPress={() => handleVoice(answer)}
                          activeOpacity={0.7}>
                          <Icon
                            name="Sound"
                            color="#6c6c6c"
                            width={16}
                            height={16}
                          />
                        </TouchableOpacity>
                      ) : (
                        <Text>{remainingTime.toString()}</Text>
                      )
                    }
                  </CountdownCircleTimer>
                </TouchableOpacity>
              </View>
            </View>
            {isChecked && (
              <View style={styles.answerContainer}>
                <View
                  style={[
                    styles.input,
                    started ? styles.voiceInput : styles.input,
                  ]}>
                  <TextInput
                    placeholder="Bir şeyler yazın..."
                    onChangeText={handleInputChange}
                    style={{
                      flex: 1,
                      color: 'black',
                    }}
                    value={inputText}
                    placeholderTextColor={'#282828'}
                  />
                  <TouchableOpacity
                    onPressIn={() => {
                      startRecognizing();
                    }}
                    onPressOut={() => {
                      stopRecognizing();
                    }}>
                    <Icon name="Mic" color="#282828" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={[
                    styles.answerButton,
                    {
                      opacity:
                        isAnswerVisible || !answer || !inputText ? 0.8 : 1,
                    },
                  ]}
                  activeOpacity={0.7}
                  disabled={isAnswerVisible || !answer || !inputText}
                  onPress={() => checkAnswer()}>
                  <Text style={styles.askButtonText}>Cevapla</Text>
                </TouchableOpacity>
              </View>
            )}
            <CheckBox
              style={styles.checkbox}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              isChecked={isChecked}
              rightText="Soruyu cevaplamak istiyorum"
              rightTextStyle={styles.checkboxRightText}
              checkBoxColor="green"
            />
          </View>
        </ScrollView>
        <IVerbsModal />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: 40,
    fontWeight: 'bold',
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
  questionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  subjectContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#227C9D',
    borderRadius: 8,
    marginTop: 16,
  },
  sentenceContainer: {
    flex: 2,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#227C9D',
    borderRadius: 8,
    marginTop: 16,
  },
  readyText: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'center',
  },
  askButton: {
    flex: 1,
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
  answerContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    color: 'black',
  },
  voiceInput: {
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
  answerDetails: {
    flex: 1,
  },
  answerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32936f',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chartContainer: {
    marginBottom: 16,
  },
  checkbox: {
    borderRadius: 8,
    marginTop: 8,
    width: 'auto',
    height: 'auto',
    alignSelf: 'flex-start',
  },
  checkboxRightText: {
    flex: 0,
    marginLeft: 2,
    color: 'black',
  },
});

export default ModalsSosTable;
