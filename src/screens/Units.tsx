import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../navigation/types';
import {units} from '../utils/data';
import MenuItem from '../components/MenuItem';

export interface SubCategory {
  id: number;
  title: string;
  description: string;
  image: any;
  page: string;
}

const Units = () => {
  const navigation = useNavigation<ScreenProp>();
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View>
        <FlatList
          data={units}
          renderItem={({item}) => <MenuItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Units;
