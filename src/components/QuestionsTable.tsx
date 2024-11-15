import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../themes/Icon';
import Blink from './Blink';
import Triangle from './Triangle';
import {TableProps} from '../types/SosTable';
import {FlatList} from 'react-native-gesture-handler';

const QuestionsTable = ({
  selectedCells,
  setSelectedCells,
  selectedSymbols,
  setSelectedSymbols,
  selectedCell,
  selectedSymbol,
  isSymbolActive,
  symbols,
  mainCategory,
}: TableProps) => {
  const handleCellPress = (cell: string) => {
    setSelectedCells(prevSelectedCells => {
      if (cell.split('-').length > 1) {
        if (!prevSelectedCells.includes(cell)) {
          const [cellName, selected] = cell.split('-');
          const findCell = prevSelectedCells.find(pCell =>
            pCell.includes(cellName),
          );
          if (findCell && findCell.split('-')[1] === selected) {
            return prevSelectedCells.filter(pCell => pCell !== cell);
          } else if (findCell && findCell.split('-')[1] !== selected) {
            return [...prevSelectedCells, cell];
          }
        }
      }
      const isSelected = prevSelectedCells.includes(cell);
      if (isSelected) {
        return prevSelectedCells.filter(selectedCell => selectedCell !== cell);
      } else {
        return [...prevSelectedCells, cell];
      }
    });
  };

  const handleBoxPress = (symbol: string) => {
    setSelectedSymbols &&
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
  const isSymbolSelected = (symbol: string) =>
    selectedSymbols && selectedSymbols.includes(symbol);

  const renderRow = (rowHeader: string) => (
    <View style={styles.row} key={rowHeader}>
      <Text style={styles.header}>{rowHeader}</Text>
      {[1, 2, 3, 4].map(colHeader => {
        if (
          (rowHeader === 'A' && colHeader === 1) ||
          (rowHeader === 'A' && colHeader === 2)
        ) {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={colHeader}
              style={styles.cell}
              disabled={selectedCell !== ''}>
              <View
                style={[styles.radioButton, {}]}
                key={`${rowHeader}${colHeader}`}>
                <Triangle
                  activeW={isCellSelected(`${rowHeader}${colHeader}-W`)}
                  activeG={isCellSelected(`${rowHeader}${colHeader}-G`)}
                  isWSelected={selectedCell === `${rowHeader}${colHeader}-W`}
                  isGSelected={selectedCell === `${rowHeader}${colHeader}-G`}
                  handlePress={cell =>
                    handleCellPress(`${rowHeader}${colHeader}-${cell}`)
                  }
                />
              </View>
            </TouchableOpacity>
          );
        }
        return (
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
                      backgroundColor: isCellSelected(
                        `${rowHeader}${colHeader}`,
                      )
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
        );
      })}
    </View>
  );

  const renderBox = (symbol: string) => {
    console.log('selectedSymbol', symbol);
    return selectedSymbol === symbol ? (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 8,
        }}
        key={symbol}
        disabled={
          selectedSymbol !== '' ||
          (mainCategory === 'Questions' &&
            symbol !== 'What' &&
            symbol !== 'Where' &&
            symbol !== 'When' &&
            symbol !== 'Why' &&
            symbol !== 'How' &&
            symbol !== 'Who')
        }
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
              ]}>{`${symbol}`}</Text>
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
        disabled={
          selectedSymbol !== '' ||
          (mainCategory === 'Questions' &&
            symbol !== 'What' &&
            symbol !== 'Where' &&
            symbol !== 'When' &&
            symbol !== 'Why' &&
            symbol !== 'How' &&
            symbol !== 'Who')
        }
        onPress={() => handleBoxPress(symbol)}>
        <Text
          style={[
            styles.symbol,
            {
              color: isSymbolSelected(symbol) ? 'white' : 'black',
              fontWeight: isSymbolSelected(symbol) ? 'bold' : 'normal',
            },
          ]}>{`${symbol}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.emptyHeader} />
        {[1, 2, 3, 4].map(colHeader => (
          <Text key={colHeader} style={styles.header}>
            {colHeader}
          </Text>
        ))}
      </View>
      {['A', 'B', 'C'].map(rowHeader => renderRow(rowHeader))}
      {isSymbolActive && symbols && (
        <FlatList
          data={symbols}
          keyExtractor={item => item}
          renderItem={({item}) => renderBox(item)}
          numColumns={symbols.length > 2 ? 3 : 1}
          contentContainerStyle={[styles.buttonContainer, {marginTop: 10}]}
          columnWrapperStyle={styles.buttonContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    gap: 8,
    // marginTop: 10,
  },
  box: {
    flex: 1,
    borderWidth: 0.5,
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 4,
  },
});

export default QuestionsTable;
