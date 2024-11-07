import React, {useContext, useEffect, useState, useMemo} from 'react';
import {QuestionContext} from '../contexts/QuestionContext';
import {Route, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../themes/Icon';
import {handleVoice} from '../helpers/voiceCenter';

type VocabularyRoute = Route<'Vocabulary', {title?: string; item?: any}>;

export interface IVocabulary {
  unitNumber: number;
  words: {
    word: string;
    mean: string;
  }[];
}

export interface IWords {
  word: string;
  mean: string;
}

const Vocabulary = () => {
  const {uniteno} = useContext(QuestionContext);
  const route = useRoute<VocabularyRoute>();
  const title = route.params.title;
  const vocabularyList = require(`../utils/data`)[`${title}Vocabulary`];

  const [search, setSearch] = useState<string>('');
  const [vocabulary, setVocabulary] = useState<IWords[]>([]);
  const [starredWords, setStarredWords] = useState<IWords[]>([]);
  const [showStarredFirst, setShowStarredFirst] = useState<boolean>(false);

  useEffect(() => {
    const findUnitVoc = vocabularyList.find(
      (voc: IVocabulary) => String(voc.unitNumber) == uniteno,
    );
    if (findUnitVoc) {
      setVocabulary(findUnitVoc.words);
    }
    loadStarredWords();
  }, [vocabularyList]);

  useEffect(() => {
    filterAndSortVocabulary();
  }, [search, showStarredFirst, starredWords]);

  const filterAndSortVocabulary = () => {
    const findUnitVoc = vocabularyList.find(
      (voc: IVocabulary) => String(voc.unitNumber) == uniteno,
    );
    if (findUnitVoc) {
      const filteredVocabulary =
        search === ''
          ? findUnitVoc.words
          : findUnitVoc.words.filter((word: IWords) =>
              word.word.toLowerCase().includes(search.toLowerCase()),
            );

      const sortedVocabulary = showStarredFirst
        ? [
            ...filteredVocabulary.filter(word => isStarred(word)),
            ...filteredVocabulary.filter(word => !isStarred(word)),
          ]
        : filteredVocabulary;

      setVocabulary(sortedVocabulary);
    }
  };

  const loadStarredWords = async () => {
    try {
      const storedData = await AsyncStorage.getItem(`starredWords_${title}`);
      if (storedData) {
        setStarredWords(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Failed to load starred words:', error);
    }
  };

  const toggleStar = async (word: IWords) => {
    let updatedStarredWords = [...starredWords];
    if (isStarred(word)) {
      updatedStarredWords = updatedStarredWords.filter(
        w => w.word !== word.word,
      );
    } else {
      updatedStarredWords.push(word);
    }

    setStarredWords(updatedStarredWords);

    try {
      await AsyncStorage.setItem(
        `starredWords_${title}`,
        JSON.stringify(updatedStarredWords),
      );
    } catch (error) {
      console.error('Failed to save starred words:', error);
    }
  };

  const isStarred = (word: IWords) => {
    return starredWords.some(w => w.word === word.word);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
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

      {/* Toggle Button for Showing Starred Words First */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowStarredFirst(!showStarredFirst)}>
        <Text style={styles.toggleButtonText}>
          {showStarredFirst ? 'Tümünü Göster' : 'Yıldızlıları Öne Çıkar'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={vocabulary}
        renderItem={({item}) => (
          <View style={styles.wordContainer}>
            <TouchableOpacity
              onPress={() => handleVoice(item.word)}
              activeOpacity={0.7}
              style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Icon name="Sound" color="#000" width={20} height={20} />
              <Text style={styles.word}>{item.word}</Text>
            </TouchableOpacity>
            <Text style={styles.mean}>{item.mean}</Text>
            <TouchableOpacity
              onPress={() => toggleStar(item)}
              activeOpacity={0.7}
              style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Icon
                name={isStarred(item) ? 'Star' : 'StarOutline'}
                color="brown"
                width={24}
                height={24}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  clearButton: {
    padding: 10,
  },
  toggleButton: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    gap: 16,
    width: '100%',
  },
  word: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  mean: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
});

export default Vocabulary;
