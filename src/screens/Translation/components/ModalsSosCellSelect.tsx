import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from '../../../themes/Icon';
import Blink from '../../../components/Blink';

const ModalsSosCellSelectComponent = ({
  selectedCells,
  setSelectedCells,
  selectedCell,
  cells,
}: any) => {
  const toggleCell = (cell: any) => {
    setSelectedCells((prev: any) => {
      if (prev.includes(cell)) {
        return prev.filter((item: any) => item !== cell);
      }
      return [...prev, cell];
    });
  };

  const renderCell = (item: any) => (
    <TouchableOpacity
      onPress={() => toggleCell(item.value)}
      style={[
        styles.choiceCard,
        {
          borderColor: selectedCells.includes(item.value) ? '#32936f' : '#fff',
          minWidth: 50,
          minHeight: 50,
          alignSelf: cells.length === 1 ? 'center' : 'flex-start',
        },

        !selectedCells.includes(item.value) && styles.shadow,
      ]}>
      <Text style={styles.cellText}>{item.label}</Text>
      {selectedCells.includes(item.value) && selectedCell === item.value ? (
        <Blink duration={600} style={styles.tickIconPosition}>
          <View style={[styles.tickIconContainer]}>
            <Icon name="Tick" width={20} height={20} color="#fff" />
          </View>
        </Blink>
      ) : selectedCells.includes(item.value) ? (
        <View style={[styles.tickIconContainer, styles.tickIconPosition]}>
          <Icon name="Tick" width={20} height={20} color="#fff" />
        </View>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {cells.map((item: any) => {
        return renderCell(item);
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 8,
    columnGap: 12,
    paddingHorizontal: 0,
  },

  choiceCard: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
  },
  cellText: {
    fontSize: 14,
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
    backgroundColor: '#32936f',
    borderRadius: 8,
    borderColor: '#32936f',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 2,
  },
  tickIconPosition: {
    position: 'absolute',
    right: -10,
    top: -10,
  },
});

export default ModalsSosCellSelectComponent;
