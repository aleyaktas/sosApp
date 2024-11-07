import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {AuthNavigationProps} from '../navigation/authNavigation';
import {showMessage} from '../utils/showMessage';
import Toast from '../components/Toast';
import {Image} from 'react-native';
import logo from '../assets/icons/logo.png';

const Register: FC<AuthNavigationProps> = ({navigation}) => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async () => {
    navigation.navigate('Login');
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      showMessage('Parolalar eşleşmiyor. Lütfen kontrol ediniz.', 'error');
      return;
    }
    const formData = new FormData();
    formData.append('email', email);
    // formData.append('name', name);
    formData.append('password', password);
    formData.append('phone', '0');
    formData.append('points', '0');

    const res = await fetch('https://kelibu.net/api/kelibu/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Custom-Header': 'Hilal',
      },
      body: formData,
    });
    if (res.status === 200 || res.status === 201) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'BottomTabs',
            state: {
              index: 0,
              routes: [
                {
                  name: 'Home',
                },
              ],
            },
          },
        ],
      });
    } else {
      showMessage('Bir hata oluştu. Lütfen tekrar deneyiniz.', 'error');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Toast />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContainer}>
          <Image
            source={logo}
            style={{
              width: 120,
              height: 120,
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <Text style={styles.welcomeText}>Hesap Oluştur</Text>
            <Text style={styles.infoText}>
              Self English uygulamasına hoşgeldiniz. Lütfen aşağıdaki bilgileri
              girerek hesap oluşturun
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="E-posta"
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Parola"
              placeholderTextColor={'gray'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Parola Tekrar"
              placeholderTextColor={'gray'}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <View style={styles.accountPromptContainer}>
            <Text style={styles.accountPromptText}>
              Zaten bir hesabınız var mı?
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleLogin()}
              style={styles.loginPromptButton}>
              <Text style={styles.loginPromptText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.7}
            onPress={() => {
              handleRegister();
            }}>
            <Text style={styles.loginButtonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  },
  welcomeText: {
    // fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1F2937',
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    borderRadius: 8,
    width: '100%',
    height: 48,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Poppins-Light',
    color: '#374151',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3602D',
    borderRadius: 8,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  accountPromptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  accountPromptText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#374151',
  },
  loginPromptButton: {
    marginLeft: 4,
  },
  loginPromptText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#F3602D',
  },
});

export default Register;
