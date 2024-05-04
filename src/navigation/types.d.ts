import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  Sos: undefined;
  Translation: {title: string};
  SubCategory: {title: string};
  FourSkills: {title?: string};
  Units: {title: string};
  Videos: {title?: string};
};

export type BottomNavigatorList = {
  Home: undefined;
};
