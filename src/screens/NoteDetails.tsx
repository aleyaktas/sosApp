import {Route, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Platform,
  NativeModules,
  StyleSheet,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';

export interface NoteDetails {
  id: number;
  title: string;
  pdfUrl: string;
  image: any;
}
type NoteDetailsRoute = Route<
  'NoteDetails',
  {title: string; pdfName: string; item?: any}
>;

const NoteDetails = () => {
  const route = useRoute<NoteDetailsRoute>();
  const title = route.params.title;
  const pdfName = route.params.item.pdfUrl;

  console.log(title);
  console.log(pdfName);

  // const pdfFile = require(`../assets/pdfs/Tenses/Tenses_1_1b_am_is_are.pdf`);

  const pdfFile = `${NativeModules.SourceCode.scriptURL}/assets/pdfs/${title}/${pdfName}.pdf`;

  const source =
    Platform.OS === 'ios'
      ? {
          uri: pdfFile,
        }
      : {
          uri: `bundle-assets://pdfs/${title}/${pdfName}.pdf`,
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

export default NoteDetails;

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
