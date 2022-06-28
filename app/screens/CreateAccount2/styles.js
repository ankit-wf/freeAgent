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
  descriptionView: {
    bottom: 0,
    alignSelf: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  bottomDesctiptionText: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  text: {
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
    padding: 10,
    borderRadius: 5,
    width: '40%',
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
  checkBoxAndTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyBoxView: {
    height: 20,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 6,
  },
  selectedBoxView: {
    position: 'absolute',
    height: 10,
    aspectRatio: 1,
    backgroundColor: COLORS.white,
    borderRadius: 3,
  },
  textView: {
    width: '90%',
    color: COLORS.white,
    fontSize: 13,
    fontFamily: 'GlacialIndifference-Regular',
    paddingLeft: 20,
  },
});
