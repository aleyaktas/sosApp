import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {AuthNavigationProps} from '../navigation/AuthNavigator';
import {showMessage} from '../utils/showMessage';
import Toast from '../components/Toast';
import Icon from '../themes/Icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';
import logo from '../assets/icons/logo.png';

const {width} = Dimensions.get('window');

const Login: FC<AuthNavigationProps> = ({navigation}) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');

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

  const validateEmail = (text: string) => {
    // Remove spaces and convert to lowercase
    const formattedEmail = text.toLowerCase().replace(/\s/g, '');
    setMail(formattedEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formattedEmail)) {
      setEmailError('Geçerli bir e-posta adresi giriniz');
    } else {
      setEmailError('');
    }
  };

  const handleLogin = async () => {
    if (emailError) {
      showMessage('Lütfen geçerli bir e-posta adresi giriniz', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
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
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.betaBadge}>
              <Text style={styles.betaText}>BETA</Text>
            </View>
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.welcomeText}>Hoş Geldiniz!</Text>
            <Text style={styles.infoText}>
              Self English ile İngilizce öğrenmeye hazır mısınız?
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View
              style={[
                styles.inputContainer,
                emailError ? styles.inputError : null,
              ]}>
              <TextInput
                style={styles.textInput}
                placeholder="E-posta"
                placeholderTextColor={'#9CA3AF'}
                value={email}
                onChangeText={validateEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Parola"
                placeholderTextColor={'#9CA3AF'}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={styles.rememberMeButton}
                onPress={() => setRememberMe(!rememberMe)}
                activeOpacity={0.7}>
                <Icon
                  name={rememberMe ? 'CheckboxFilled' : 'Checkbox'}
                  width={24}
                  height={24}
                  color={rememberMe ? '#F3602D' : '#9CA3AF'}
                />
                <Text style={styles.rememberMeText}>Beni Hatırla</Text>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,
    display: 'flex',
    gap: 24,
    alignItems: 'center',
  },
  logoContainer: {
    position: 'relative',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  betaBadge: {
    position: 'absolute',
    top: 0,
    right: -20,
    backgroundColor: '#F3602D',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    transform: [{rotate: '15deg'}],
  },
  betaText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  welcomeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1F2937',
    fontWeight: 'bold',
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    width: '100%',
    height: 52,
    paddingHorizontal: 16,
  },
  inputError: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: -8,
    marginLeft: 4,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#374151',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 4,
  },
  rememberMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rememberMeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4B5563',
  },
  forgotPasswordButton: {
    alignSelf: 'center',
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#F3602D',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3602D',
    borderRadius: 12,
    marginTop: 8,
    // Add shadow
    shadowColor: '#F3602D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  registerButton: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3602D',
  },
  registerText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3602D',
  },
  // rememberMeButton: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  footerText: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default Login;
