import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  Sos: undefined;
  Translation: undefined;
  SubCategory: {title: string};
};

export type BottomNavigatorList = {
  Home: undefined;
};
