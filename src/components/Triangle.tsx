import React, {useEffect, useRef, useState} from 'react';
import Svg, {Polygon, Text} from 'react-native-svg';
import {Animated} from 'react-native';

const Triangle = ({
  activeW,
  activeG,
  handlePress,
  isWSelected,
  isGSelected,
}: {
  activeW: boolean;
  activeG: boolean;
  handlePress: (cell: string) => void;
  isWSelected: boolean;
  isGSelected: boolean;
}) => {
  const [selectedCells, setSelectedCells] = useState(['']);

  const handleSelect = (cell: string) => {
    setSelectedCells(prevSelectedCells => {
      const isSelected = prevSelectedCells.includes(cell);
      if (isSelected) {
        return prevSelectedCells.filter(selectedCell => selectedCell !== cell);
      } else {
        return [...prevSelectedCells, cell];
      }
    });
  };

  const isActiveCell = (cell: string) => {
    return selectedCells.includes(cell);
  };

  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [isWSelected, isGSelected, fadeAnimation]);

  const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);
  const AnimatedText = Animated.createAnimatedComponent(Text);

  return (
    <Svg
      height="100%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none">
      {isWSelected ? (
        <>
          <AnimatedPolygon
            opacity={fadeAnimation}
            points="0,0 100,0 0,100"
            fill={activeW && isActiveCell('W') ? '#32936f' : '#f2f2f2'}
            onPress={() => {
              handleSelect('W');
              handlePress('W');
            }}
          />
          <AnimatedText
            opacity={fadeAnimation}
            x="20"
            y="40"
            onPress={() => {
              handleSelect('W');
              handlePress('W');
            }}
            fill={activeW && isActiveCell('W') ? 'white' : 'black'}
            fontSize={30}>
            W
          </AnimatedText>
        </>
      ) : (
        <>
          <Polygon
            points="0,0 100,0 0,100"
            fill={activeW && isActiveCell('W') ? '#32936f' : '#f2f2f2'}
            stroke={activeW && isActiveCell('W') ? 'white' : 'transparent'}
            strokeWidth={2}
            onPress={() => {
              handleSelect('W');
              handlePress('W');
            }}
          />
          <Text
            x="20"
            y="40"
            onPress={() => {
              handleSelect('W');
              handlePress('W');
            }}
            fill={activeW && isActiveCell('W') ? 'white' : 'black'}
            fontSize={30}>
            W
          </Text>
        </>
      )}
      {isGSelected ? (
        <>
          <AnimatedPolygon
            opacity={fadeAnimation}
            points="100,0 100,100 0,100"
            fill={activeG && isActiveCell('G') ? '#32936f' : '#f8c1c1'}
            onPress={() => {
              handleSelect('G');
              handlePress('G');
            }}
          />
          <AnimatedText
            opacity={fadeAnimation}
            x="60"
            y="80"
            onPress={() => {
              handleSelect('G');
              handlePress('G');
            }}
            fill={activeG && isActiveCell('G') ? 'white' : 'black'}
            fontSize={30}>
            G
          </AnimatedText>
        </>
      ) : (
        <>
          <Polygon
            points="100,0 100,100 0,100"
            fill={activeG && isActiveCell('G') ? '#32936f' : '#f8c1c1'}
            onPress={() => {
              handleSelect('G');
              handlePress('G');
            }}
          />
          <Text
            x="60"
            y="80"
            onPress={() => {
              handleSelect('G');
              handlePress('G');
            }}
            fill={activeG && isActiveCell('G') ? 'white' : 'black'}
            fontSize={30}>
            G
          </Text>
        </>
      )}
    </Svg>
  );
};

export default Triangle;
