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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (text: string) => {
    const formattedEmail = text.toLowerCase().replace(/\s/g, '');
    setEmail(formattedEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formattedEmail)) {
      setEmailError('Geçerli bir e-posta adresi giriniz');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Parolalar eşleşmiyor');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = async () => {
    if (emailError || !validatePassword()) {
      showMessage('Lütfen tüm alanları kontrol ediniz.', 'error');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
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
                routes: [{name: 'Home'}],
              },
            },
          ],
        });
      } else {
        showMessage('Kayıt işlemi başarısız oldu. Lütfen tekrar deneyiniz.', 'error');
      }
    } catch (error) {
      showMessage('Bağlantı hatası oluştu', 'error');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Toast />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={logo}
              style={styles.logo}
            />
            <View style={styles.betaBadge}>
              <Text style={styles.betaText}>BETA</Text>
            </View>
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.welcomeText}>Hesap Oluştur</Text>
            <Text style={styles.infoText}>
              Self English uygulamasına hoşgeldiniz. Lütfen aşağıdaki bilgileri
              girerek hesap oluşturun
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={[styles.inputContainer, emailError ? styles.inputError : null]}>
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

            <View style={[styles.inputContainer, passwordError ? styles.inputError : null]}>
              <TextInput
                style={styles.textInput}
                placeholder="Parola Tekrar"
                placeholderTextColor={'#9CA3AF'}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

            <View style={styles.accountPromptContainer}>
              <Text style={styles.accountPromptText}>
                Zaten bir hesabınız var mı?
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleLogin}
                style={styles.loginPromptButton}>
                <Text style={styles.loginPromptText}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              activeOpacity={0.7}
              onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Kayıt Ol</Text>
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
    backgroundColor: '#FFFFFF',
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
  accountPromptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  accountPromptText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4B5563',
  },
  loginPromptButton: {
    marginLeft: 8,
  },
  loginPromptText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#F3602D',
  },
  registerButton: {
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
  registerButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default Register;
