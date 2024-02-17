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
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Table from '../components/Table';
import verbs from '../utils/verbs.json';
import kidVerbs from '../utils/kidVerbs.json';
import kidNouns from '../utils/kidNouns.json';
import nouns from '../utils/nouns.json';
import {useEffect, useState} from 'react';
import {IVerb} from '../types';
import Voice from '@react-native-voice/voice';
import {showMessage} from '../utils/showMessage';
import Toast from '../components/Toast';
import Icon from '../themes/Icon';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [entry, setEntry] = useState<IVerb>({
    presentPlural: '',
    turkishMean: '',
  });
  const [selectedSubject, setSelectedSubject] = useState('Are');
  const [question, setQuestion] = useState('you ready?');
  const [isSubjectSingle, setIsSubjectSingle] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [time, setTime] = useState(15);
  const [isKid, setIsKid] = useState(false);

  const subjects = ['I', 'you', 'he', 'she', 'it', 'we', 'they'];

  const getRandomStates = () => {
    const length = selectedSymbols.length;
    const randomIndex = Math.floor(Math.random() * length);
    return selectedSymbols[randomIndex];
  };

  const getRandomOption = () => {
    const length = selectedCells.length;
    const randomIndex = Math.floor(Math.random() * length);
    return selectedCells[randomIndex];
  };

  const getRandomSubject = () => {
    const length = subjects.length;
    const randomIndex = Math.floor(Math.random() * length);
    return subjects[randomIndex];
  };

  const getRandomEntry: (isVerb: boolean) => IVerb = isVerb => {
    const length = isVerb ? verbs.length : nouns.length;
    const randomIndex = Math.floor(Math.random() * length);
    return isVerb ? verbs[randomIndex] : nouns[randomIndex];
  };

  const generateQuestion = () => {
    let entry: IVerb;
    setInputText('');
    const subject = getRandomSubject();
    const state = getRandomStates();
    const option = getRandomOption();
    setSelectedSubject(subject);
    setIsSubjectSingle(
      subject === 'he' || subject === 'she' || subject === 'it',
    );
    setSelectedState(state);
    setSelectedOption(option);

    if (option[1] === '1') {
      console.log('option 1', isKid);
      if (isKid) {
        entry = kidNouns;
        setEntry(kidNouns);
      } else {
        entry = getRandomEntry(false);
        setEntry(entry);
      }
      const answer = generateAnswer(
        option,
        entry,
        state,
        subject,
        subject === 'he' || subject === 'she' || subject === 'it',
      );
      setAnswer(answer);
      return option[0] === 'A'
        ? setQuestion(`(${state}) ${entry.presentPlural} (${option})`)
        : setQuestion(`(${state}) be ${entry.presentPlural} (${option})`);
    } else {
      if (isKid) {
        entry =
          option[1] === '2'
            ? kidVerbs[0]
            : option[1] === '3'
            ? kidVerbs[1]
            : kidVerbs[2];
        setEntry(entry);
      } else {
        entry = getRandomEntry(true);
        setEntry(entry);
      }
      const answer = generateAnswer(
        option,
        entry,
        state,
        subject,
        subject === 'he' || subject === 'she' || subject === 'it',
      );
      setAnswer(answer);
      setQuestion(`(${state}) ${entry.presentPlural} (${option})`);
    }
  };

  const generateAnswer = (
    option: string,
    selectedEntry: IVerb,
    state: string,
    subject: string,
    isSingle: boolean,
  ) => {
    switch (option) {
      case 'A1':
        if (state === '+') {
          return `${subject} will be ${selectedEntry.presentPlural}`;
        } else if (state === '-') {
          return `${subject} won't be ${selectedEntry.presentPlural}`;
        } else {
          return `will ${subject} be ${selectedEntry.presentPlural}?`;
        }
      case 'B1':
        if (state === '+') {
          return `${subject} ${
            isSingle ? 'is' : subject === 'I' ? 'am' : 'are'
          } ${selectedEntry.presentPlural}`;
        } else if (state === '-') {
          return `${subject} ${
            isSingle ? `isn't` : subject === 'I' ? 'am not' : `aren't`
          } ${selectedEntry.presentPlural}`;
        } else {
          return `${
            isSingle ? `Is` : subject === 'I' ? 'Am' : `Are`
          } ${subject} ${selectedEntry.presentPlural}?`;
        }
      case 'C1':
        if (state === '+') {
          return `${subject} ${
            isSingle ? 'was' : subject === 'I' ? 'was' : 'were'
          } ${selectedEntry.presentPlural}`;
        } else if (state === '-') {
          return `${subject} ${
            isSingle ? `wasn't` : subject === 'I' ? `wasn't` : `weren't`
          } ${selectedEntry.presentPlural}`;
        } else {
          return `${
            isSingle ? `Was` : subject === 'I' ? `Was` : `Were`
          } ${subject} ${selectedEntry.presentPlural}?`;
        }
      case 'A2':
        if (state === '+') {
          return `${subject} will ${selectedEntry.presentPlural}`;
        } else if (state === '-') {
          return `${subject} won't ${selectedEntry.presentPlural}`;
        } else {
          return `Will ${subject} ${selectedEntry.presentPlural}?`;
        }

      case 'B2':
        if (state === '+') {
          return `${subject} ${
            isSingle
              ? selectedEntry.presentSingular
              : selectedEntry.presentPlural
          }`;
        } else if (state === '-') {
          return `${subject} ${isSingle ? `doesn't` : `don't`} ${
            selectedEntry.presentPlural
          }`;
        } else {
          return `${isSingle ? `Does` : `Do`} ${subject} ${
            selectedEntry.presentPlural
          }?`;
        }

      case 'C2':
        if (state === '+') {
          return `${subject} ${selectedEntry.pastV2}`;
        } else if (state === '-') {
          return `${subject} didn't ${selectedEntry.presentPlural}?`;
        } else {
          return `Did ${subject} ${selectedEntry.presentPlural}`;
        }

      case 'A3':
        if (state === '+') {
          return `${subject} will be ${selectedEntry.verbIng}`;
        } else if (state === '-') {
          return `${subject} won't be ${selectedEntry.verbIng}`;
        } else {
          return `Will ${subject} be ${selectedEntry.verbIng}?`;
        }

      case 'B3':
        if (state === '+') {
          return `${subject} ${
            isSingle ? `is` : subject === 'I' ? 'am' : `are`
          } ${selectedEntry.verbIng}`;
        } else if (state === '-') {
          return `${subject} ${
            isSingle ? `isn't` : subject === 'I' ? 'am not' : `aren't`
          } ${selectedEntry.verbIng}`;
        } else {
          return `${
            isSingle ? `Is` : subject === 'I' ? 'Am' : `Are`
          } ${subject} be ${selectedEntry.verbIng}?`;
        }

      case 'C3':
        if (state === '+') {
          return `${subject} ${
            isSingle ? `was` : subject === 'I' ? `was` : `were`
          } ${selectedEntry.verbIng}`;
        } else if (state === '-') {
          return `${subject} ${
            isSingle ? `wasn't` : subject === 'I' ? `wasn't` : `weren't`
          } ${selectedEntry.verbIng}`;
        } else {
          return `${
            isSingle ? `Was` : subject === 'I' ? `Were` : `Were`
          } ${subject} ${selectedEntry.verbIng}?`;
        }

      case 'A4':
        if (typeof selectedEntry === 'object') {
          if (state === '+') {
            return `${subject} will have ${selectedEntry.pastV3}`;
          } else if (state === '-') {
            return `${subject} won't have ${selectedEntry.pastV3}`;
          } else {
            return `Will ${subject} have ${selectedEntry.pastV3}?`;
          }
        }
      case 'B4':
        if (state === '+') {
          return `${subject} ${isSingle ? 'has' : 'have'} ${
            selectedEntry.pastV3
          }`;
        } else if (state === '-') {
          return `${subject} ${isSingle ? "hasn't" : "haven't"} ${
            selectedEntry.pastV3
          }`;
        } else {
          return `${subject} ${isSingle ? 'has' : 'have'} ${
            selectedEntry.pastV3
          }?`;
        }

      case 'C4':
        if (state === '+') {
          return `${subject} had ${selectedEntry.pastV3}`;
        } else if (state === '-') {
          return `${subject} hadn't ${selectedEntry.pastV3}`;
        } else {
          return `Had ${selectedEntry.pastV3}?`;
        }
      default:
        return 'test';
    }
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
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
  };

  const handleAskButton = () => {
    if (selectedCells.length === 0 || selectedSymbols.length === 0) {
      return Alert.alert('Warning!', 'Please select a state and an option');
    }

    isAnswerVisible && generateQuestion();
    !isAnswerVisible && setSelectedOption('');
    !isAnswerVisible && setSelectedState('');
    setIsAnswerVisible(!isAnswerVisible);
    setTotalQuestions(totalQuestions + 1);
  };

  useEffect(() => {
    setTime(15);
  }, [isAnswerVisible]);

  const handleButtonPress = () => {
    setSelectedOption('');
    setSelectedState('');

    const normalizedInput = inputText.toLowerCase().replace(/[?.,]/g, '');
    const normalizedAnswer = answer.toLowerCase().replace(/[?.,]/g, '');
    const normalizedInputWithContractions =
      replaceContractions(normalizedInput);

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

  const replaceContractions = (text: string): string => {
    Object.entries(contractions).forEach(([key, value]) => {
      text = text.replace(new RegExp(key, 'g'), value);
    });
    return text;
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
        <ScrollView>
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
            selectedSymbols={selectedSymbols}
            setSelectedSymbols={setSelectedSymbols}
            selectedCell={selectedOption}
            selectedSymbol={selectedState}
          />
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
          <View style={styles.questionContainer}>
            <View style={styles.subjectContainer}>
              <Text style={styles.readyText}>{selectedSubject}</Text>
            </View>
            <View style={styles.sentenceContainer}>
              <Text style={styles.readyText}>{question}</Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 8,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    alignSelf: 'flex-start',
                  }}>
                  Anlam:{' '}
                </Text>
                {isAnswerVisible ? (
                  <Text
                    style={{
                      color: '#6c6c6c',
                      flex: 1,
                    }}>
                    {entry.turkishMean.charAt(0).toUpperCase() +
                      entry.turkishMean.slice(1)}
                  </Text>
                ) : (
                  <Icon name="Lock" color="#6c6c6c" width={16} height={16} />
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    alignSelf: 'flex-start',
                  }}>
                  Cevap:{' '}
                </Text>
                {isAnswerVisible ? (
                  <Text
                    style={{
                      color: '#6c6c6c',
                      flex: 1,
                    }}>
                    {answer.charAt(0).toUpperCase() + answer.slice(1)}
                  </Text>
                ) : (
                  <Icon name="Lock" color="#6c6c6c" width={16} height={16} />
                )}
              </View>
            </View>
            <View
              style={{
                marginRight: 20,
              }}>
              <CountdownCircleTimer
                key={!isAnswerVisible ? time : undefined}
                size={40}
                strokeWidth={5}
                isPlaying={!isAnswerVisible}
                duration={time}
                onComplete={() => handleButtonPress()}
                colors={['#2AC769', '#86E892', '#FB4E4E', '#F12100']}
                colorsTime={[time, (2 * time) / 3, time / 3, 0]}>
                {({remainingTime}) => <Text>{remainingTime.toString()}</Text>}
              </CountdownCircleTimer>
            </View>
          </View>
          {isChecked && (
            <View style={styles.answerContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Bir şeyler yazın..."
                  onChangeText={handleInputChange}
                  style={{
                    flex: 1,
                  }}
                  value={inputText}
                  placeholderTextColor={'#282828'}
                />
                <TouchableOpacity
                  // onPress={() => {
                  //   startRecognizing();
                  // }}
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
                    opacity: isAnswerVisible || !answer || !inputText ? 0.8 : 1,
                  },
                ]}
                activeOpacity={0.7}
                disabled={isAnswerVisible || !answer || !inputText}
                onPress={() => handleButtonPress()}>
                <Text style={styles.askButtonText}>Cevapla</Text>
              </TouchableOpacity>
            </View>
          )}

          <CheckBox
            style={{
              borderRadius: 8,
              marginTop: 8,
              width: 'auto',
              height: 'auto',
              alignSelf: 'flex-start',
            }}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            isChecked={isChecked}
            rightText="Soruyu cevaplamak istiyorum"
            rightTextStyle={{
              flex: 0,
              marginLeft: 2,
              color: 'black',
            }}
            checkBoxColor="green"
          />
          <CheckBox
            style={{
              borderRadius: 8,
              marginTop: 8,
              width: 'auto',
              height: 'auto',
              alignSelf: 'flex-start',
            }}
            onClick={() => {
              setIsKid(!isKid);
            }}
            isChecked={isKid}
            rightText="Aliş Kid"
            rightTextStyle={{
              flex: 0,
              marginLeft: 2,
              color: 'black',
            }}
            checkBoxColor="green"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginHorizontal: 12,
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
  answerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32936f',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Home;
