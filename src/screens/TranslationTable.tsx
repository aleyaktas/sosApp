import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Table from '../components/Table';

const TranslationTable = () => {
  const totalQuestions = 0;
  const correctAnswers = 0;
  const wrongAnswers = 0;
  const [isAnswerVisible, setIsAnswerVisible] = React.useState(false);
  const exmapleSentence =
    'I am a software developer from Turkey and I love coding';

  const splitSentence = exmapleSentence.split(' ');

  const mixSentence = splitSentence.sort(() => Math.random() - 0.5);

  const handleAskButton = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
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
        selectedCells={[]}
        setSelectedCells={() => {}}
        selectedSymbols={[]}
        setSelectedSymbols={() => {}}
        selectedCell={''}
        selectedSymbol={''}
        isSymbolActive={false}
      />
      <View
        style={{
          marginTop: 16,
        }}>
        <TouchableOpacity
          style={styles.askButton}
          activeOpacity={0.7}
          onPress={() => {
            handleAskButton();
          }}>
          <Text style={styles.askButtonText}>SOR</Text>
        </TouchableOpacity>
        <View
          style={{
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
            //wrap
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            gap: 8,
          }}>
          {mixSentence.map((word, index) => (
            <View
              style={{
                backgroundColor: '#227C9D',
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderRadius: 8,
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
              key={index}>
              <Text
                key={index}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 8,
                }}>
                {word}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 12,
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
});

export default TranslationTable;
