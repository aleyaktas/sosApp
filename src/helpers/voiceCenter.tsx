import {Platform} from 'react-native';
import Tts from 'react-native-tts';

// Manually classify some voice IDs as male or female
export const handleVoice = async (
  sentence: string,
  gender: 'male' | 'female' = 'male',
) => {
  const maleVoiceIdsForAndroid = ['en-us-x-tpm-local', 'en-us-x-iom-local'];
  const femaleVoiceIdsForAndroid = ['en-us-x-tpf-local', 'en-us-x-sfg-local'];

  const maleVoiceIdsForIOS = [
    'com.apple.ttsbundle.Moira-compact',
    'com.apple.ttsbundle.Moira-premium',
  ];
  const femaleVoiceIdsForIOS = [
    'com.apple.ttsbundle.Samantha-compact',
    'com.apple.ttsbundle.Samantha-premium',
  ];

  const voices = await Tts.voices();

  try {
    await Tts.getInitStatus();
    Tts.setDefaultLanguage('en-US'); // Dili isteğe göre ayarlayın

    let selectedVoiceId = null;

    if (Platform.OS === 'ios') {
      if (gender === 'male') {
        // Erkek sesi için ilk uygun ID'yi bul
        selectedVoiceId = maleVoiceIdsForIOS.find(voiceId =>
          voices.some(voice => voice.id === voiceId),
        );
      } else {
        // Kadın sesi için ilk uygun ID'yi bul
        selectedVoiceId = femaleVoiceIdsForIOS.find(voiceId =>
          voices.some(voice => voice.id === voiceId),
        );
      }
    }

    if (Platform.OS === 'android') {
      if (gender === 'male') {
        // Erkek sesi için ilk uygun ID'yi bul
        selectedVoiceId = maleVoiceIdsForAndroid.find(voiceId =>
          voices.some(voice => voice.id === voiceId),
        );
      } else {
        // Kadın sesi için ilk uygun ID'yi bul
        selectedVoiceId = femaleVoiceIdsForAndroid.find(voiceId =>
          voices.some(voice => voice.id === voiceId),
        );
      }
    }

    if (selectedVoiceId) {
      Tts.setDefaultVoice(selectedVoiceId);
      console.log(`Seçilen ses: ${selectedVoiceId}`);
    } else {
      console.warn(`Belirtilen cinsiyet için uygun bir ses bulunamadı.`);
    }

    // Cümleyi seslendir
    Tts.speak(sentence);
  } catch (error) {
    console.error(
      'TTS başlatılırken veya sesler alınırken hata oluştu:',
      error,
    );
  }
};
