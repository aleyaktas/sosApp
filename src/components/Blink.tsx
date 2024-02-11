import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleProp, ViewStyle} from 'react-native';

interface BlinkProps {
  duration: number;
  repeat_count?: number;
  style?: StyleProp<ViewStyle>;
  children?: any;
}

const Blink: React.FC<BlinkProps> = ({
  duration,
  repeat_count,
  style,
  children,
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
      // Animasyon bileşen demontaj edildiğinde durdurulur.
      fadeAnimation.setValue(0);
    };
  }, [fadeAnimation, duration, repeat_count]);

  return (
    <View style={style}>
      <Animated.View style={{opacity: fadeAnimation}}>{children}</Animated.View>
    </View>
  );
};

export default Blink;
