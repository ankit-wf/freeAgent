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
  backIcon: {height: 12, aspectRatio: 1, marginLeft: 15},
  settingImageMainView: {
    padding: 10,
    backgroundColor: '#373737',
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  settingImageChildView: {
    height: 20,
    aspectRatio: 1,
  },
  settingImage: {
    height: '100%',
    width: '100%',
  },
  titleText: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  createFreeAccountView: {
    marginTop: 30,
    backgroundColor: '#F8EE82',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
  },
  createFreeAccountText: {
    fontSize: 14,
    color: COLORS.black,
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
    tintColor: 'black',
  },
  yourPreferencesMainView: {
    height: 100,
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 6,
    marginTop: 20,
    padding: 10,
  },
  yourPreferenceTextAndIconView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  companyImageMainView: {
    marginTop: 8,
    flexDirection: 'row',
  },
  imageMainView: {
    height: 50,
    aspectRatio: 1.5,
    backgroundColor: '#373737',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageChildView: {
    height: 30,
    aspectRatio: 1.7,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  yourPreferencesText: {
    fontSize: 13,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  buttonView: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
  },
  articalText: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
  },
  rightArrowView: {
    height: 15,
    aspectRatio: 1,
  },
  rightArrow: {
    height: '100%',
    width: '100%',
  },
  iconAndTextView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    height: 18,
    aspectRatio: 1,
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
    marginLeft: 15,
  },
  LogoutView: {
    flexDirection: 'row',
    bottom: 0,
    padding: 5,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
