// import {Route, useRoute} from '@react-navigation/native';
// import React, {useRef, useState} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Video from 'react-native-video';

// export interface VideoDetails {
//   id: number;
//   title: string;
//   videoUri: string;
//   image: any;
// }
// type VideoDetailsRoute = Route<'VideoDetails', {title: string; item?: any}>;

// const VideoDetails = () => {
//   const player = useRef(null);
//   const route = useRoute<VideoDetailsRoute>();
//   const videoUri = route.params.item.videoUri;
//   const [buffering, setBuffering] = useState(false);
//   const [error, setError] = useState(null);

//   const onBuffer = ({isBuffering}: any) => {
//     setBuffering(isBuffering);
//   };

//   const videoError = (error: any) => {
//     setError(error);
//   };

//   return (
//     <Video
//       source={{uri: videoUri}} // Can be a URL or a local file.
//       ref={player} // Store reference
//       onBuffer={onBuffer} // Callback when remote video is buffering
//       onError={videoError} // Callback when video cannot be loaded
//       style={styles.backgroundVideo}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });

// export default VideoDetails;
