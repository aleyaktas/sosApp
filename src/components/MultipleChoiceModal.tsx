import React, {useContext, useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {MultipleChoiceContext} from '../contexts/MultipleChoiceContext';
import {ScreenProp} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from '../themes/Icon';

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
    setSelectedLevels,
    setSelectedSubjects,
    selectedLevels,
    selectedSubjects,
    categories,
    levels,
    loading,
    questions,
    fetchQuestions,
    selectedQuestionCount,
    setSelectedQuestionCount,
  } = useContext(MultipleChoiceContext);

  const navigation = useNavigation<ScreenProp>();
  const [openLevels, setOpenLevels] = useState(false);
  const [openSubjects, setOpenSubjects] = useState(false);
  const [openQuestionCount, setOpenQuestionCount] = useState(false);
  const [numberArr, setNumberArr] = useState<number[]>([]);

  console.log('categories', categories);

  useEffect(() => {
    if (selectedLevels.length > 0 && selectedSubjects.length > 0) {
      fetchQuestions().then(res => {
        createNumberArr(res.length);
      });
    }
  }, [selectedLevels, selectedSubjects]);

  const createNumberArr = (length: number) => {
    if (length < 10) {
      setNumberArr(Array.from({length: length}, (_, i) => i + 1));
    } else {
      const arr = [];
      for (let i = 0; i < length; i += 10) {
        arr.push(i);
      }

      setNumberArr(arr);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        navigation.goBack();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{
              marginLeft: 'auto',
              marginBottom: 10,
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 4,
              borderColor: '#c4c4c4',
              borderWidth: 1,
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
              navigation.goBack();
            }}>
            <Icon name="Close" color="black" width={20} height={20} />
          </TouchableOpacity>
          <Text style={styles.modalText}>
            Soruları görmek için seviye ve konu seçiniz
          </Text>
          <View
            style={{
              gap: 10,
            }}>
            <DropDownPicker
              open={openLevels}
              zIndex={1000}
              style={{
                width: '100%',
                borderColor: '#c4c4c4',
                borderWidth: 1,
              }}
              value={selectedLevels}
              multiple={true}
              items={levels.map(level => ({
                label: level.baslik,
                value: level.id,
              }))}
              closeOnBackPressed={true}
              setOpen={() => {
                setOpenSubjects(false);
                setOpenLevels(!openLevels);
                setOpenQuestionCount(false);
              }}
              setValue={(value: any) => setSelectedLevels(value)}
              setItems={(items: any) => console.log('items', items)}
              placeholder="Seviye Seçiniz"
              mode="BADGE"
              badgeDotColors={[
                '#e76f51',
                '#00b4d8',
                '#e9c46a',
                '#e76f51',
                '#8ac926',
                '#00b4d8',
                '#e9c46a',
              ]}
            />
            <DropDownPicker
              open={openSubjects}
              zIndex={999}
              style={{
                width: '100%',
                borderColor: '#c4c4c4',
                borderWidth: 1,
              }}
              value={selectedSubjects}
              multiple={true}
              items={categories.map(level => ({
                label: level.baslik,
                value: level.id,
              }))}
              setOpen={() => {
                setOpenLevels(false);
                setOpenSubjects(!openSubjects);
                setOpenQuestionCount(false);
              }}
              setValue={(value: any) => setSelectedSubjects(value)}
              setItems={(items: any) => console.log('items', items)}
              placeholder="Kategori Seçiniz"
              mode="BADGE"
              badgeDotColors={[
                '#e76f51',
                '#00b4d8',
                '#e9c46a',
                '#e76f51',
                '#8ac926',
                '#00b4d8',
                '#e9c46a',
              ]}
            />
            <DropDownPicker
              open={openQuestionCount}
              zIndex={998}
              style={{
                width: '100%',
                borderColor: '#c4c4c4',
                borderWidth: 1,
              }}
              value={
                selectedQuestionCount === undefined
                  ? null
                  : selectedQuestionCount
              }
              multiple={false}
              items={numberArr.map(level => ({
                label: level.toString(),
                value: level,
              }))}
              setOpen={() => {
                setOpenLevels(false);
                setOpenSubjects(false);
                setOpenQuestionCount(!openQuestionCount);
              }}
              setValue={(value: any) => setSelectedQuestionCount(value)}
              setItems={(items: any) => console.log('items', items)}
              placeholder="Soru Sayısı Seçiniz"
            />
          </View>

          <TouchableOpacity
            style={styles.openButton}
            activeOpacity={0.6}
            onPress={async () => {
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

export default MultipleChoiceModal;
