import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import {handleVoice} from '../../helpers/voiceCenter';
import ChartComponent from './components/ChartComponent';
import CellSelectionComponent from './components/CellSelectionComponent';
import QuestionComponent from './components/QuestionComponent';
import AnswerInputComponent from './components/AnswerInputComponent';
import BottomSheetComponent from './components/BottomSheetComponent';
import DraggableFlatList from 'react-native-draggable-flatlist';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {
  HaveHasTranslationSentences,
  LetsShallTranslationSentences,
} from '../../utils/translation';

const LetsShallTranslation = () => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const [selectedCells, setSelectedCells] = useState(['Lets', 'Shall']);
  const [selectedCell, setSelectedCell] = useState('');
  const [sentence, setSentence] = useState(
    'Henüz bir soru yok, hücrelerden seçim yapıp sor tuşuna basmalısın!',
  );
  const [answer, setAnswer] = useState('');
  const [meaning, setMeaning] = useState([]);
  const [textInputValue, setTextInputValue] = useState([]);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isAnswerTrue, setIsAnswerTrue] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [snapPoints, setSnapPoints] = useState(['30%']);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [remainingQuestionCount, setRemainingQuestionCount] = useState(0);

  const bottomSheetRef = useRef<BottomSheet>(null);

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
  };

  const onSpeechResults = (e: any) => {
    console.log('onSpeechResults', e.value[0]);
    setTextInputValue(e.value[0].split(' '));
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('en_US');
    } catch (e) {
      console.log(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelect = (item: any, index: any) => {
    handleVoice(item);
    setTextInputValue((prevValue): any => [...prevValue, item]);
    setMeaning(prevMeaning => prevMeaning.filter((word, idx) => idx !== index));
  };

  const handleSelectReverse = (item: any, index: any) => {
    setMeaning((prevMeaning): any => [...prevMeaning, item]);
    setTextInputValue(prevValue =>
      prevValue.filter((word, idx) => idx !== index),
    );
  };

  const continueButton = () => {
    setSentence('Yeni soru için sor butonuna basınız!');
    setTextInputValue([]);
    setAnswer('');
    setMeaning([]);
    handleAskButton();
    bottomSheetRef.current?.close();
  };
  type SymbolKeys = 'Lets' | 'Shall';

  const generateQuestion = () => {
    const randomIndexForSymbols = Math.floor(
      Math.random() * selectedCells.length,
    );
    const newSelectedSymbol = selectedCells[
      randomIndexForSymbols
    ] as SymbolKeys;
    setSelectedCell(newSelectedSymbol);

    let newTranslationSentences =
      LetsShallTranslationSentences[newSelectedSymbol];

    if (!newTranslationSentences) {
      setSentence('Çeviri cümlesi bulunamadı, hücre seçimi yapmalısın!');
      return Alert.alert(
        'Çeviri cümlesi bulunamadı!',
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
        LetsShallTranslationSentences[selectedCell as SymbolKeys];
      translationSentences.splice(questionIndex, 1);
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

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            gap: 16,
            marginTop: 16,
          }}>
          <ChartComponent
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
          />
          <CellSelectionComponent
            selectedCells={selectedCells}
            setSelectedCells={setSelectedCells}
            selectedCell={selectedCell}
            cells={[
              {
                value: 'HaveHas',
                label: 'Have / Has',
              },
            ]}
          />
          <QuestionComponent
            sentence={sentence}
            isAnswerVisible={isAnswerVisible}
            handleAskButton={handleAskButton}
            checkAnswer={checkAnswer}
            textInputValue={textInputValue}
          />
          <AnswerInputComponent
            isVoiceActive={isVoiceActive}
            setIsVoiceActive={setIsVoiceActive}
            textInputValue={textInputValue}
            setTextInputValue={setTextInputValue}
            startRecognizing={startRecognizing}
            stopRecognizing={stopRecognizing}
            handleSelectReverse={handleSelectReverse}
            remainingQuestionCount={remainingQuestionCount}
            padder
          />

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
                  onPress={() => handleSelect(item, getIndex() || 0)}
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
      </ScrollView>
      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
        isBottomSheetVisible={isBottomSheetVisible}
        snapPoints={snapPoints}
        isAnswerTrue={isAnswerTrue}
        answer={answer}
        textInputValue={textInputValue}
        continueButton={continueButton}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },

  draggableList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
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

export default LetsShallTranslation;
