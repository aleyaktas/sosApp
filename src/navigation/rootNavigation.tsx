import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './authNavigation';
import BottomTabsNavigation from './bottomTabsNavigation';
import SosTable from '../screens/SosTable';
import {TouchableOpacity} from 'react-native';
import {ModalContext} from '../contexts/ModalContext';
import SubCategory from '../screens/SubCategory';
import {Text} from 'react-native';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const {toggleModal} = useContext(ModalContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthNavigation} />
      <Stack.Screen name="BottomTabs" component={BottomTabsNavigation} />
      <Stack.Screen
        name="Sos"
        component={SosTable}
        options={{
          headerTitle: 'Sos',
          headerShown: true,
          headerTitleAlign: 'center',
          headerRightContainerStyle: {right: 20},
          headerRight: () => (
            <TouchableOpacity onPress={() => toggleModal()} activeOpacity={0.7}>
              <Text
                style={{
                  color: 'white',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  backgroundColor: '#3bcd6b',
                  fontSize: 16,
                  borderRadius: 5,
                  fontWeight: 'bold',
                }}>
                Irregular
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SubCategory"
        component={SubCategory}
        options={{
          headerTitle: 'Konular',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
