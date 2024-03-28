import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../navigation/types';
import {subCategory} from '../utils/data';

export interface SubCategory {
  id: number;
  title: string;
  description: string;
  image: any;
  page: string;
}

const SubCategory = () => {
  const navigation = useNavigation<ScreenProp>();
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View>
        {subCategory.map((item: SubCategory) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => item.page && navigation.navigate(item.page as never)}
            key={item.id}
            style={{
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
            }}>
            <Image source={item.image} style={{width: 60, height: 60}} />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
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

export default SubCategory;
