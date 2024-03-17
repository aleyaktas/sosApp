import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {irregularVerbs} from '../utils/irregularVerbs';
import Icon from '../themes/Icon';
import {handleVoice} from '../helpers/voiceCenter';
import {ModalContext} from '../contexts/ModalContext';

interface IrregularVerb {
  v1: string;
  v2: string;
  v3: string;
  mean: string;
}

const IVerbsModal = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<IrregularVerb[]>([]);
  const {isModalVisible, toggleModal} = useContext(ModalContext);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const end = page * 20;
    setData(irregularVerbs.slice(0, end));
  }, [page]);

  const renderItem = ({item}: {item: IrregularVerb}) => {
    const handleVerbPress = (verb: string) => {
      const voice = verb === 'read' ? 'red' : verb;
      handleVoice(voice);
    };

    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={{width: '25%'}}
          onPress={() => handleVoice(item.v1)}>
          <Text style={[styles.text, styles.green]}>{item.v1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '25%'}}
          onPress={() => handleVoice(item.v2 === 'read' ? 'red' : item.v2)}>
          <Text style={[styles.text, styles.blue]}>{item.v2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '25%'}}
          onPress={() => handleVoice(item.v3 === 'read' ? 'red' : item.v3)}>
          <Text style={[styles.text, styles.purple]}>{item.v3}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '25%'}}>
          <Text style={[styles.table_meaning, styles.bold]}>{item.mean}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Irregular Verbs</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Icon name="Close" />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.table}>
              <View style={styles.head}>
                <Text style={styles.headText}>V1</Text>
                <Text style={styles.headText}>V2</Text>
                <Text style={styles.headText}>V3</Text>
                <Text style={styles.headText}>Meaning</Text>
              </View>
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => handlePageChange(page + 1)}
                onEndReachedThreshold={0.5}
                initialNumToRender={20}
                renderItem={renderItem}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Icon name="Stars" color="#26954B" width={28} height={28} />
            <TouchableOpacity style={styles.footerTextContainer}>
              <Text style={styles.footerText}>
                I always arise at 7 o'clock to start my day, I always arise at 7
                o'clock to start my day
              </Text>
            </TouchableOpacity>
            <View style={styles.arrowsContainer}>
              <TouchableOpacity>
                <Icon name="UpArrow" color="#26954B" width={20} height={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="DownArrow" color="#26954B" width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default IVerbsModal;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  table_head: {
    flexDirection: 'row',
    borderColor: '#ddd',
    padding: 7,
    backgroundColor: '#26954B',
  },
  table_meaning: {
    fontSize: 12,
    paddingVertical: 7,
  },
  table: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
  },
  table1: {
    marginHorizontal: 15,
    backgroundColor: '#fff',
  },
  head: {
    flexDirection: 'row',
    borderColor: '#ddd',
    padding: 7,
    backgroundColor: '#26954B',
  },
  headText: {
    flex: 1,
    fontSize: 14,
    padding: 7,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    borderColor: '#ddd',
    paddingHorizontal: 7,
  },
  column: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 7,
  },
  bold: {
    fontWeight: 'bold',
  },
  green: {
    color: '#fb6f92',
  },
  blue: {
    color: '#3e7cb1',
  },
  purple: {
    color: '#59356e',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#e6ffff',
    borderTopColor: 'green',
    borderTopWidth: 0.6,
  },
  footerTextContainer: {
    flex: 1,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  arrowsContainer: {
    flexDirection: 'column',
    gap: 10,
  },
});
