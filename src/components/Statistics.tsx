import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface StatisticsProps {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
}

const Statistics: React.FC<StatisticsProps> = ({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  statisticHeaderView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    marginTop: 8,
  },
  statisticHeader: {
    flex: 1,
    display: 'flex',
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

export default Statistics;
