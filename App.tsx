/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Home from './src/screens/SosTable';
import RootNavigation from './src/navigation/rootNavigation';
import {ModalProvider} from './src/contexts/ModalContext';
import {QuestionProvider} from './src/contexts/QuestionContext';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <ModalProvider>
          <QuestionProvider>
            <RootNavigation />
          </QuestionProvider>
        </ModalProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
