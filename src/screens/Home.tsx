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
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [entry, setEntry] = useState<string | IVerb>('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const subjects = ['you', 'he', 'she', 'it', 'we', 'they'];

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
    setSelectedState(state);
    setSelectedOption(option);
    if (option[1] === '1') {
      const entry = getRandomEntry(false) as string;
      setEntry(entry);
      return option[0] === 'A'
        ? `${subject} (${state}) ${entry} ${option}`
        : `${subject} (${state}) be ${entry} ${option}`;
    } else {
      const entry = getRandomEntry(true) as IVerb;
      setEntry(entry);
      return `${subject} (${state}) ${entry.presentPlural} ${option}`;
    }
  };

  const generateAnswer = () => {};

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
      <TouchableOpacity style={styles.askButton} activeOpacity={0.7}>
        <Text style={styles.askButtonText}>Sor</Text>
      </TouchableOpacity>
      <View style={styles.questionContainer}>
        <View style={styles.subjectContainer}>
          <Text style={styles.readyText}>you</Text>
        </View>
        <View style={styles.sentenceContainer}>
          <Text style={styles.readyText}>lend a helping hand</Text>
        </View>
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
