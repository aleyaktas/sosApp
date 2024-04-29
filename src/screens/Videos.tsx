import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {ScreenProp} from '../navigation/types';
import {Route, useNavigation, useRoute} from '@react-navigation/native';
import {SubCategory} from './SubCategory';

type VideosRoute = Route<'Videos', {title: string}>;

const Videos = () => {
  const navigation = useNavigation<ScreenProp>();
  const route = useRoute<VideosRoute>();
  const title = route.params.title;
  const videos = require(`../utils/data`)[`${title}Videos`];

  const menuItem = ({item}: {item: SubCategory}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => item.page && navigation.navigate(item.page as never)}
        key={item.id}
        style={styles.button}>
        <Image source={item.image} style={{width: 30, height: 30}} />
        <View style={styles.text}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          marginTop: 20,
          marginHorizontal: 12,
        }}
        data={videos}
        renderItem={({item}) => menuItem({item})}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          gap: 16,
          marginVertical: 8,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,

    flex: 1,
    backgroundColor: 'white',

    borderWidth: 0.3,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default Videos;
