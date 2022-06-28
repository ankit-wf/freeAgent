import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  root: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
  },
  childView: {
    height: '100%',
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
  nbaText: {
    fontSize: 24,
    marginTop: 5,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  description: {
    fontSize: 28,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 30,
    marginHorizontal: 30,
    fontFamily: 'GlacialIndifference-Bold',
  },
  createFreeAccountView: {
    marginTop: 40,
    backgroundColor: '#FF4747',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
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
  backIcon: {height: 20, aspectRatio: 1, marginLeft: 15, tintColor: 'black'},
  annualBoxMainView: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 20,
  },
  annualBoxView: {
    width: '47%',
    aspectRatio: 1,
    borderColor: 'red',
    borderWidth: 1,
    padding: 15,
  },
  annualText: {
    fontSize: 23,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Bold',
  },
  essaiText: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Regular',
  },
  annualAmountText: {
    fontSize: 17,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Bold',
    marginTop: 25,
  },
  factureText: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Regular',
  },
  monthlyView: {
    width: '47%',
    aspectRatio: 1,
    borderColor: 'red',
    borderWidth: 1,
    padding: 15,
  },
  monthltText: {
    fontSize: 23,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Bold',
  },
  monthlyAmountText: {
    fontSize: 17,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Bold',
    marginTop: 40,
  },
  monthlyFeatureText: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Regular',
  },
  bottomDescription: {
    marginVertical: 40,
    fontSize: 12,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Regular',
  },
  boldText: {
    fontFamily: 'GlacialIndifference-Bold',
  },
  recommandeMainView: {
    marginTop: 20,
    width: '47%',
  },
  recommandeChildView: {
    alignSelf: 'flex-end',
    padding: 5,
    backgroundColor: 'red',
  },
  recommandeText: {
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
});
