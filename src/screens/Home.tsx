import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import Table from '../components/Table';
import verbs from '../utils/verbs.json';
import nouns from '../utils/nouns.json';

import {useState} from 'react';
import {IVerb} from '../types';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [options, setOptions] = useState([
    'A1',
    'B1',
    'C1',
    'A2',
    'B2',
    'C2',
    'A3',
    'B3',
    'C3',
    'A4',
    'B4',
    'C4',
  ]);

  const [selectedOption, setSelectedOption] = useState('');
  const [states, setStates] = useState(['+', '-', '?']);
  const [selectedState, setSelectedState] = useState('');
  const [entry, setEntry] = useState<string | IVerb>('');
  const [selectedSubject, setSelectedSubject] = useState('Are');
  const [question, setQuestion] = useState('you ready?');
  const [isSubjectSingle, setIsSubjectSingle] = useState(false);
  const [answer, setAnswer] = useState('');

  const subjects = ['I', 'you', 'he', 'she', 'it', 'we', 'they'];

  const getRandomStates = () => {
    const length = states.length;
    const randomIndex = Math.floor(Math.random() * length);
    return states[randomIndex];
  };

  const getRandomOption = () => {
    const length = options.length;
    const randomIndex = Math.floor(Math.random() * length);
    return options[randomIndex];
  };

  const getRandomSubject = () => {
    const length = subjects.length;
    const randomIndex = Math.floor(Math.random() * length);
    return subjects[randomIndex];
  };

  const getRandomEntry: (isVerb: boolean) => string | IVerb = isVerb => {
    const length = isVerb ? verbs.length : nouns.length;
    const randomIndex = Math.floor(Math.random() * length);
    return isVerb ? verbs[randomIndex] : nouns[randomIndex];
  };

  const generateQuestion = () => {
    const subject = getRandomSubject();
    const state = getRandomStates();
    const option = getRandomOption();
    setSelectedSubject(subject);
    setIsSubjectSingle(
      subject === 'he' || subject === 'she' || subject === 'it',
    );
    setSelectedState(state);
    setSelectedOption(option);
    console.log(option, 'test');
    if (option[1] === '1') {
      const entry = getRandomEntry(false) as string;
      console.log(entry);
      setEntry(entry);
      return option[0] === 'A'
        ? setQuestion(`(${state}) ${entry} ${option}`)
        : setQuestion(`(${state}) be ${entry} ${option}`);
    } else {
      const entry = getRandomEntry(true) as IVerb;
      setEntry(entry);
      setQuestion(`(${state}) ${entry.presentPlural} ${option}`);
    }
  };

  const generateAnswer = () => {
    console.log(selectedState);
    switch (selectedOption) {
      case 'A1':
        if (selectedState === '+') {
          return `${selectedSubject} will be ${entry}`;
        } else if (selectedState === '-') {
          return `${selectedSubject} won't be ${entry}`;
        } else {
          return `will ${selectedSubject} be ${entry}?`;
        }
      case 'B1':
        if (selectedState === '+') {
          return `${selectedSubject} ${
            isSubjectSingle ? 'is' : selectedSubject === 'I' ? 'am' : 'are'
          } ${entry}`;
        } else if (selectedState === '-') {
          return `${selectedSubject} ${
            isSubjectSingle
              ? `isn't`
              : selectedSubject === 'I'
              ? 'am not'
              : `aren't`
          } ${entry}`;
        } else {
          return `${
            isSubjectSingle ? `Is` : selectedSubject === 'I' ? 'Am' : `Are`
          } ${selectedSubject}  ${entry}?`;
        }
      case 'C1':
        if (selectedState === '+') {
          return `${selectedSubject} ${
            isSubjectSingle ? 'was' : selectedSubject === 'I' ? 'was' : 'were'
          } ${entry}`;
        } else if (selectedState === '-') {
          return `${selectedSubject} ${
            isSubjectSingle
              ? `wasn't`
              : selectedSubject === 'I'
              ? `wasn't`
              : `weren't`
          } ${entry}`;
        } else {
          return `${
            isSubjectSingle ? `Was` : selectedSubject === 'I' ? `Was` : `Were`
          } ${selectedSubject} ${entry}?`;
        }
      case 'A2':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} will ${entry.presentPlural}`;
          } else if (selectedState === '-') {
            return `${selectedSubject} won't ${entry.presentPlural}`;
          } else {
            return `Will ${selectedSubject} ${entry.presentPlural}?`;
          }
        }
      case 'B2':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} ${
              isSubjectSingle ? entry.presentSingular : entry.presentPlural
            }`;
          } else if (selectedState === '-') {
            return `${selectedSubject} ${
              isSubjectSingle ? `doesn't` : `don't`
            } ${entry.presentPlural}`;
          } else {
            return `${isSubjectSingle ? `Does` : `Do`} ${selectedSubject} ${
              entry.presentPlural
            }?`;
          }
        }
      case 'C2':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} ${entry.pastV2}`;
          } else if (selectedState === '-') {
            return `${selectedSubject} didn't ${entry.presentPlural}?`;
          } else {
            return `Did ${selectedSubject} ${entry.presentPlural}`;
          }
        }
      case 'A3':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} will be ${entry.verbIng}`;
          } else if (selectedState === '-') {
            return `${selectedSubject} won't ${entry.verbIng}`;
          } else {
            return `Will ${selectedSubject} be ${entry.verbIng}?`;
          }
        }
      case 'B3':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} ${
              isSubjectSingle ? `is` : selectedSubject === 'I' ? 'am' : `are`
            } ${entry.verbIng}`;
          } else if (selectedState === '-') {
            return `${selectedSubject} ${
              isSubjectSingle
                ? `isn't`
                : selectedSubject === 'I'
                ? 'am not'
                : `aren't`
            } ${entry.verbIng}`;
          } else {
            return `${
              isSubjectSingle ? `Is` : selectedSubject === 'I' ? 'Am' : `Are`
            } ${selectedSubject} be ${entry.verbIng}?`;
          }
        }
      case 'C3':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} ${
              isSubjectSingle ? `was` : selectedSubject === 'I' ? `was` : `were`
            } ${entry.verbIng}`;
          } else if (selectedState === '-') {
            return `${selectedSubject} ${
              isSubjectSingle
                ? `wasn't`
                : selectedSubject === 'I'
                ? `wasn't`
                : `weren't`
            } ${entry.verbIng}`;
          } else {
            return `${
              isSubjectSingle
                ? `Was`
                : selectedSubject === 'I'
                ? `Were`
                : `Were`
            } ${selectedSubject} ${entry.verbIng}?`;
          }
        }
      case 'A4':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} will have ${entry.pastV3}`;
          } else if (selectedState === '-') {
            return `${selectedSubject} won't have ${entry.pastV3}`;
          } else {
            return `Will ${selectedSubject} have ${entry.pastV3}?`;
          }
        }
      case 'B4':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} ${isSubjectSingle ? 'has' : 'have'} ${
              entry.pastV3
            }`;
          } else if (selectedState === '-') {
            return `${selectedSubject} ${
              isSubjectSingle ? "hasn't" : "haven't"
            } ${entry.pastV3}`;
          } else {
            return `${selectedSubject} ${isSubjectSingle ? 'has' : 'have'} ${
              entry.pastV3
            }?`;
          }
        }
      case 'C4':
        if (typeof entry === 'object') {
          if (selectedState === '+') {
            return `${selectedSubject} had ${entry.pastV3}`;
          } else if (selectedState === '-') {
            return `${selectedSubject} hadn't ${entry.pastV3}`;
          } else {
            return `Had ${entry.pastV3}?`;
          }
        }
    }
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const handleButtonPress = () => {
    console.log('Girilen metin:', inputText);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <Text>Sorulan: 2</Text>
        </View>
        <View style={styles.header}>
          <Text>Doğru: 1</Text>
        </View>
        <View style={styles.header}>
          <Text>Yanlış: 1</Text>
        </View>
      </View>
      <Table />
      <TouchableOpacity
        style={styles.askButton}
        activeOpacity={0.7}
        onPress={() => generateQuestion()}>
        <Text style={styles.askButtonText}>Sor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.askButton}
        activeOpacity={0.7}
        onPress={() => setAnswer(generateAnswer() || '')}>
        <Text style={styles.askButtonText}>Cevabı Gör</Text>
      </TouchableOpacity>
      <View style={styles.questionContainer}>
        <View style={styles.subjectContainer}>
          <Text style={styles.readyText}>{selectedSubject}</Text>
        </View>
        <View style={styles.sentenceContainer}>
          <Text style={styles.readyText}>{question}</Text>
        </View>
      </View>
      <View>
        <Text>{answer}</Text>
      </View>
      <View style={styles.answerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Bir şeyler yazın..."
          onChangeText={handleInputChange}
          value={inputText}
          placeholderTextColor={'#282828'}
        />
        <TouchableOpacity style={styles.answerButton} activeOpacity={0.7}>
          <Text style={styles.askButtonText}>Cevapla</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#ddd',
    height: 40,
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
    height: 44,
    backgroundColor: '#242441',
    borderRadius: 8,
    marginTop: 16,
  },
  sentenceContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 44,
    backgroundColor: '#242441',
    borderRadius: 8,
    marginTop: 16,
  },

  readyText: {
    color: 'white',
    fontWeight: 'bold',
  },

  askButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2656B',
    borderRadius: 8,
    marginTop: 16,
    height: 44,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  askButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
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
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    height: 44,
    paddingHorizontal: 8,
    color: 'black',
  },
  answerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 8,
    height: 44,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Home;
