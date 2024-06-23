import React, {useContext} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {MultipleChoiceContext} from '../contexts/MultipleChoiceContext';
import {ScreenProp} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';

const MultipleChoiceModal = ({
  modalVisible,
  setModalVisible,
  showQuestionsPress,
}: {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  showQuestionsPress: () => void;
}) => {
  const {
    isModalVisible,
    setIsModalVisible,
    selectedLevel,
    setSelectedLevel,
    selectedSubject,
    setSelectedSubject,
    fetchCategoriesLevels,
    fetchQuestions,
    categories,
    levels,
    questions,
    loading,
  } = useContext(MultipleChoiceContext);

  const navigation = useNavigation<ScreenProp>();

  const shuffleArray = (array: any[]) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
        navigation.goBack();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Soruları görmek için seviye ve konu seçiniz
          </Text>
          <RNPickerSelect
            onValueChange={value => setSelectedLevel(value)}
            items={levels.map(level => ({
              label: level.baslik,
              value: level.id,
            }))}
            style={pickerSelectStyles}
          />
          <RNPickerSelect
            onValueChange={value => setSelectedSubject(value)}
            items={categories.map(category => ({
              label: category.baslik,
              value: category.id,
            }))}
            style={pickerSelectStyles}
          />
          <TouchableOpacity
            style={styles.openButton}
            activeOpacity={0.6}
            onPress={async () => {
              // if (!loading && selectedLevel && selectedSubject) {
              //   await fetchQuestions();
              // }
              await showQuestionsPress();
            }}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.textStyle}>Soruları Gör</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 20,
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    width: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    width: '100%',
  },
});

export default MultipleChoiceModal;
