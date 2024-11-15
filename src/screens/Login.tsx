import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {AuthNavigationProps} from '../navigation/AuthNavigator';
import {showMessage} from '../utils/showMessage';
import Toast from '../components/Toast';
import Icon from '../themes/Icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';
import logo from '../assets/icons/logo.png';

const Login: FC<AuthNavigationProps> = ({navigation}) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const fetchRememberedUser = async () => {
      const rememberedUsername = await AsyncStorage.getItem('email');
      const rememberedPassword = await AsyncStorage.getItem('password');
      if (rememberedUsername && rememberedPassword) {
        setMail(rememberedUsername);
        setPassword(rememberedPassword);
        setRememberMe(true);
      }
    };
    fetchRememberedUser();
  }, []);

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const res = await fetch('https://kelibu.net/api/sos/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-Custom-Header': 'Hilal',
        },
        body: formData,
      });

      const data = await res.json();

      AsyncStorage.setItem('userId', JSON.stringify(data.user.id));

      if (res.status === 200 || res.status === 201) {
        if (rememberMe) {
          await AsyncStorage.multiSet([
            ['email', email],
            ['password', password],
          ]);
        } else {
          await AsyncStorage.multiRemove(['email', 'password']);
        }
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTabStack', state: {routes: [{name: 'Home'}]}}],
        });
      } else {
        showMessage(
          'Kullanıcı bulunamadı, bilgilerinizi kontrol edin',
          'error',
        );
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Toast />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.betaText}>Beta Version</Text>
        <View style={styles.mainContainer}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Hoş Geldiniz!</Text>
            <Text style={styles.infoText}>
              Self English ile İngilizce öğrenmeye hazır mısınız?
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="E-posta"
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={setMail}
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
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity
              style={styles.rememberMeButton}
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.7}>
              <Icon
                name={rememberMe ? 'CheckboxFilled' : 'Checkbox'}
                width={24}
                height={24}
                color="black"
              />
              <Text
                style={[
                  styles.forgotPasswordText,
                  {
                    textDecorationLine: 'none',
                  },
                ]}>
                Beni Hatırla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgotPasswordButton}
              activeOpacity={0.7}>
              <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.7}
            onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            activeOpacity={0.7}
            onPress={handleRegister}>
            <Text style={styles.registerText}>Kayıt Ol</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            PhD Akademi tarafından geliştirilmiştir.
          </Text>
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
  betaText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1F2937',
    textAlign: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
    fontStyle: 'italic',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  welcomeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1F2937',
    fontWeight: 'bold',
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1F2937',
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
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  registerButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  registerText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3602D',
  },
  rememberMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default Login;
