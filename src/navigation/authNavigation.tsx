import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {BottomTabParamList} from './bottomTabsNavigation';

// Define the ParamList type for the stack navigator
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  BottomTabs: BottomTabParamList;
};

// Define the navigation prop types for Login and Register screens
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
