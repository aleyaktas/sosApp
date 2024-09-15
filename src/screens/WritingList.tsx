import React, {useContext, useEffect} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import MenuItem from '../components/MenuItem';
import {QuestionContext} from '../contexts/QuestionContext';

type UnitsRoute = Route<'Units', {title: string; item: any}>;

const WritingList = () => {
  const route = useRoute<UnitsRoute>();
  // const title = route.params.title;

  const [units, setUnits] = React.useState<any>([]);
  const {fetchText, setUniteno, setType, uniteno} = useContext(QuestionContext);

  const [count, setCount] = React.useState(0);

  const getImageByIndex = (index: number) => {
    const images: any = {
      1: require('../assets/images/numbers/1.png'),
      2: require('../assets/images/numbers/2.png'),
      3: require('../assets/images/numbers/3.png'),
      4: require('../assets/images/numbers/4.png'),
      5: require('../assets/images/numbers/5.png'),
    };

    return images[index] || require('../assets/images/numbers/1.png');
  };

  useEffect(() => {
    fetch(
      `https://phdakademi.com/api/sos/questionsSpeakingWriting?type=Writing&uniteno=${uniteno}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        setCount(data.length);
      })
      .catch(err => console.log(err));
  }, []);

  const itemsArray = Array.from({length: count}, (_, index) => ({
    id: index + 1,
    title: `Writing ${index + 1}`,
    description: `Writing ${index + 1}`,
    mainCategory: 'Tenses',
    page: 'Writing',
    image: getImageByIndex(index + 1),
  }));

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View>
        <FlatList
          data={itemsArray}
          renderItem={({item}) => (
            <MenuItem
              item={item}
              onPress={() => {
                setUniteno(uniteno);
                setType('Speaking');
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default WritingList;
