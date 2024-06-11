import React, {useContext, useState} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {MultipleChoiceContext} from '../contexts/MultipleChoiceContext';

const MultipleChoiceModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}) => {
  const levelOptions = [
    {label: 'Seviye 1', value: 'level1'},
    {label: 'Seviye 2', value: 'level2'},
  ];

  const subjectOptions = [
    {label: 'Sağlık', value: 'health'},
    {label: 'Fen Bilimleri', value: 'science'},
    {label: 'Sosyal', value: 'social'},
  ];

  const {selectedLevel, setSelectedLevel, selectedSubject, setSelectedSubject} =
    useContext(MultipleChoiceContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* <Text style={styles.modalText}>
            Soruları görmek için seviye ve konu seçiniz
          </Text> */}
          <RNPickerSelect
            onValueChange={value => setSelectedLevel(value)}
            items={levelOptions}
            style={pickerSelectStyles}
          />
          <RNPickerSelect
            onValueChange={value => setSelectedSubject(value)}
            items={subjectOptions}
            style={pickerSelectStyles}
          />
          <TouchableOpacity
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Soruları Gör</Text>
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
    backgroundColor: '#F194FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 20,
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
