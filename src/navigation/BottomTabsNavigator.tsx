import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from '../themes/Icon';
import SettingsNavigator from './SettingsNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Auth',
              state: {
                routes: [
                  {
                    name: 'Login',
                  },
                ],
              },
            },
          ],
        }),
      );
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleLogout}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <Text style={{color: '#F3602D', fontSize: 16}}>Çıkış</Text>
    </TouchableOpacity>
  );
};

const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Ana Sayfa',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'black',
          headerRightContainerStyle: {paddingRight: 20},
          headerRight: () => <LogoutButton />,
          tabBarLabel: 'Konular',
          tabBarIcon: ({color}) => (
            <Icon name="Home" color={color} width={24} height={24} />
          ),
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
