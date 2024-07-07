import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {fourSkills} from '../utils/data';
import MenuItem from '../components/MenuItem';
import {Route, useRoute} from '@react-navigation/native';
import {QuestionContext} from '../contexts/QuestionContext';

export interface FourSkills {
  id: number;
  title: string;
  mainCategory?: string;
  description?: string;
  image: any;
  page: string;
}

type FourSkillsRoute = Route<'FourSkills', {title: string; item?: any}>;

const FourSkills = () => {
  const route = useRoute<FourSkillsRoute>();
  const uniteNo = route.params.item.id;

  const {fetchText, setUniteno, setType} = useContext(QuestionContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        data={fourSkills}
        renderItem={({item}) => (
          <MenuItem
            item={item}
            onPress={() => {
              setUniteno(uniteNo);
              setType(item.page);
              fetchText(uniteNo, item.page);
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default FourSkills;
