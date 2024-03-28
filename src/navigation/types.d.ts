import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  Sos: undefined;
  Translation: undefined;
  SubCategory: undefined;
};

export type BottomNavigatorList = {
  Home: undefined;
};
