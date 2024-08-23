import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from '../../../themes/Icon';

const AnswerInputComponent = ({
  isVoiceActive,
  setIsVoiceActive,
  textInputValue,
  setTextInputValue,
  startRecognizing,
  stopRecognizing,
  handleSelectReverse,
  remainingQuestionCount,
  padder,
}: any) => {
  return (
    <View
      style={
        (styles.container,
        {
          paddingHorizontal: padder && 16,
        })
      }>
      <View
        style={[
          styles.inputArea,
          isVoiceActive ? styles.voiceInputArea : null,
        ]}>
        {isVoiceActive ? (
          <TextInput
            style={styles.voiceInput}
            value={textInputValue.join(' ')}
            onChangeText={text => setTextInputValue([text])}
          />
        ) : (
          <FlatList
            data={textInputValue}
            contentContainerStyle={styles.inputValues}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handleSelectReverse(item, index)}
                style={styles.inputButton}>
                <Text style={styles.inputText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => `input-${index}`}
          />
        )}
        <TouchableOpacity
          style={styles.micButton}
          disabled={!isVoiceActive}
          onPressIn={startRecognizing}
          onPressOut={stopRecognizing}>
          <Icon name="Mic" color="#282828" />
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          onClick={() => {
            setIsVoiceActive(!isVoiceActive);
            textInputValue.forEach((item: any, index: any) =>
              handleSelectReverse(item, index),
            );
            setTextInputValue([]);
          }}
          isChecked={isVoiceActive}
          rightText="Sesli yanıtla"
          rightTextStyle={styles.checkboxText}
          checkBoxColor="green"
        />
        <Text style={styles.remainingText}>
          Kalan Soru: {remainingQuestionCount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    gap: 10,
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
  voiceInputArea: {
    borderColor: 'green',
    borderWidth: 2,
    shadowColor: 'green',
  },
  voiceInput: {
    fontSize: 16,
    color: 'black',
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
  micButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    opacity: 0.5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    borderRadius: 8,
    width: 'auto',
    height: 'auto',
    alignSelf: 'flex-start',
  },
  checkboxText: {
    flex: 0,
    marginLeft: 2,
    color: 'black',
  },
  remainingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AnswerInputComponent;
