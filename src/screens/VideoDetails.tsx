import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

export interface VideoDetails {
  id: number;
  title: string;
  videoUri: string;
  image: any;
}

type VideoDetailsRoute = Route<'VideoDetails', {title: string; item?: any}>;

const VideoDetails = () => {
  const route = useRoute<VideoDetailsRoute>();
  const videoUri = route.params.item.videoUri;
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  return (
    <>
      <VideoPlayer
        resizeMode="contain"
        fullscreen
        fullscreenOrientation="all"
        // title={userStore.info.introduction_video.split('/files/')[1].split('.mp4')[0]}
        controlAnimationTiming={200}
        showTimeRemaining={false}
        controlTimeout={5000}
        onBack={() => setIsVideoOpen(false)}
        // navigator={navigation}
        source={{uri: videoUri}}
        style={styles.video}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000,
  },
  videoContainer: {
    width: '100%',
    height: 180,
    marginTop: 22,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoDetails;
