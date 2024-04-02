import React, {useEffect, useState} from 'react';
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

const Translation = () => {
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const [selectedCells, setSelectedCells] = useState<string[]>(['B1']);
  const [selectedCell, setSelectedCell] = useState<string>('');
  const [sentence, setSentence] = useState<string>(
    'Henüz bir soru yok, hücrelerden seçim yapıp sor tuşuna basmalısın!',
  );
  const [question, setQuestion] = useState<{[key: string]: string}>({});
  const [answer, setAnswer] = useState<string>('');
  const [enteredAnswer, setEnteredAnswer] = useState<string>('');
  const [meaning, setMeaning] = useState<string[]>([]);
  const [textInputValue, setTextInputValue] = useState<string[]>([]);

  // const generateQuestion = () => {
  //   const randomIndex = Math.floor(Math.random() * translationWords.length);
  //   const question = translationWords[randomIndex];
  //   return question;
  // };

  const handleSelect = (item: string) => {
    handleVoice(item);
    setTextInputValue(prevValue => [...prevValue, item]);
    setMeaning(prevMeaning => prevMeaning.filter(word => word !== item));
  };

  const handleSelectReverse = (item: string) => {
    setMeaning(prevMeaning => [...prevMeaning, item]);
    setTextInputValue(prevValue => prevValue.filter(word => word !== item));
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
      return Alert.alert('Seçilen hücreler için bir soru bulunamadı');
    }

    const randomIndex =
      Math.floor(Math.random() * (filteredKeys.length / 2)) * 2;
    const meaningKey = filteredKeys[randomIndex];
    const sentenceKey = filteredKeys[randomIndex + 1];

    const sentence = questions[sentenceKey];
    setAnswer(questions[meaningKey]);
    const meaning = questions[meaningKey].split(' ');
    const mixSentence = meaning.sort(() => Math.random() - 0.5);

    setSelectedCell(sentenceKey.replace('-meaning', ''));
    setSentence(sentence);
    setMeaning(mixSentence);
  };

  const checkAnswer = () => {
    if (textInputValue.join(' ') === answer) {
      Alert.alert('Tebrikler, doğru cevap!');
      setCorrectAnswers(correctAnswers + 1);
    } else {
      Alert.alert('Üzgünüm, yanlış cevap!');
      setWrongAnswers(wrongAnswers + 1);
    }
    setSentence('Yeni soru için sor butonuna basınız!');
    setTextInputValue([]);
    setEnteredAnswer('');
    setAnswer('');
    // setSentence('');
    setMeaning([]);
    handleAskButton();
  };

  const handleAskButton = () => {
    if (selectedCells.length === 0) {
      return Alert.alert('Lütfen bir hücre seçiniz');
    }
    isAnswerVisible && generateQuestion();
    isAnswerVisible && setTotalQuestions(totalQuestions + 1);
    !isAnswerVisible && setSelectedCell('');
    setIsAnswerVisible(!isAnswerVisible);

    setEnteredAnswer(textInputValue.join(' '));
    // if (enteredAnswer.length > 0) {
    //   if (enteredAnswer === answer) {
    //     Alert.alert('Tebrikler, doğru cevap!');
    //     setTextInputValue([]);
    //     setEnteredAnswer('');
    //     setAnswer('');
    //     setSentence('');
    //     setMeaning([]);
    //     setIsQuestionActive(false);
    //   } else {
    //     Alert.alert('Üzgünüm, yanlış cevap!');
    //     setTextInputValue([]);
    //     setEnteredAnswer('');
    //     setAnswer('');
    //     setSentence('');
    //     setMeaning([]);
    //     setIsQuestionActive(false);
    //   }
    // }
    // setIsQuestionActive(true);

    // const questions: {[key: string]: string} = generateQuestion();
    // const keys = Object.keys(questions);
    // const filteredKeys = keys.filter(key =>
    //   selectedCells.includes(key.replace('-meaning', '')),
    // );

    // if (filteredKeys.length === 0) {
    //   return Alert.alert('Seçilen hücreler için bir soru bulunamadı');
    // }

    // const randomIndex =
    //   Math.floor(Math.random() * (filteredKeys.length / 2)) * 2;
    // const meaningKey = filteredKeys[randomIndex];
    // const sentenceKey = filteredKeys[randomIndex + 1];

    // const sentence = questions[sentenceKey];
    // setAnswer(questions[meaningKey]);
    // const meaning = questions[meaningKey].split(' ');
    // const mixSentence = meaning.sort(() => Math.random() - 0.5);

    // setSelectedCell(sentenceKey.replace('-meaning', ''));
    // setSentence(sentence);
    // setMeaning(mixSentence);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={{
          padding: 12,
        }}>
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
        <View
          style={{
            marginTop: 16,
            flex: 1,
          }}>
          <TouchableOpacity
            style={styles.askButton}
            activeOpacity={0.7}
            onPress={() => {
              {
                isAnswerVisible ? handleAskButton() : checkAnswer();
              }
            }}>
            <Text style={styles.askButtonText}>
              {isAnswerVisible ? 'Sor' : 'Cevapla'}
            </Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={require('../assets/icons/translate_robot.png')}
              style={styles.image}
            />
            <View style={styles.bubble}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  // color: '#227C9D',
                  color: 'black',
                }}>
                {sentence}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              gap: 50,
            }}>
            <View
              style={{
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
              }}>
              <FlatList
                data={textInputValue}
                // ListEmptyComponent={
                //   <Text
                //     style={{
                //       fontSize: 16,
                //       fontWeight: 'bold',
                //     }}>

                //   </Text>
                // }
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 8,
                }}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleSelectReverse(item)}
                    style={{
                      backgroundColor: '#227C9D',
                      borderRadius: 8,
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                      margin: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => `meaning-${index}`}
              />
            </View>
            {/* <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',

              marginTop: 20,
            }}>
            {meaning.map((word, index) => (
              <View key={index} style={{margin: 2, flex: 1}}>
                <Draggable onDragRelease={() => handleDragEnd(index)}>
                  <View
                    style={{
                      backgroundColor: '#227C9D',
                      borderRadius: 8,
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {word}
                    </Text>
                  </View>
                </Draggable>
              </View>
            ))}
          </View> */}
            <View
              style={{
                flex: 1,
              }}>
              <DraggableFlatList
                data={meaning}
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                }}
                renderItem={({item, drag}) => (
                  <View style={{}}>
                    <TouchableOpacity
                      onLongPress={drag}
                      onPress={() => handleSelect(item)}
                      style={{
                        backgroundColor: '#227C9D',
                        borderRadius: 8,
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => `draggable-item-${index}`}
                onDragEnd={({data}) => console.log('data', data)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
});

export default Translation;
