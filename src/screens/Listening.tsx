import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import BubbleOne from '../assets/icons/BubbleOne.png';
import BubbleTwo from '../assets/icons/BubbleTwo.png';
import Icon from '../themes/Icon';
import {handleVoice} from '../helpers/voiceCenter';
import Collapsible from 'react-native-collapsible';

const Listening = () => {
  const readingText = `Emily is a teacher. She is young and friendly. She gets up early every day. She is up at 7:00 a.m. Emily lives in a nice house. Her house is big and comfortable. In the morning, Emily is busy. First, she makes coffee. She loves coffee. She drinks coffee and eats bread with jam for breakfast. After breakfast, Emily goes to work. Her school is not far. It is near her house. At school, Emily is happy. She likes her job. She teaches small children. They are young and cute. Emily eats lunch at school. She usually eats a sandwich and an apple. After school, Emily goes home. She is tired but she is also happy. At home, she often reads a book. Emily likes books. She eats dinner at 7:00 p.m. Her dinner is simple. Sometimes, she watches TV after dinner. Emily goes to bed early. She is in bed at 10:00 p.m.`;

  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={BubbleOne} style={styles.bubbleOne} />
      <Image source={BubbleTwo} style={styles.bubbleTwo} />
      <View style={styles.contentContainer}>
        <ScrollView style={styles.card}>
          <View
            style={{
              padding: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                <Text style={styles.cardTitle}>Emily's Day</Text>
                <TouchableOpacity onPress={() => handleVoice(readingText)}>
                  {/* <Image source={PlayAudio} width={30} height={30} /> */}
                  <Icon name="PlayAudio" width={30} height={30} color="green" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={toggleTextVisibility}>
                <Text style={styles.toggleButtonText}>
                  {isTextVisible ? 'Gizle' : 'Göster'}
                </Text>
              </TouchableOpacity>
            </View>
            <Collapsible collapsed={!isTextVisible}>
              <Text style={styles.text}>{readingText}</Text>
            </Collapsible>
          </View>
        </ScrollView>

        <View
          style={[
            styles.card,
            {
              padding: 16,
            },
          ]}>
          <Text style={styles.cardTitle}>What time does Emily get up?</Text>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>A) at 7:00 a.m.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>B) at 8:00 a.m.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>C) at 9:00 a.m.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>D) at 10:00 a.m.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 20,
    position: 'relative',
    flexShrink: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 12,
  },
  bubbleOne: {
    position: 'absolute',
    top: -60,
    left: -40,
    width: 150,
    height: 170,
  },
  bubbleTwo: {
    position: 'absolute',
    bottom: -40,
    right: -40,
    transform: [{rotate: '180deg'}],
    width: 150,
    height: 150,
  },
  card: {
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  choice: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  choiceText: {
    fontSize: 16,
    color: '#333',
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Listening;
