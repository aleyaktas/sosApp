import {Route, useRoute} from '@react-navigation/native';
import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import MenuItem from '../components/MenuItem';

export interface Notes {
  id: number;
  title: string;
  pdfUrl: string;
  image: any;
}
type NotesRoute = Route<'Notes', {title: string}>;

const Notes = () => {
  const route = useRoute<NotesRoute>();
  const title = route.params.title;
  const notes = require(`../utils/data`)[`${title}Notes`];

  return (
    <View>
      <FlatList
        data={notes}
        renderItem={({item}) => <MenuItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Notes;
