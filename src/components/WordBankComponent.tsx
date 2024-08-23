import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const WordBankComponent = ({meaning, handleSelect, isVoiceActive}: any) => {
  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={meaning}
        renderItem={({item, getIndex, drag}: any) => (
          <TouchableOpacity
            onLongPress={drag}
            onPress={() => handleSelect(item, getIndex() || 0)}
            disabled={isVoiceActive}
            style={styles.draggableItem}>
            <Text style={styles.draggableText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `draggable-item-${index}`}
        onDragEnd={({data}) => console.log('data', data)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  draggableItem: {
    backgroundColor: '#227C9D',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  draggableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WordBankComponent;
