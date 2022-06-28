import TrackPlayer, {seekTo} from 'react-native-track-player';

let didAddListeners = false;

module.exports = async function () {
  if (didAddListeners) return;

  didAddListeners = true;

  TrackPlayer.addEventListener('remote-seek', (data) => {
    seekTo(data?.position);
  });
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener('remote-next', () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener('remote-previous', () => {
    TrackPlayer.skipToPrevious();
  });
  TrackPlayer.addEventListener('remote-duck', async (data) => {
    let {
      paused: shouldPause,
      ducking: shouldDuck,
      permanent: permanentLoss,
    } = data;

    let playerState = await TrackPlayer.getState();
    let didPauseTemporarily, didPauseTemporarilyTime;

    if (shouldPause || shouldDuck) {
      TrackPlayer.pause();
      if (playerState === TrackPlayer.STATE_PLAYING) {
        didPauseTemporarily = !permanentLoss;
        if (didPauseTemporarily) {
          didPauseTemporarilyTime = Date.now();
        }
      } else {
        didPauseTemporarily = false;
      }
    } else if (didPauseTemporarily) {
      if (playerState === TrackPlayer.STATE_PAUSED) {
        let secondsSincePause = (Date.now() - didPauseTemporarilyTime) / 1000;
        if (secondsSincePause < 5) {
          TrackPlayer.play();
        }
      }
      didPauseTemporarily = false;
    }
  });
};

// import TrackPlayer from 'react-native-track-player';

// module.exports = async function() {
//   TrackPlayer.addEventListener('remote-play', () => {
//     TrackPlayer.play();
//   });

//   TrackPlayer.addEventListener('remote-pause', () => {
//     TrackPlayer.pause();
//   });

//   TrackPlayer.addEventListener('remote-jump-forward', async () => {
//     let newPosition = await TrackPlayer.getPosition();
//     let duration = await TrackPlayer.getDuration();
//     newPosition += 10;
//     if (newPosition > duration) {
//       newPosition = duration;
//     }
//     TrackPlayer.seekTo(newPosition);
//   });

//   TrackPlayer.addEventListener('remote-jump-backward', async () => {
//     let newPosition = await TrackPlayer.getPosition();
//     newPosition -= 10;
//     if (newPosition < 0) {
//       newPosition = 0;
//     }
//     TrackPlayer.seekTo(newPosition);
//   });
// };
