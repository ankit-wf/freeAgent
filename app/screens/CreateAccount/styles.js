import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  root: {
    paddingHorizontal: 15,
  },
  emailtext: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  searchItemTextInput: {
    width: '100%',
    color: COLORS.black,
    fontSize: 14,
    fontFamily: 'GlacialIndifference-Regular',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 6,
    marginTop: 8,
  },
  createFreeAccountView: {
    marginTop: 20,
    backgroundColor: '#FF4747',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: 5,
    width: '45%',
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
  backIcon: {
    height: 20,
    aspectRatio: 1,
    marginLeft: 15,
    tintColor: COLORS.white,
  },
  titleText: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    color: '#E5E5E5',
    fontFamily: 'GlacialIndifference-Regular',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  buttonView: {
    marginTop: 15,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  imageView: {
    height: 18,
    aspectRatio: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  devider: {
    marginTop: 30,
    height: 0.8,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  descriptionView: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
    paddingHorizontal: 30,
  },
  bottomDesctiptionText: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  alreadySubscribeAndLoginTextView: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  alreadySubscribeText: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  loginText: {
    fontFamily: 'GlacialIndifference-Bold',
  },
});
