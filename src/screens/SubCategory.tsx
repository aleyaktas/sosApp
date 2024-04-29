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
import {Route, useNavigation, useRoute} from '@react-navigation/native';
import {ScreenProp} from '../navigation/types';
// import {subCategory} from '../utils/data';
import MenuItem from '../components/MenuItem';

export interface SubCategory {
  id: number;
  title: string;
  description?: string;
  image: any;
  page: string;
}

type SubCategoryRoute = Route<'SubCategory', {title: string}>;

const SubCategory = () => {
  const navigation = useNavigation<ScreenProp>();
  const route = useRoute<SubCategoryRoute>();

  //dynamic import of data // navigation route name

  const title = route.params.title;
  const subCategory = require(`../utils/data`)[`${title}SubCategory`];

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View>
        <FlatList
          data={subCategory}
          renderItem={({item}) => <MenuItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default SubCategory;
