import {ToTranslation} from './../utils/translation';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import Translation from '../screens/Translation/TensesTranslation';

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList> &
  AuthNavigatorProps &
  TranslationNavigatorProps &
  FourSkillsNavigatorProps;

export type TranslationStackParamList = {
  Translation: {title: string; item?: any};
  QuestionsTranslation: {title: string; item?: any};
  RcNcTranslation: {title: string; item?: any};
  PassiveTranslation: {title: string; item?: any};
  Conjunctions1GTranslation: {title: string; item?: any};
  Conjunctions2GTranslation: {title: string; item?: any};
  Conjunctions3GTranslation: {title: string; item?: any};
  ComparativesSuperlativesTranslation: {title: string; item?: any};
  FlowerToTranslation: {item: ToTranslation};
  ImpersonalItTranslation: {title: string; item?: any};
  IfClausesTranslation: {title: string; item?: any};
  PrepositionsTranslation: {title: string; item?: any};
};

export type FourSkillsStackParamList = {
  FourSkills: {title?: string; item?: any};
  Listening: undefined;
  Writing: undefined;
  Speaking: undefined;
  Vocabulary: undefined;
  WritingList: undefined;
  SpeakingList: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type StackNavigatorList = {
  Sos: {title: string; item?: any};
  SubCategory: {title: string; item?: any};
  Units: {title: string; item?: any};
  UnitChoices: {title: string; item?: any};
  Videos: {title?: string; item?: any};
  Notes: {title: string; item?: any};
  NoteDetails: {title?: string; pdfName: string; item?: any};
  VideoDetails: {title?: string; item?: any};
  Listening: {title?: string; item?: any};
  Tests: {title: string; item?: any};
  MultipleChoice: undefined;
  Vocabulary: {title?: string; item?: any};
};

export type BottomNavigatorList = {
  Home: undefined;
};

export type TranslationNavigatorProps = {
  navigation: StackNavigationProp<TranslationStackParamList>;
};

export type FourSkillsNavigatorProps = {
  navigation: StackNavigationProp<FourSkillsStackParamList>;
};

export type AuthNavigatorProps = {
  navigation: StackNavigationProp<AuthStackParamList>;
};

export type RootStackParamList = {
  AuthStack: undefined;
  BottomTabStack: undefined;
  FourSkillsStack: undefined;
  TranslationStack: undefined;
  Sos: {title: string; item?: any};
  SubCategory: {title: string; item?: any};
  Units: {title: string; item?: any};
  UnitChoices: {title: string; item?: any};
  Videos: {title: string; item?: any};
  Notes: {title: string; item?: any};
  NoteDetails: {title: string; pdfName: string; item?: any};
  VideoDetails: {title: string; item?: any};
  Listening: {title: string; item?: any};
  Tests: {title: string; item?: any};
  MultipleChoice: undefined;
  Vocabulary: {title: string; item?: any};
};
