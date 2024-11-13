import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../navigation/types';
import {Categories} from '../utils/data';
import Icon from '../themes/Icon';
import {deleteAccount} from '../actions';

const Settings = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Icon name="User" color="gray" width={70} height={70} />
        </View>
        <Text style={styles.username}>Kullanıcı Adı</Text>
        <Text style={styles.email}>user@example.com</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() =>
            navigation.navigate('Settings', {
              screen: 'EditProfile',
            })
          }>
          <Icon name="Pencil" color="gray" width={20} height={20} />
          <Text style={styles.optionText}>Profili Düzenle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() =>
            navigation.navigate('Settings', {
              screen: 'ChangePassword',
            })
          }>
          <Icon name="Lock" color="gray" width={20} height={20} />
          <Text style={styles.optionText}>Şifre Değiştir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() =>
            navigation.navigate('Settings', {
              screen: 'NotificationSettings',
            })
          }>
          <Icon name="Notification" color="gray" width={20} height={20} />
          <Text style={styles.optionText}>Bildirim Ayarları</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.extraOptionsContainer}>
        <TouchableOpacity style={styles.extraOptionButton}>
          <Text style={styles.extraOptionText}>Gizlilik Politikası</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.extraOptionButton}>
          <Text style={styles.extraOptionText}>Yardım ve Destek</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.extraOptionButton}
          onPress={() => {
            Alert.alert(
              'Hesabınızı silmek istediğinize emin misiniz?',
              'Bu işlem geri alınamaz.',
              [
                {
                  text: 'Vazgeç',
                  style: 'cancel',
                },
                {
                  text: 'Sil',
                  style: 'destructive',
                  onPress: () => deleteAccount(),
                },
              ],
            );
          }}>
          <Text style={styles.extraOptionText}>Hesabı Sil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.extraOptionButton]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.extraOptionText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  profileSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: 'white',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderColor: '#ddd',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  extraOptionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  extraOptionButton: {
    padding: 14,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  extraOptionText: {
    fontSize: 15,
    color: '#555',
  },
});

export default Settings;
