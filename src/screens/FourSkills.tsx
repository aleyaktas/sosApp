import React from 'react';
import {View, FlatList} from 'react-native';
import {fourSkills} from '../utils/data';
import MenuItem from '../components/MenuItem';

const FourSkills = () => {
  return (
    <View>
      <FlatList
        data={fourSkills}
        renderItem={({item}) => <MenuItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default FourSkills;
