import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  imageView: {
    aspectRatio: 1.7,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  backIconView: {
    position: 'absolute',
    top: 30,
    left: 20,
    flexDirection: 'row',
  },
  backIcon: {
    height: 20,
    aspectRatio: 1,
    top: 10,
  },
  back: {
    height: '100%',
    width: '100%',
    tintColor: 'white',
  },
  forwardIconView: {
    position: 'absolute',
    top: 30,
    right: 20,
    flexDirection: 'row',
  },
  loremText: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
    marginTop: 10,
  },
  dateText: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
    marginTop: 10,
  },
  playerView: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rewindView: {
    height: 30,
    aspectRatio: 1,
  },
  playerButton: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  stopButton: {
    height: 50,
    aspectRatio: 1,
  },
  loreamText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
    marginTop: 10,
  },
  description: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  sliderMainView: {
    paddingHorizontal: '10%',
    // height: 200,
  },
  playBtnChildView: {
    height: 50,
    aspectRatio: 1,
    backgroundColor: 'rgba(163,159,163,1.0)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicatorView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
