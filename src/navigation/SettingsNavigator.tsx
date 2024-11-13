import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';
import ChangePassword from '../screens/ChangePassword';
import NotificationSettings from '../screens/NotificationSettings';

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        cardStyle: {backgroundColor: '#f9f9f9'},
      }}>
      <Stack.Screen
        name="SettingsHome"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerTitle: 'Profili Düzenle'}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerTitle: 'Şifre Değiştir'}}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{headerTitle: 'Bildirim Ayarları'}}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
