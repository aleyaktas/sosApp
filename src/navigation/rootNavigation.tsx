import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SosTable from '../screens/SosTable';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ModalContext} from '../contexts/ModalContext';
import {Text} from 'react-native';
import Units from '../screens/Units';
import Videos from '../screens/Videos';
import Notes from '../screens/Notes';
import NoteDetails from '../screens/NoteDetails';
import VideoDetails from '../screens/VideoDetails';
import Tests from '../screens/Tests';
import MultipleChoice from '../screens/MultipleChoice';
import UnitChoices from '../screens/UnitChoices';
import ThereIsAreSosTable from '../screens/ThereIsAreSosTable';
import SubCategory from '../screens/SubCategory';
import ModalsSosTable from '../screens/ModalsSosTable';
import TranslationNavigator from './TranslationNavigator';
import AuthNavigator from './AuthNavigator';
import BottomTabsNavigator from './BottomTabsNavigator';
import FourSkillsNavigator from './FourSkillNavigatior';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const {toggleModal} = useContext(ModalContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#E6EFF1'},
      }}>
      <Stack.Screen name="AuthStack" component={AuthNavigator} />
      <Stack.Screen name="BottomTabStack" component={BottomTabsNavigator} />
      <Stack.Screen name="FourSkillsStack" component={FourSkillsNavigator} />
      <Stack.Screen name="TranslationStack" component={TranslationNavigator} />
      <Stack.Screen
        name="Sos"
        component={SosTable}
        options={{
          headerTitle: 'Sos',
          headerShown: true,
          headerTitleAlign: 'center',
          headerRightContainerStyle: {right: 20},

          headerRight: () => (
            <TouchableOpacity onPress={() => toggleModal()} activeOpacity={0.7}>
              <Text style={styles.headerRight}>Irregular</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SubCategory"
        component={SubCategory}
        options={{
          headerTitle: 'Konular',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Units"
        component={Units}
        options={{
          headerTitle: 'Üniteler',
          headerShown: true,
          headerTitleAlign: 'center',
          cardStyle: {backgroundColor: 'red'},
        }}
      />
      <Stack.Screen
        name="UnitChoices"
        component={UnitChoices}
        options={{
          headerTitle: 'Üniteler',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{
          headerTitle: 'Videolar',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{
          headerTitle: 'Notlar',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="NoteDetails"
        component={NoteDetails}
        options={{
          headerTitle: 'Not Detayı',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="VideoDetails"
        component={VideoDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tests"
        component={Tests}
        options={{
          headerTitle: 'Testler',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="MultipleChoice"
        component={MultipleChoice}
        options={{
          headerTitle: 'Multiple Choice',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ThereIsAreSosTable"
        component={ThereIsAreSosTable}
        options={{
          headerTitle: 'Sos Tablosu',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="ModalsSosTable"
        component={ModalsSosTable}
        options={{
          headerTitle: 'Modal Uygulaması',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#1292B4',
    fontSize: 16,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});

export default RootNavigation;
