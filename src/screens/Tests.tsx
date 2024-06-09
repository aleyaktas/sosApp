import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import MenuItem from '../components/MenuItem';

type TestsRoute = Route<'Tests', {title: string}>;

const Tests = () => {
  const route = useRoute<TestsRoute>();
  const title = route.params.title;
  const tests = require(`../utils/data`)[`${title}SubTest`];

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View>
        <FlatList
          data={tests}
          renderItem={({item}) => <MenuItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Tests;
