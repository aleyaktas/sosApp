import React, {useContext, useEffect, useState} from 'react';
import {Modal, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
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
  const [newCategories, setNewategories] = useState<any[]>([]);
  const [newLevels, setNewLevels] = useState<any[]>([]);

  const navigation = useNavigation<ScreenProp>();
  const {
    categories,
    levels,
    setSelectedLevel,
    setSelectedSubject,
    loading,
    selectedLevel,
    selectedSubject,
  } = useContext(MultipleChoiceContext);

  useEffect(() => {
    const transformedLevels = levels.map(level => ({
      label: level.baslik,
      value: level.id,
    }));

    setNewLevels(transformedLevels);

    const transformedCategories = categories.map(category => ({
      label: category.baslik,
      value: category.id,
    }));

    setNewategories(transformedCategories);
  }, [categories, levels]);

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
            items={newLevels}
            style={pickerSelectStyles}
          />
          <RNPickerSelect
            onValueChange={value => setSelectedSubject(value)}
            items={newCategories}
            style={pickerSelectStyles}
          />
          <TouchableOpacity
            style={{...styles.openButton}}
            activeOpacity={0.6}
            onPress={() => showQuestionsPress()}>
            <Text style={styles.textStyle}>
              {loading && selectedLevel && selectedSubject ? (
                <Text>Yükleniyor</Text>
              ) : (
                <Text>Soruları Gör</Text>
              )}
            </Text>
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
    paddingRight: 30, // to ensure the text is never behind the icon
    width: '100%', // make sure the picker takes full width
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: '100%', // make sure the picker takes full width
  },
});

export default MultipleChoiceModal;
