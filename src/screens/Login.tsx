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

const Login: FC<AuthNavigationProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
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
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.infoText}>
            Please enter the information below to login Sos App
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor={'gray'}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            activeOpacity={0.7}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.7}
            onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            activeOpacity={0.7}
            onPress={handleRegister}>
            <Text style={styles.registerText}>Register</Text>
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
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1F2937',
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4B5563',
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5e5',
    borderRadius: 4,
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
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151954',
    borderRadius: 4,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  registerButton: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  registerText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#151954',
  },
});

export default Login;