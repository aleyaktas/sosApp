// BottomTabNavigation.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {RouteProp} from '@react-navigation/native';

export type BottomTabParamList = {
  Home: undefined;
  // Diğer ekranlar buraya eklenebilir
};

export type BottomTabNavigationProp<T extends keyof BottomTabParamList> = {
  navigation: {
    navigate: (screen: T) => void;
  } & RouteProp<BottomTabParamList, T>;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigation: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Sos Uygulaması',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
