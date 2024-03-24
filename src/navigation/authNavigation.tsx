import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {BottomTabParamList} from './bottomTabsNavigation';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  BottomTabs: BottomTabParamList;
};

export type AuthNavigationProps = {
  navigation: StackNavigationProp<AuthStackParamList>;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
