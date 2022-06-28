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
  headerTitleStyle: {
    fontSize: 13,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Regular',
    marginRight: 15,
  },
  titleText: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
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
  subscription: {
    fontSize: 13,
    marginTop: 20,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  premiumTextView: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  premiumText: {
    fontSize: 13,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Regular',
  },
  modifierButtonView: {
    borderRadius: 6,
    backgroundColor: '#373737',
  },
  modifierText: {
    fontSize: 13,
    color: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'GlacialIndifference-Regular',
  },
  iconAndTextView: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    height: 15,
    aspectRatio: 1,
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
