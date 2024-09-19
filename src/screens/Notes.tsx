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

  console.log(title);
  const notes = require(`../utils/data`)[`${title}Notes`];

  console.log(notes);

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

export default Notes;
