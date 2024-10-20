import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const QuestionComponent = ({
  sentence,
  isAnswerVisible,
  handleAskButton,
  checkAnswer,
  textInputValue,
  selectedCell,
}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.askButton}
        onPress={() => (isAnswerVisible ? handleAskButton() : checkAnswer())}
        // disabled={textInputValue.length === 0 && !isAnswerVisible}
        disabled={selectedCell === '' && !isAnswerVisible}>
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
      <View style={styles.questionContainer}>
        <Image
          source={require('../../../assets/icons/translate_robot.png')}
          style={styles.image}
        />
        <View style={styles.bubble}>
          <Text style={styles.sentence}>{sentence}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  askButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE6D73',
    borderRadius: 8,
    paddingVertical: 10,
  },
  askButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
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
  sentence: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default QuestionComponent;
