import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Kullanıcı Adı" />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.saveButton}>
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

export default EditProfile;
