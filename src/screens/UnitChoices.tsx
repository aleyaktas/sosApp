import React, {useContext, useEffect} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import MenuItem from '../components/MenuItem';
import {QuestionContext} from '../contexts/QuestionContext';

type UnitsRoute = Route<'Units', {title: string; item: any}>;

const UnitChoices = () => {
  const route = useRoute<UnitsRoute>();
  const title = route.params.title;
  const uniteno = route.params.item.id;
  const [units, setUnits] = React.useState<any>([]);
  const {fetchText, setUniteno, setType} = useContext(QuestionContext);

  useEffect(() => {
    console.log('title', title);
    title === 'Tenses'
      ? setUnits(require(`../utils/data`)[`${title}UnitChoices`])
      : setUnits(require(`../utils/data`)[`${title}Units`]);
  }, [title]);

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View>
        <FlatList
          data={units}
          renderItem={({item}) => (
            <MenuItem
              item={item}
              onPress={() => {
                if (title !== 'Tenses') {
                  setUniteno(uniteno);
                  setType('clozetest');
                  fetchText(uniteno, 'clozetest');
                }
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default UnitChoices;
