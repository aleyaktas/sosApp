import Tts from 'react-native-tts';

export const handleVoice = (sentence: string) => {
  Tts.setDefaultLanguage('en-US');
  Tts.getInitStatus().then(() => {
    Tts.speak(sentence);
  });
};
