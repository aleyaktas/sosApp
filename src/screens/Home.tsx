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
import Table from '../components/Table';
import verbs from '../utils/verbs.json';
import nouns from '../utils/nouns.json';
import {useEffect, useState} from 'react';
import {IVerb} from '../types';
import Voice from '@react-native-community/voice';
import {showMessage} from '../utils/showMessage';
import Toast from '../components/Toast';

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
      const entry = getRandomEntry(false);
      setEntry(entry);
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
      const entry = getRandomEntry(true);
      setEntry(entry);
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
          return `${subject} won't ${selectedEntry.verbIng}`;
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

  const handleButtonPress = () => {
    setSelectedOption('');
    setSelectedState('');
    if (
      answer.toLowerCase().replace(/[?.,]/g, '') ===
      inputText.toLowerCase().replace(/[?.,]/g, '')
    ) {
      setCorrectAnswers(correctAnswers + 1);
      showMessage('Correct answer!', 'success');
      setIsAnswerVisible(true);
      setInputText('');
    } else {
      setWrongAnswers(wrongAnswers + 1);
      showMessage('Wrong answer!', 'error');
      setIsAnswerVisible(true);
    }
  };

  const [recognized, setRecognized] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = stopListing;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
  };

  // const onSpeechEnd = (e: any) => {
  //   console.log('onSpeechEnd: ', e);
  // };

  const onSpeechResults = (e: any) => {
    console.log('onSpeechResults: ', e);
    const text = e.value[0];
    setRecognized(text);
  };

  const startListing = async () => {
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log(error);
    }
  };

  const stopListing = async () => {
    try {
      Voice.removeAllListeners();
      await Voice.stop();
    } catch (error) {
      console.log(error);
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
              if (selectedCells.length === 0 || selectedSymbols.length === 0) {
                return Alert.alert(
                  'Warning!',
                  'Please select a state and an option',
                );
              }
              isAnswerVisible && generateQuestion();
              !isAnswerVisible && setSelectedOption('');
              !isAnswerVisible && setSelectedState('');
              setIsAnswerVisible(!isAnswerVisible);
              setTotalQuestions(totalQuestions + 1);
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
            }}>
            <Text>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Anlam: </Text>
              {isAnswerVisible &&
                entry.turkishMean.charAt(0).toUpperCase() +
                  entry.turkishMean.slice(1)}
            </Text>
            <Text>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Cevap: </Text>
              {isAnswerVisible &&
                answer.charAt(0).toUpperCase() + answer.slice(1)}
            </Text>
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
                {/* <TouchableOpacity
                  // onPressIn={startListing}
                  // onPressOut={stopListing}
                  onPress={startListing}>
                  <Icon name="Mic" color="#282828" />
                </TouchableOpacity> */}
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
          {results.map((result, index) => {
            return <Text key={`result-${index}`}>{result}</Text>;
          })}
          {partialResults.map((result, index) => {
            return <Text key={`partial-result-${index}`}>{result}</Text>;
          })}
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
