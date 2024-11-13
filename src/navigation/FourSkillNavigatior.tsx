import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FourSkills from '../screens/FourSkills';
import Listening from '../screens/Listening';
import Speaking from '../screens/Speaking';
import Writing from '../screens/Writing';
import WritingList from '../screens/WritingList';
import SpeakingList from '../screens/SpeakingList';
import Vocabulary from '../screens/Vocabulary';

const Stack = createStackNavigator();

const FourSkillsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerShown: true,
      cardStyle: {backgroundColor: '#E6EFF1'},
    }}>
    <Stack.Screen
      name="FourSkills"
      component={FourSkills}
      options={{headerTitle: 'Dört Beceri'}}
    />
    <Stack.Screen
      name="Vocabulary"
      component={Vocabulary}
      options={{
        headerTitle: 'Kelime Bilgisi',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Listening"
      component={Listening}
      options={{headerTitle: 'Listening'}}
    />
    <Stack.Screen
      name="Reading"
      component={Listening}
      options={{headerTitle: 'Reading'}}
    />
    <Stack.Screen
      name="Speaking"
      component={Speaking}
      options={{headerTitle: 'Speaking'}}
    />
    <Stack.Screen
      name="Writing"
      component={Writing}
      options={{headerTitle: 'Writing'}}
    />
    <Stack.Screen
      name="WritingList"
      component={WritingList}
      options={{headerTitle: 'Writing List'}}
    />
    <Stack.Screen
      name="SpeakingList"
      component={SpeakingList}
      options={{headerTitle: 'Speaking List'}}
    />
  </Stack.Navigator>
);

export default FourSkillsNavigator;
