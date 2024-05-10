import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import {Route, useRoute} from '@react-navigation/native';

export interface VideoDetails {
  id: number;
  title: string;
  videoUri: string;
  image: any;
}

type VideoDetailsRoute = Route<'VideoDetails', {title: string; item?: any}>;

const VideoDetails = () => {
  const player = useRef(null);
  const route = useRoute<VideoDetailsRoute>();
  const videoUri = route.params.item.videoUri;
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [error, setError] = useState(null);

  const onBuffer = ({isBuffering}: any) => {
    setBuffering(isBuffering);
  };

  const videoError = (error: any) => {
    console.error('Video error:', error);
    setError(error);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isFullScreen}
        onRequestClose={toggleFullScreen}
        supportedOrientations={['landscape']}>
        <View style={styles.fullScreenContainer}>
          <Video
            source={{uri: videoUri}}
            ref={player}
            onBuffer={onBuffer}
            onError={videoError}
            style={styles.fullScreenVideo}
            resizeMode="contain"
            paused={!isPlaying}
            onFullscreenPlayerWillDismiss={toggleFullScreen}
          />
        </View>
      </Modal>
      <Video
        source={{uri: videoUri}}
        ref={player}
        onBuffer={onBuffer}
        onError={videoError}
        style={styles.backgroundVideo}
        resizeMode="contain"
        paused={!isPlaying}
        onFullscreenPlayerWillDismiss={toggleFullScreen}
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={togglePlayback}>
          <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleFullScreen}>
          <Text style={styles.buttonText}>Fullscreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  fullScreenVideo: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFFA0',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default VideoDetails;
