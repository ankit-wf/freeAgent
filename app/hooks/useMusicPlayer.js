import {useEffect, useState, useCallback} from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
  seekTo,
  TrackPlayerEvents,
} from 'react-native-track-player';
import Player from 'react-native-track-player';

const useMusicPlayer = ({navigation, musicItem}) => {
  const {position, duration} = useTrackPlayerProgress(1000, null);

  const [isMusicPlay, setIsMusicPlay] = useState(false);
  const [musicCurrentPosition, setMusicCurrentPosition] = useState(0.0);

  const [isSetupTrackPlayer, setIsSetupTrackPlayer] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const _musicPlay = () => {
    Player.play();
    setIsMusicPlay(true);
    // console.log('duration ==== ', duration);
    // if (position > musicItem?.duration - 1) {
    //   _resetMusicPlay();
    // } else {
    //   setMusicCurrentPosition(position);
    // }
  };

  const _musicPause = () => {
    Player.pause();
    setIsMusicPlay(false);
  };

  const isPlaying = async () => {
    const currentState = await Player.getState();
    return (
      currentState === Player.STATE_PLAYING ||
      currentState === Player.STATE_BUFFERING
    );
  };

  const setTrackPlayer = async () => {
    await TrackPlayer.setupPlayer({
      waitForBuffer: true,
    });
    setIsSetupTrackPlayer(true);
    await TrackPlayer.add(musicItem);

    const capabilities = [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SEEK_TO,
      TrackPlayer.CAPABILITY_SKIP,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    ];

    const notificationCapabilities = [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    ];

    const options = {
      alwaysPauseOnInterruption: true,
      waitForBuffer: true,
      stopWithApp: true,
      jumpInterval: 80.0,
      capabilities,
      compactCapabilities: notificationCapabilities,
      notificationCapabilities,
    };
    TrackPlayer.updateOptions(options);
  };

  const _resetMusicPlay = () => {
    TrackPlayer.reset();
    setTrackPlayer();
    // seekTo(0.0);
    // setMusicCurrentPosition(0.0);
    // _musicPause();
  };

  const _togglePlay = async () => {
    try {
      const isMusicPlaying = await isPlaying();
      console.log('isMusicPlaying== ', isMusicPlaying);
      if (isMusicPlaying) {
        console.log('Pause====>');
        _musicPause();
        // setIsMusicPlay(true);
      } else {
        console.log('Play====>');
        _musicPlay();
        // setIsMusicPlay(false);
      }
    } catch (error) {
      console.log(error, 'ERROR:::::');
    }
  };

  useEffect(() => {
    console.log('duration ==== ', duration);
    if (position > musicItem?.duration - 1) {
      _resetMusicPlay();
    } else {
      setMusicCurrentPosition(position);
    }
  }, [position]);

  useEffect(() => {
    TrackPlayer.addEventListener('playback-state', async (data) => {
      switch (data.state) {
        case 'loading':
          setIsBuffering(true);
          setIsMusicPlay(false);
          break;
        case 'buffering':
          setIsBuffering(true);
          setIsMusicPlay(false);
          break;
        case 'paused':
          setIsBuffering(false);
          setIsMusicPlay(false);
          break;
        case 'playing':
          setIsBuffering(false);
          setIsMusicPlay(true);
          break;
        case 'idle':
          setIsBuffering(false);
          setIsMusicPlay(true);
          break;

        default:
          break;
      }

      console.log('playback-state: ', data);
    });

    // TrackPlayer.addEventListener('playback-track-changed', async (data) => {
    //   // switch (data.state) {
    //   //   case 'loading':

    //   //     break;

    //   //   default:
    //   //     break;
    //   // }

    //   console.log('playback-track: ', data);
    // });

    const setMusic = async () => {
      await setTrackPlayer();
      _musicPlay();
    };
    setMusic();
  }, []);

  return {
    isMusicPlay,
    isBuffering,
    musicPlay: _musicPlay,
    musicPause: _musicPause,
    togglePlay: _togglePlay,
    position: musicCurrentPosition,
    duration: musicItem?.duration,
    resetMusicPlay: _resetMusicPlay,
  };
};
export default useMusicPlayer;
