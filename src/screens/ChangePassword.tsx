import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {changePassword} from '../actions';

const ChangePassword = () => {
  const navigation = useNavigation();

  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [newPasswordAgain, setNewPasswordAgain] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Mevcut Şifre"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Yeni Şifre"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Yeni Şifre (Tekrar)"
        secureTextEntry
        value={newPasswordAgain}
        onChangeText={setNewPasswordAgain}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          if (newPassword !== newPasswordAgain) {
            Alert.alert('Şifreler uyuşmuyor.');
            return;
          } else {
            changePassword(currentPassword, newPassword);
          }
        }}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f9f9f9'},
  backButton: {marginBottom: 20},
  backText: {fontSize: 16, color: '#555'},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 20},
  input: {
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {color: 'white', fontSize: 16},
});

export default ChangePassword;
