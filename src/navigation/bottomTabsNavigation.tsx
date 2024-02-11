import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from '../themes/Icon';
import {RouteProp} from '@react-navigation/native';

export type BottomTabParamList = {
  Home: undefined;
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
          headerTitle: 'Sos Tablosu',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          // headerShown: false,
          tabBarIcon: () => <Icon name="Home" color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
