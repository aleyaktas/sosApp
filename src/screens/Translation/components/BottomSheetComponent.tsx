import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../../../themes/Icon';
import {handleVoice} from '../../../helpers/voiceCenter';

const BottomSheetComponent = ({
  bottomSheetRef,
  isBottomSheetVisible,
  snapPoints,
  isAnswerTrue,
  answer,
  textInputValue,
  continueButton,
}: any) => {
  const renderCorrectAnswer = () => (
    <View style={styles.answerContainer}>
      <View style={styles.answerHeader}>
        <Icon name="TickFilled" color="#56A500" width={20} height={20} />
        <Text style={styles.correctAnswerText}>Tebrikler, doğru cevap!</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleVoice(answer)}
        style={styles.answerButtonHeader}>
        <Icon name="Sound" color="#56A500" width={20} height={20} />
        <Text style={styles.correctAnswerText}>{answer}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={continueButton}
        style={[styles.answerButton, styles.correctButton]}>
        <Text style={styles.answerButtonText}>DEVAM ET</Text>
      </TouchableOpacity>
    </View>
  );

  const renderIncorrectAnswer = () => (
    <View style={styles.answerContainer}>
      <View style={styles.answerHeader}>
        <Icon name="CloseFilled" color="#DE3F41" width={24} height={24} />
        <Text style={styles.incorrectAnswerText}>Üzgünüm, yanlış cevap!</Text>
      </View>
      <View style={styles.answerHeader}>
        <Icon name="RightArrow" color="#DE3F41" width={20} height={20} />
        <Text style={styles.incorrectAnswerText}>
          {textInputValue.join(' ')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleVoice(answer)}
        style={styles.answerButtonHeader}>
        <Icon name="Sound" color="#56A500" width={20} height={20} />
        <Text style={styles.correctAnswerText}>{answer}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={continueButton}
        style={[styles.incorrectButton, styles.answerButton]}>
        <Text style={styles.answerButtonText}>TAMAM</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isBottomSheetVisible ? 0 : -1}
      snapPoints={snapPoints}>
      <BottomSheetView
        style={[
          styles.bottomSheetContainer,
          {
            backgroundColor: isAnswerTrue ? '#C8EFAE' : '#F8D9DC',
            opacity: 0.9,
          },
        ]}>
        {isAnswerTrue ? renderCorrectAnswer() : renderIncorrectAnswer()}
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  answerContainer: {
    flex: 1,
    padding: 20,
    gap: 6,
  },
  answerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  correctAnswerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#56A500',
  },
  incorrectAnswerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DE3F41',
  },
  answerButtonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingRight: 8,
  },
  answerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    bottom: 0,
    marginTop: 'auto',
  },
  correctButton: {
    backgroundColor: '#57CC06',
  },
  incorrectButton: {
    backgroundColor: '#FF4B4C',
  },
  answerButtonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default BottomSheetComponent;
