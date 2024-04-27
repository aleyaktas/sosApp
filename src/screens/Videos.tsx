import React from 'react';
import {
  View,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {videos} from '../utils/data';
import MenuItem from '../components/MenuItem';
import {ScreenProp} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {SubCategory} from './SubCategory';

const Videos = () => {
  const navigation = useNavigation<ScreenProp>();
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
          marginTop: 12,
        }}
        data={videos}
        renderItem={({item}) => menuItem({item})}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 24,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginVertical: 12,
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
    width: 60,
    height: 60,
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default Videos;
