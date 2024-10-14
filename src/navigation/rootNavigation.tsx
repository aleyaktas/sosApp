import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './authNavigation';
import BottomTabsNavigation from './bottomTabsNavigation';
import SosTable from '../screens/SosTable';
import {TouchableOpacity} from 'react-native';
import {ModalContext} from '../contexts/ModalContext';
import SubCategory from '../screens/SubCategory';
import {Text} from 'react-native';
import Translation from '../screens/Translation/TensesTranslation';
import Units from '../screens/Units';
import FourSkills from '../screens/FourSkills';
import Videos from '../screens/Videos';
import Notes from '../screens/Notes';
import NoteDetails from '../screens/NoteDetails';
import VideoDetails from '../screens/VideoDetails';
import Listening from '../screens/Listening';
import QuestionsTranslation from '../screens/Translation/QuestionsTranslation';
import Tests from '../screens/Tests';
import MultipleChoice from '../screens/MultipleChoice';
import Vocabulary from '../screens/Vocabulary';
import UnitChoices from '../screens/UnitChoices';
import ThereIsAreSosTable from '../screens/ThereIsAreSosTable';
import RcNcTranslation from '../screens/Translation/RcNcTranslation';
import ActivePassiveTranslation from '../screens/Translation/PassiveTranslation';
import Conjunctions1GTranslation from '../screens/Translation/Conjunctions1GTranslation';
import Conjunctions2GTranslation from '../screens/Translation/Conjunctions2GTranslation';
import Conjunctions3GTranslation from '../screens/Translation/Conjunctions3GTranslation';
import ComparativesSuperlativesTranslation from '../screens/Translation/ComparativesSuperlatives';
import AAnTheTranslation from '../screens/Translation/AAnTheTranslation';
import ToTranslation from '../screens/Translation/FlowerToTranslation';
import FlowerToTranslation from '../screens/Translation/FlowerToTranslation';
import ImpersonalItTranslation from '../screens/Translation/ImpersonalIt';
import IfClausesTranslation from '../screens/Translation/IfClausesTranslation';
import PrepositionsTranslation from '../screens/Translation/PrepositionsTranslation';
import Speaking from '../screens/Speaking';
import SpeakingList from '../screens/SpeakingList';
import WritingList from '../screens/WritingList';
import Writing from '../screens/Writing';
import AdjectivesAdverbTranslation from '../screens/Translation/AdjectivesAdverbTranslation';
import IndefinitePronounsTranslation from '../screens/Translation/IndefinitePronounsTranslation';
import ImperativesTranslation from '../screens/Translation/ImperativesTranslation';
import ExcitingExcitedTranslation from '../screens/Translation/ExcitingExcitedTranslation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const {toggleModal} = useContext(ModalContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthNavigation} />
      <Stack.Screen name="BottomTabs" component={BottomTabsNavigation} />
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
              <Text
                style={{
                  color: 'white',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  backgroundColor: '#1292B4',
                  fontSize: 16,
                  borderRadius: 5,
                  fontWeight: 'bold',
                }}>
                Irregular
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Translation"
        component={Translation}
        options={{
          headerTitle: 'Çeviri Çalışması',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="QuestionsTranslation"
        component={QuestionsTranslation}
        options={{
          headerTitle: 'Çeviri Çalışması',
          headerShown: true,
          headerTitleAlign: 'center',
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
        name="FourSkills"
        component={FourSkills}
        options={{
          headerTitle: 'Dört Beceri',
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
        name="Listening"
        component={Listening}
        options={{
          headerTitle: 'Listening',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Reading"
        component={Listening}
        options={{
          headerTitle: 'Reading',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="SpeakingList"
        component={SpeakingList}
        options={{
          headerTitle: 'SpeakingList',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Speaking"
        component={Speaking}
        options={{
          headerTitle: 'Speaking',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="WritingList"
        component={WritingList}
        options={{
          headerTitle: 'WritingList',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Writing"
        component={Writing}
        options={{
          headerTitle: 'Writing',
          headerShown: true,
          headerTitleAlign: 'center',
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
        name="Vocabulary"
        component={Vocabulary}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ThereIsAreSosTable"
        component={ThereIsAreSosTable}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="RcNcTranslation"
        component={RcNcTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PassiveTranslation"
        component={ActivePassiveTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Conjunctions1GTranslation"
        component={Conjunctions1GTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Conjunctions2GTranslation"
        component={Conjunctions2GTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Conjunctions3GTranslation"
        component={Conjunctions3GTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ComparativesSuperlativesTranslation"
        component={ComparativesSuperlativesTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="FlowerToTranslation"
        component={FlowerToTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ImpersonalItTranslation"
        component={ImpersonalItTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="IfClausesTranslation"
        component={IfClausesTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PrepositionsTranslation"
        component={PrepositionsTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AAnTheTranslation"
        component={AAnTheTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AdjectivesAdverbTranslation"
        component={AdjectivesAdverbTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="IndefinitePronounsTranslation"
        component={IndefinitePronounsTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ImperativesTranslation"
        component={ImperativesTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ExcitingExcitedTranslation"
        component={ExcitingExcitedTranslation}
        options={{
          headerTitle: 'Kelime Bilgisi',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
