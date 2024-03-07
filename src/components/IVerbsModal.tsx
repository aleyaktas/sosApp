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
import irregularVerbs from '../utils/irregularVerbs.json';
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

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

              width: '100%',
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 'auto'}}>
              Irregular Verbs
            </Text>
            <TouchableOpacity
              style={{
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 8,
                padding: 5,
                marginLeft: 'auto',
              }}
              activeOpacity={0.7}
              onPress={toggleModal}>
              <Icon name="Close" />
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <View style={styles.table}>
              <View style={styles.table_head}>
                <View style={{width: '25%'}}>
                  <Text style={styles.table_head_captions}>V1</Text>
                </View>
                <View style={{width: '25%'}}>
                  <Text style={styles.table_head_captions}>V2</Text>
                </View>
                <View style={{width: '25%'}}>
                  <Text style={styles.table_head_captions}>V3</Text>
                </View>
                <View style={{width: '25%'}}>
                  <Text style={styles.table_head_captions}>Meaning</Text>
                </View>
              </View>
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => handlePageChange(page + 1)}
                onEndReachedThreshold={0.5}
                initialNumToRender={20}
                renderItem={({item}) => (
                  <View style={styles.table_body_single_row}>
                    <TouchableOpacity
                      style={{width: '25%'}}
                      onPress={() => handleVoice(item.v1)}>
                      <Text style={styles.table_data}>{item.v1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{width: '25%'}}
                      onPress={() =>
                        handleVoice(item.v2 === 'read' ? 'red' : item.v2)
                      }>
                      <Text style={styles.table_data}>{item.v2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{width: '25%'}}
                      onPress={() =>
                        handleVoice(item.v3 === 'read' ? 'red' : item.v3)
                      }>
                      <Text style={styles.table_data}>{item.v3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '25%'}}>
                      <Text style={styles.table_meaning}>{item.mean}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
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
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 7,
    backgroundColor: '#3bcd6b',
  },
  table_head_captions: {
    fontSize: 15,
    padding: 5,
    color: 'white',
  },

  table_body_single_row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 7,
  },
  table_data: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
  },
  table_meaning: {
    fontSize: 12,
    padding: 5,
  },
  table: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: '#fff',
  },
});
