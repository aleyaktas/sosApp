import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NotificationSettings = () => {
  const navigation = useNavigation();
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarları Düzenle</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Push Bildirimleri</Text>
        <Switch
          value={pushNotifications}
          onValueChange={setPushNotifications}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>E-posta Bildirimleri</Text>
        <Switch
          value={emailNotifications}
          onValueChange={setEmailNotifications}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f9f9f9'},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 12},
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  settingText: {fontSize: 16, color: '#333'},
});

export default NotificationSettings;
