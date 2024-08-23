import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Bar} from 'react-native-progress';

const ChartComponent = ({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
}: any) => {
  return (
    <View style={styles.chartContainer}>
      <View style={styles.barContainer}>
        <Bar
          progress={totalQuestions !== 0 ? correctAnswers / totalQuestions : 0}
          color={'#56A500'}
          unfilledColor={wrongAnswers !== 0 ? '#DE3F41' : '#E1D9DC'}
          borderWidth={0}
          width={Dimensions.get('window').width - 80}
          style={styles.bar}
        />
        <Text style={styles.scoreText}>
          {correctAnswers}/{totalQuestions}
        </Text>
      </View>
      <View style={styles.statisticHeaderView}>
        <View style={styles.statisticHeader}>
          <Text style={styles.statisticText}>Sorulan: {totalQuestions}</Text>
        </View>
        <View style={styles.statisticHeader}>
          <Text style={styles.statisticText}>Doğru: {correctAnswers}</Text>
        </View>
        <View style={styles.statisticHeader}>
          <Text style={styles.statisticText}>Yanlış: {wrongAnswers}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bar: {
    borderRadius: 8,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statisticHeaderView: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  statisticHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderColor: '#FFCB77',
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
  },
  statisticText: {
    color: '#282828',
    fontWeight: 'bold',
  },
});

export default ChartComponent;
