import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../navigation/types';
import {Categories} from '../utils/data';

const Home = () => {
  const navigation = useNavigation<ScreenProp>();
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      <View>
        {Categories.map(item => (
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={
              item.title !== 'Zamanlar' &&
              item.title !== 'Sorular' &&
              item.title !== 'There is / There are' &&
              item.title !== 'RC - NC'
            }
            onPress={() =>
              navigation.navigate('SubCategory', {
                title: item.mainCategory,
              })
            }
            key={item.id}
            style={[
              styles.categoriesButton,
              {
                backgroundColor:
                  item.title === 'Zamanlar' ||
                  item.title === 'Sorular' ||
                  item.title === 'There is / There are' ||
                  item.title === 'RC - NC'
                    ? 'white'
                    : '#f5f5f5',
              },
            ]}>
            <Image source={item.image} style={{width: 60, height: 60}} />
            <View style={styles.categoriesContainer}>
              <Text
                style={[
                  styles.categoriesTitle,
                  {
                    color:
                      item.title === 'Zamanlar' ||
                      item.title === 'Sorular' ||
                      item.title === 'There is / There are' ||
                      item.title === 'RC - NC'
                        ? 'black'
                        : 'darkgray',
                  },
                ]}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoriesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Home;
