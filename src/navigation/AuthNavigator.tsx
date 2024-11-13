import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {BottomTabParamList} from './BottomTabsNavigator';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  BottomTabStack: BottomTabParamList;
};

export type AuthNavigationProps = {
  navigation: StackNavigationProp<AuthStackParamList>;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#E6EFF1'},
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
