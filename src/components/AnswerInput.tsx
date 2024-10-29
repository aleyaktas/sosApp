import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from '../themes/Icon'; // Adjust the path if needed

type AnswerInputProps = {
  inputText: string;
  onInputChange: (text: string) => void;
  isAnswerVisible: boolean;
  answer: string;
  onPressIn: () => void; // Starts voice recognition
  onPressOut: () => void; // Stops voice recognition
  checkAnswer: () => void; // Function to validate answer
};

const AnswerInput: React.FC<AnswerInputProps> = ({
  inputText,
  onInputChange,
  isAnswerVisible,
  answer,
  onPressIn,
  onPressOut,
  checkAnswer,
}) => (
  <View style={styles.answerContainer}>
    {/* Text Input and Mic Button */}
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Bir şeyler yazın..."
        onChangeText={onInputChange}
        value={inputText}
        style={styles.inputText}
        placeholderTextColor="#282828"
      />
      <TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut}>
        <Icon name="Mic" color="#282828" width={20} height={20} />
      </TouchableOpacity>
    </View>

    {/* Submit Button */}
    <TouchableOpacity
      style={[
        styles.answerButton,
        {opacity: isAnswerVisible || !answer || !inputText ? 0.5 : 1},
      ]}
      activeOpacity={0.7}
      disabled={isAnswerVisible || !answer || !inputText}
      onPress={checkAnswer}>
      <Text style={styles.answerButtonText}>Cevapla</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  answerContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  inputText: {
    flex: 1,
    color: 'black',
  },
  answerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32936f',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 16,
  },
  answerButtonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default AnswerInput;
