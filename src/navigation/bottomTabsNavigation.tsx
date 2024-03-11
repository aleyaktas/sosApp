import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SosTable from '../screens/SosTable';
import Home from '../screens/Home';
import Icon from '../themes/Icon';
import {RouteProp} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {ModalContext} from '../contexts/ModalContext';

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
  const {toggleModal} = useContext(ModalContext);
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Konular',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => toggleModal()} activeOpacity={0.7}>
          //     <Icon name="Info" color="#3bcd6b" width={28} height={28} />
          //   </TouchableOpacity>
          // ),
          headerRightContainerStyle: {paddingRight: 20},
          tabBarIcon: () => <Icon name="Home" color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
