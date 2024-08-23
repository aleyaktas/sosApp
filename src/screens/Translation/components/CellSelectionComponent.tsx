import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from '../../../themes/Icon';
import Blink from '../../../components/Blink';

const CellSelectionComponent = ({
  selectedCells,
  setSelectedCells,
  selectedCell,
}: any) => {
  const toggleCell = (cell: any) => {
    setSelectedCells((prev: any) => {
      if (prev.includes(cell)) {
        return prev.filter((item: any) => item !== cell);
      }
      return [...prev, cell];
    });
  };

  const renderCell = (cell: any, title: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => toggleCell(cell)}
      style={[
        styles.choiceCard,
        {
          borderColor: selectedCells.includes(cell) ? '#2CC2DB' : '#fff',
        },
        !selectedCells.includes(cell) && styles.shadow,
      ]}>
      <Text style={styles.cellText}>{title}</Text>
      {selectedCells.includes(cell) && selectedCell === cell ? (
        <Blink duration={500} style={styles.tickIconPosition}>
          <View style={styles.tickIconContainer}>
            <Icon name="Tick" color="#fff" width={24} height={24} />
          </View>
        </Blink>
      ) : selectedCells.includes(cell) ? (
        <View style={[styles.tickIconContainer, styles.tickIconPosition]}>
          <Icon name="Tick" color="#fff" width={24} height={24} />
        </View>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderCell('RC', 'Relative Clause')}
      {renderCell('NC', 'Noun Clause')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  choiceCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
    height: 80,
  },
  cellText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tickIconContainer: {
    backgroundColor: '#2CC2DB',
    borderRadius: 12,
    borderColor: '#2CC2DB',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tickIconPosition: {
    position: 'absolute',
    right: -10,
    top: -10,
  },
});

export default CellSelectionComponent;
