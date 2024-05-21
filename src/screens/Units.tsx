import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import MenuItem from '../components/MenuItem';

type UnitsRoute = Route<'Units', {title: string}>;

const Units = () => {
  const route = useRoute<UnitsRoute>();
  const title = route.params.title;
  const units = require(`../utils/data`)[`${title}FourSkillsUnits`];

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
