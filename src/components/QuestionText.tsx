import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

interface QuestionTextProps {
  title: string;
  text: string;
  type: string;
}

const QuestionText: React.FC<QuestionTextProps> = ({title, text, type}) => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  useEffect(() => {
    if (type === 'Listening') {
      setIsTextVisible(false);
    }
  }, [type]);

  return (
    <View style={[styles.card, styles.textCard]}>
      <ScrollView
        style={{
          maxHeight: Dimensions.get('window').height / 3,
        }}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle} numberOfLines={3}>
              {title}
            </Text>
          </View>
          <TouchableOpacity onPress={toggleTextVisibility}>
            <Text style={styles.toggleButtonText}>
              {isTextVisible ? 'Gizle' : 'Göster'}
            </Text>
          </TouchableOpacity>
        </View>
        <Collapsible collapsed={!isTextVisible}>
          <View style={styles.collapsibleContent}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </Collapsible>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  textCard: {
    padding: 16,
    borderColor: '#FFCB77',
    borderWidth: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    gap: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333',
    marginBottom: 8,
    fontSize: 16,
    flex: 1,
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
  collapsibleContent: {
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default QuestionText;
