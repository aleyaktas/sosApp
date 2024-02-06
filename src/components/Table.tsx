import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../themes/Icon';

interface TableProps {}

const Table: React.FC<TableProps> = () => {
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);

  const handleCellPress = (cell: string) => {
    setSelectedCells(prevSelectedCells => {
      const isSelected = prevSelectedCells.includes(cell);
      if (isSelected) {
        // If already selected, remove from the array
        return prevSelectedCells.filter(selectedCell => selectedCell !== cell);
      } else {
        // If not selected, add to the array
        return [...prevSelectedCells, cell];
      }
    });
  };

  const handleBoxPress = (symbol: string) => {
    setSelectedSymbols(prevSelectedSymbols => {
      const isSelected = prevSelectedSymbols.includes(symbol);
      if (isSelected) {
        // If already selected, remove from the array
        return prevSelectedSymbols.filter(
          selectedSymbol => selectedSymbol !== symbol,
        );
      } else {
        // If not selected, add to the array
        return [...prevSelectedSymbols, symbol];
      }
    });
  };

  const isCellSelected = (cell: string) => selectedCells.includes(cell);
  const isSymbolSelected = (symbol: string) => selectedSymbols.includes(symbol);

  const renderRow = (rowHeader: string) => (
    <View style={styles.row} key={rowHeader}>
      <Text style={styles.header}>{rowHeader}</Text>
      {[1, 2, 3, 4].map(colHeader => (
        <TouchableOpacity
          key={colHeader}
          style={styles.cell}
          onPress={() => handleCellPress(`${rowHeader}${colHeader}`)}>
          <View style={[styles.radioButton]}>
            {isCellSelected(`${rowHeader}${colHeader}`) && <Icon name="Tick" />}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderBox = (symbol: string) => (
    <TouchableOpacity
      style={styles.box}
      key={symbol}
      onPress={() => handleBoxPress(symbol)}>
      <Text style={styles.symbol}>{symbol}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.emptyHeader} />
        {[1, 2, 3, 4].map(colHeader => (
          <Text key={colHeader} style={styles.header}>
            {colHeader}
          </Text>
        ))}
      </View>

      {['A', 'B', 'C'].map(rowHeader => renderRow(rowHeader))}

      <View style={styles.buttonContainer}>
        {renderBox('(+)')}
        {renderBox('(-)')}
        {renderBox('(?)')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  emptyHeader: {
    flex: 1,
  },
  cell: {
    flex: 1,
  },

  radioButton: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center', // Align content vertically in the center
    alignItems: 'center', // Align content horizontally in the center
  },

  innerSelected: {
    backgroundColor: 'gray',
  },
  symbol: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
    marginTop: 20,
  },
  box: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
  },
});

export default Table;
