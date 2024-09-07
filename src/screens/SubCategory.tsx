import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import MenuItem from '../components/MenuItem';

export interface SubCategory {
  id: number;
  title: string;
  mainCategory?: string;
  description?: string;
  image?: any;
  page: string;
  disabled?: boolean;
}

type SubCategoryRoute = Route<'SubCategory', {title: string}>;

const SubCategory = () => {
  const route = useRoute<SubCategoryRoute>();
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
