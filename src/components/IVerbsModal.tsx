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
import {
  irregularV1Sentences,
  irregularV2Sentences,
} from '../utils/irregularVerbs';
import {IVerbsSentences, IrregularVerb} from '../types/IVerb';

const IVerbsModal = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<IrregularVerb[]>([]);
  const [sentences, setSentences] = useState<IVerbsSentences>(
    irregularV1Sentences[0],
  );
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [totalSentences, setTotalSentences] = useState<number>(0);
  const {isModalVisible, toggleModal} = useContext(ModalContext);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const end = page * 20;
    setData(irregularVerbs.slice(0, end));
  }, [page]);

  useEffect(() => {
    let total = 0;
    for (const key in sentences) {
      if (sentences.hasOwnProperty(key)) {
        if (sentences[key as keyof IVerbsSentences]) {
          total++;
        }
      }
    }
    setTotalSentences(total);
  }, [sentences]);

  const navigatePrevious = () => {
    setCurrentSentenceIndex(prevIndex =>
      prevIndex === 0 ? totalSentences - 3 : prevIndex - 1,
    );
  };

  const navigateNext = () => {
    setCurrentSentenceIndex(prevIndex =>
      prevIndex === totalSentences - 3 ? 0 : prevIndex + 1,
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
                renderItem={({item}) => (
                  <View style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.rowButton}
                      onPress={() => {
                        handleVoice(item.v1);
                        setCurrentSentenceIndex(0);
                        setSentences(
                          irregularV1Sentences.find(
                            el => el.word === item.v1,
                          ) || irregularV1Sentences[0],
                        );
                      }}>
                      <Text style={[styles.text, styles.green]}>{item.v1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.rowButton}
                      onPress={() => {
                        handleVoice(item.v2);
                        setCurrentSentenceIndex(0);
                        setSentences(
                          irregularV2Sentences.find(
                            el => el.word === item.v2,
                          ) || irregularV2Sentences[0],
                        );
                      }}>
                      <Text style={[styles.text, styles.blue]}>{item.v2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.rowButton}
                      onPress={() => {
                        handleVoice(item.v3);
                        // handleVerbSentences(item.v3);
                      }}>
                      <Text style={[styles.text, styles.purple]}>
                        {item.v3}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.rowButton}
                      activeOpacity={0.7}>
                      <Text style={[styles.table_meaning, styles.bold]}>
                        {item.mean}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Icon name="Stars" color="#26954B" width={28} height={28} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.footerTextContainer}
              onPress={() =>
                handleVoice(
                  sentences[
                    `sentence${
                      currentSentenceIndex + 1
                    }` as keyof IVerbsSentences
                  ] ?? '',
                )
              }>
              <Text style={styles.footerText}>
                {
                  sentences[
                    `sentence${
                      currentSentenceIndex + 1
                    }` as keyof IVerbsSentences
                  ]
                }
              </Text>
            </TouchableOpacity>
            <View style={styles.arrowsContainer}>
              <TouchableOpacity onPress={navigatePrevious} activeOpacity={0.7}>
                <Icon name="UpArrow" color="#26954B" width={20} height={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateNext} activeOpacity={0.7}>
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
  rowButton: {
    width: '25%',
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
