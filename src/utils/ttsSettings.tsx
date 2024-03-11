import Tts from 'react-native-tts';

export const ttsSettings = () => {
  Tts.setDefaultLanguage('en-US');
  Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
  Tts.setDefaultRate(0.5);
  Tts.setDefaultPitch(1);
};
