import React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import Pdf from 'react-native-pdf';

const Notes = () => {
  const source =
    Platform.OS === 'ios'
      ? require('../assets/pdfs/1a_ going_to_be.pdf')
      : {
          uri: 'bundle-assets://1a_ going_to_be.pdf',
        };
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Notes;
