import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {subCategory} from '../utils/data';
import {SubCategory} from '../screens/SubCategory';
import {ScreenProp} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';

const MenuItem = ({item}: {item: SubCategory}) => {
  const navigation = useNavigation<ScreenProp>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => item.page && navigation.navigate(item.page as never)}
      key={item.id}
      style={styles.button}>
      <Image source={item.image} style={{width: 60, height: 60}} />
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
  image: {
    width: 60,
    height: 60,
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default MenuItem;
