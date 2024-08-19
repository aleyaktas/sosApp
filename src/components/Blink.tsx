import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleProp, ViewStyle} from 'react-native';

interface BlinkProps {
  duration: number;
  repeat_count?: number;
  style?: StyleProp<ViewStyle>;
  children?: any;
  isAnimated?: boolean;
}

const Blink: React.FC<BlinkProps> = ({
  duration,
  repeat_count,
  style,
  children,
  isAnimated = true,
}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
          }),
        ]),
        {
          iterations: repeat_count,
        },
      ).start();
    };

    animate();

    return () => {
      fadeAnimation.setValue(0);
    };
  }, [fadeAnimation, duration, repeat_count]);

  return (
    <View style={style}>
      {isAnimated ? (
        <Animated.View style={{opacity: fadeAnimation}}>
          {children}
        </Animated.View>
      ) : (
        children
      )}
    </View>
  );
};

export default Blink;
