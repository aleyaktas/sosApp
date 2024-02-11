import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Icon from '../themes/Icon';
import Blink from './Blink';

interface TableProps {
  selectedCells: string[];
  setSelectedCells: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSymbols: string[];
  setSelectedSymbols: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCell: string;
  selectedSymbol: string;
}

const Table = ({
  selectedCells,
  setSelectedCells,
  selectedSymbols,
  setSelectedSymbols,
  selectedCell,
  selectedSymbol,
}: TableProps) => {
  const handleCellPress = (cell: string) => {
    setSelectedCells(prevSelectedCells => {
      const isSelected = prevSelectedCells.includes(cell);
      if (isSelected) {
        return prevSelectedCells.filter(selectedCell => selectedCell !== cell);
      } else {
        return [...prevSelectedCells, cell];
      }
    });
  };

  useEffect(() => {}, [selectedCells]);

  const handleBoxPress = (symbol: string) => {
    setSelectedSymbols(prevSelectedSymbols => {
      const isSelected = prevSelectedSymbols.includes(symbol);
      if (isSelected) {
        return prevSelectedSymbols.filter(
          selectedSymbol => selectedSymbol !== symbol,
        );
      } else {
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
          activeOpacity={0.7}
          key={colHeader}
          style={styles.cell}
          disabled={selectedCell !== ''}
          onPress={() => handleCellPress(`${rowHeader}${colHeader}`)}>
          {selectedCell === `${rowHeader}${colHeader}` ? (
            <Blink duration={600}>
              <View
                style={[
                  styles.radioButton,
                  {
                    backgroundColor: isCellSelected(`${rowHeader}${colHeader}`)
                      ? '#32936f'
                      : 'white',
                  },
                ]}>
                {isCellSelected(`${rowHeader}${colHeader}`) && (
                  <Icon name="Tick" color="white" />
                )}
              </View>
            </Blink>
          ) : (
            <View
              style={[
                styles.radioButton,
                {
                  backgroundColor: isCellSelected(`${rowHeader}${colHeader}`)
                    ? '#32936f'
                    : 'white',
                },
              ]}>
              {isCellSelected(`${rowHeader}${colHeader}`) && (
                <Icon name="Tick" color="white" />
              )}
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderBox = (symbol: string) => {
    return selectedSymbol === symbol ? (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 8,
        }}
        key={symbol}
        disabled={selectedSymbol !== ''}
        onPress={() => handleBoxPress(symbol)}>
        <Blink duration={600}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: isSymbolSelected(symbol) ? '#32936f' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.symbol,
                {
                  color: isSymbolSelected(symbol) ? 'white' : 'black',
                  fontWeight: isSymbolSelected(symbol) ? 'bold' : 'normal',
                },
              ]}>{`(${symbol})`}</Text>
          </View>
        </Blink>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.box,
          {
            backgroundColor: isSymbolSelected(symbol) ? '#32936f' : 'white',
          },
        ]}
        key={symbol}
        disabled={selectedSymbol !== ''}
        onPress={() => handleBoxPress(symbol)}>
        <Text
          style={[
            styles.symbol,
            {
              color: isSymbolSelected(symbol) ? 'white' : 'black',
              fontWeight: isSymbolSelected(symbol) ? 'bold' : 'normal',
            },
          ]}>{`(${symbol})`}</Text>
      </TouchableOpacity>
    );
  };

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
        {renderBox('+')}
        {renderBox('-')}
        {renderBox('?')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    // borderWidth: 0.5,
    // borderColor: 'gray',
    // borderRadius: 8,
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
    flex: 0.5,
  },
  cell: {
    flex: 2,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  radioButton: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderWidth: 0.5,
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 8,
  },
});

export default Table;
