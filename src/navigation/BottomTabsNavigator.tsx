import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from '../themes/Icon';
import SettingsNavigator from './SettingsNavigator';

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Konular',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          headerRightContainerStyle: {paddingRight: 20},
          tabBarIcon: () => <Icon name="Home" color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          headerRightContainerStyle: {paddingRight: 20},
          tabBarIcon: () => <Icon name="User" color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;
