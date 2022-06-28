import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from 'react-native-slider';
import {useTrackPlayerProgress, seekTo} from 'react-native-track-player';
import {responsiveScale} from '../constants/mixins';
const zerofy = (n) => {
  return n.toString().length >= 2 ? n : `${0}${n}`;
};

const minutesAndSeconds = (position) =>
  zerofy(Math.floor(position / 60)) + ':' + zerofy(Math.floor(position % 60));

export default ({position = 0, duration = 0, collapsed}) => {
  return (
    <View>
      <Slider
        disabled={collapsed}
        minimumTrackTintColor="#7D7D7D"
        maximumTrackTintColor="white"
        // style={[styles.slider, {flex: 1}]}
        maximumValue={duration}
        value={position}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
        onValueChange={(value) => {
          console.log(value);
          seekTo(value);
        }}
        onSlidingStart={() => console.log('start')}
      />
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.leftText}>{minutesAndSeconds(duration)}</Text>
        <Text style={styles.text}>-{minutesAndSeconds(position)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  slider: {
    marginTop: -12,
    marginLeft: 10,
    marginRight: 10,
  },
  track: {
    height: 4,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E5DA2F',
  },
  noThumb: {
    display: 'none',
    width: 0.6,
    height: 0.6,
    borderRadius: 0,
    backgroundColor: '#555555',
  },
  text: {
    color: '#C4C4C4',
    fontSize: responsiveScale(12),
    fontFamily: 'GlacialIndifference-Regular',
  },
  trackStyle: {
    height: 3,
    borderRadius: 1,
    width: '100%',
  },
  thumbStyle: {
    width: 5,
    height: 10,
    backgroundColor: '#FF4747',
  },
  leftText: {
    color: '#C4C4C4',
    fontSize: responsiveScale(12),
    flex: 1,
    fontFamily: 'GlacialIndifference-Regular',
  },
});
