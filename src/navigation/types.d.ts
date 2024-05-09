import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  Sos: {title: string; item?: any};
  Translation: {title: string; item?: any};
  SubCategory: {title: string; item?: any};
  FourSkills: {title?: string; item?: any};
  Units: {title: string; item?: any};
  Videos: {title?: string; item?: any};
  Notes: {title: string; item?: any};
  NoteDetails: {title?: string; pdfName: string; item?: any};
  VideoDetails: {title?: string; item?: any};
};

export type BottomNavigatorList = {
  Home: undefined;
};
