import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
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

  console.log(videos);

  const menuItem = ({item}: {item: SubCategory}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          item.page &&
          navigation.navigate(item.page as any, {
            title: item.mainCategory,
            item: item,
          })
        }
        key={item.id}
        style={styles.button}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={videos}
        renderItem={({item}) => menuItem({item})}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const {width} = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
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
    width: ITEM_WIDTH,
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  text: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default Videos;
