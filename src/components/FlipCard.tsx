import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function FlipCard({
  frontText,
  backText,
  isFront,
  setIsFront,
  height,
  frontStyle,
}: {
  frontText: string;
  backText: string;
  isFront: boolean;
  setIsFront: (isFront: boolean) => void;
  height?: number;
  frontStyle?: any;
}) {
  const rotateY = useSharedValue(0);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${rotateY.value}deg`}],
      backfaceVisibility: 'hidden',
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      width: '100%',
      transform: [{rotateY: `${rotateY.value + 180}deg`}],
      backfaceVisibility: 'hidden',
      position: 'absolute',
      top: 0,
    };
  });

  const flipCard = () => {
    if (isFront) {
      rotateY.value = withTiming(180, {duration: 500});
    } else {
      rotateY.value = withTiming(0, {duration: 500});
    }
    setIsFront(!isFront);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={flipCard}>
        <View>
          <Animated.View
            style={[
              styles.card,
              frontAnimatedStyle,
              frontStyle,
              {
                height: height ?? 300,
              },
            ]}>
            <Text style={styles.text}>{frontText}</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.card,
              backAnimatedStyle,
              {
                height: height ?? 300,
              },
            ]}>
            <Text style={styles.text}>{backText}</Text>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    height: 300,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backfaceVisibility: 'hidden',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
