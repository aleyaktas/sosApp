import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Translation from '../screens/Translation/TensesTranslation';
import QuestionsTranslation from '../screens/Translation/QuestionsTranslation';
import RcNcTranslation from '../screens/Translation/RcNcTranslation';
import ActivePassiveTranslation from '../screens/Translation/PassiveTranslation';
import Conjunctions1GTranslation from '../screens/Translation/Conjunctions1GTranslation';
import Conjunctions2GTranslation from '../screens/Translation/Conjunctions2GTranslation';
import Conjunctions3GTranslation from '../screens/Translation/Conjunctions3GTranslation';
import ComparativesSuperlativesTranslation from '../screens/Translation/ComparativesSuperlatives';
import AAnTheTranslation from '../screens/Translation/AAnTheTranslation';
import FlowerToTranslation from '../screens/Translation/FlowerToTranslation';
import ImpersonalItTranslation from '../screens/Translation/ImpersonalIt';
import IfClausesTranslation from '../screens/Translation/IfClausesTranslation';
import PrepositionsTranslation from '../screens/Translation/PrepositionsTranslation';
import AdjectivesAdverbTranslation from '../screens/Translation/AdjectivesAdverbTranslation';
import IndefinitePronounsTranslation from '../screens/Translation/IndefinitePronounsTranslation';
import ImperativesTranslation from '../screens/Translation/ImperativesTranslation';
import ExcitingExcitedTranslation from '../screens/Translation/ExcitingExcitedTranslation';
import GerundInfinitiveTranslation from '../screens/Translation/GerundInfinitiveTranslation';
import HaveHasTranslation from '../screens/Translation/HaveHasTranslation';
import LetsShallTranslation from '../screens/Translation/LetsShallTranslation';
import ModalsTranslation from '../screens/Translation/ModalsTranslation';
import PossessiveSOfTranslation from '../screens/Translation/PossessiveSOfTranslation';
import ThereIsAreTranslation from '../screens/Translation/ThereIsAreTranslation';
import PronounsTranslation from '../screens/Translation/PronounsTranslation';
import QuantifiersTranslation from '../screens/Translation/QuantifiersTranslation';

const Stack = createStackNavigator();

const TranslationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerShown: true,
      cardStyle: {backgroundColor: '#E6EFF1'},
    }}>
    <Stack.Screen
      name="Translation"
      component={Translation}
      options={{headerTitle: 'Çeviri Çalışması'}}
    />
    <Stack.Screen
      name="QuestionsTranslation"
      component={QuestionsTranslation}
      options={{headerTitle: 'Çeviri Çalışması'}}
    />
    <Stack.Screen
      name="RcNcTranslation"
      component={RcNcTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="PassiveTranslation"
      component={ActivePassiveTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Conjunctions1GTranslation"
      component={Conjunctions1GTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Conjunctions2GTranslation"
      component={Conjunctions2GTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Conjunctions3GTranslation"
      component={Conjunctions3GTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="ComparativesSuperlativesTranslation"
      component={ComparativesSuperlativesTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="FlowerToTranslation"
      component={FlowerToTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="ImpersonalItTranslation"
      component={ImpersonalItTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="IfClausesTranslation"
      component={IfClausesTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="PrepositionsTranslation"
      component={PrepositionsTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="AAnTheTranslation"
      component={AAnTheTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="AdjectivesAdverbTranslation"
      component={AdjectivesAdverbTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="IndefinitePronounsTranslation"
      component={IndefinitePronounsTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="ImperativesTranslation"
      component={ImperativesTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="ExcitingExcitedTranslation"
      component={ExcitingExcitedTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="GerundInfinitiveTranslation"
      component={GerundInfinitiveTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="HaveHasTranslation"
      component={HaveHasTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="LetsShallTranslation"
      component={LetsShallTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="ModalsTranslation"
      component={ModalsTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="PossessiveSOfTranslation"
      component={PossessiveSOfTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="ThereIsAreTranslation"
      component={ThereIsAreTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="PronounsTranslation"
      component={PronounsTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="QuantifiersTranslation"
      component={QuantifiersTranslation}
      options={{
        headerTitle: 'Çeviri Çalışması',
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

export default TranslationNavigator;
