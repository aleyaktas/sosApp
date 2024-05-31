import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from '../themes/Icon';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {formatTime} from '../helpers/formatTime';

interface MediaPlayerProps {
  progress: {position: number; duration: number};
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  url: string;
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({
  progress,
  isPlaying,
  setIsPlaying,
  url,
}) => {
  const playTrack = async () => {
    await TrackPlayer.add({
      id: url,
      url,
    });
    setIsPlaying(true);
    await TrackPlayer.play();
  };

  const pauseTrack = async () => {
    setIsPlaying(false);
    await TrackPlayer.pause();
  };

  return (
    <View style={styles.mediaPlayerContainer}>
      <TouchableOpacity
        onPress={isPlaying ? pauseTrack : playTrack}
        style={styles.playerButton}>
        <Icon
          name={isPlaying ? 'Pause' : 'Play'}
          width={32}
          height={32}
          color="green"
        />
      </TouchableOpacity>
      <Slider
        style={styles.mediaSlider}
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        thumbTintColor="#FFD369"
        minimumTrackTintColor="#FFD369"
        maximumTrackTintColor="#bbb"
        onSlidingComplete={async value => {
          await TrackPlayer.seekTo(value);
        }}
      />
      <Text>
        {formatTime(progress.position)} / {formatTime(progress.duration)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mediaPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 2,
    gap: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playerButton: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaSlider: {
    flex: 1,
    height: 40,
  },
});

export default MediaPlayer;
