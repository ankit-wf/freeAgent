import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  root: {
    height: '70%',
    width: '100%',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    opacity: 0.45,
  },
  childView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 34,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
  nbaText: {
    fontSize: 20,
    marginTop: 5,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  description: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 60,
    fontFamily: 'GlacialIndifference-Bold',
  },
  createFreeAccountView: {
    marginTop: 40,
    backgroundColor: '#FF4747',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  createFreeAccountText: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
  rightButtonView: {
    height: 13,
    width: 20,
    marginLeft: 10,
  },
  rightButton: {
    height: '100%',
    width: '100%',
  },
  textAndButtonView: {
    marginTop: 30,
  },
  accessText: {
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'center',
    marginHorizontal: 40,
    fontFamily: 'GlacialIndifference-Bold',
  },
  subscribeAndAlreadySubscribeBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  subscribeButtonView: {
    width: '35%',
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscribeText: {
    fontSize: 13,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
  alreadySubscribeButtonView: {
    width: '35%',
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  alreadySubscribeText: {
    fontSize: 13,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
  deviderAndTextView: {
    width: '100%',
    position: 'absolute',
    bottom: 5,
  },
  devider: {
    height: 0.5,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  readArticalView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    padding: 15,
  },
  reactArticalText: {
    fontSize: 13,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
});
