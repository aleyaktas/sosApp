import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
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
  irregularV3Sentences,
} from '../utils/irregularVerbs';
import {IVerbsSentences, IrregularVerb} from '../types/IVerb';

const IVerbsModal = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<IrregularVerb[]>([]);
  const [sentences, setSentences] = useState<IVerbsSentences>(
    irregularV1Sentences[0],
  );
  const [search, setSearch] = useState<string>('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [totalSentences, setTotalSentences] = useState<number>(0);
  const {isModalVisible, toggleModal} = useContext(ModalContext);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const end = page * 20;
    if (search === '') {
      setData(irregularVerbs.slice(0, end));
    } else {
      handleSearch();
    }
  }, [page]);

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    let total = 0;
    if (sentences.sentences) {
      total = sentences.sentences.length;
    }
    setTotalSentences(total);
  }, [sentences.word]);

  useEffect(() => {
    console.log('sentences', sentences);
    console.log('currentSentenceIndex', currentSentenceIndex);
  }, [sentences, currentSentenceIndex]);

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

  const handleSearch = () => {
    const result = irregularVerbs.filter(
      el =>
        el.v1.toLowerCase().includes(search.toLowerCase()) ||
        el.v2.toLowerCase().includes(search.toLowerCase()) ||
        el.v3.toLowerCase().includes(search.toLowerCase()) ||
        el.mean.toLowerCase().includes(search.toLowerCase()),
    );
    console.log('result', result);
    setData(result);
  };

  const handleClose = () => {
    toggleModal();
    setCurrentSentenceIndex(0);
    setSentences(irregularV1Sentences[0]);
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
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Icon name="Close" />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <Icon name="Search" color="black" width={18} height={18} />
            <TextInput
              style={styles.searchInput}
              placeholder="Ara..."
              placeholderTextColor="#333"
              value={search}
              onChangeText={setSearch}
            />
            {search !== '' && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setSearch('')}>
                <Icon name="Close" color="black" width={18} height={18} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.wrapper}>
            <View style={styles.table}>
              <View style={styles.head}>
                <Text style={styles.headText}>V1</Text>
                <Text style={styles.headText}>V2</Text>
                <Text style={styles.headText}>V3</Text>
                <Text style={styles.headText}>Meaning</Text>
              </View>
              {data.length > 0 ? (
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
                        <Text style={[styles.text, styles.green]}>
                          {item.v1}
                        </Text>
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
                        <Text style={[styles.text, styles.blue]}>
                          {item.v2}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.rowButton}
                        onPress={() => {
                          handleVoice(item.v3);
                          setCurrentSentenceIndex(0);
                          setSentences(
                            irregularV3Sentences.find(
                              el => el.word === item.v3,
                            ) || irregularV3Sentences[0],
                          );
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
              ) : (
                <View style={styles.emptyData}>
                  <Text style={styles.emptyDataText}>
                    Kelime bulunamadı, lütfen başka bir kelime deneyin.
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.footer}>
            <Icon name="Stars" color="#26954B" width={28} height={28} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.footerTextContainer}
              onPress={() =>
                handleVoice(sentences.sentences[currentSentenceIndex])
              }>
              <Text style={styles.footerText}>
                {sentences.sentences[currentSentenceIndex]}
              </Text>
            </TouchableOpacity>
            <View style={styles.arrowsContainer}>
              <TouchableOpacity onPress={navigatePrevious} activeOpacity={0.7}>
                <Icon name="UpArrow" color="#26954B" width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateNext} activeOpacity={0.7}>
                <Icon name="DownArrow" color="#26954B" width={24} height={24} />
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 14,
    color: '#333',
  },
  clearButton: {},
  emptyData: {
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  },
  emptyDataText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    padding: 7,
    textAlign: 'center',
  },
});
