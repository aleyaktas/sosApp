import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface MenuItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: any;
  };
  onPress: () => void;
}

const SpeakingMenuItem: React.FC<MenuItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'black',
    flex: 1,
  },
});

export default SpeakingMenuItem;
