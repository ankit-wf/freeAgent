import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  root: {
    // paddingHorizontal: 15,
  },
  backIcon: {
    height: 20,
    aspectRatio: 1,
    marginLeft: 15,
    tintColor: COLORS.white,
  },
  menuText: {
    fontSize: 11,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
    marginLeft: 10,
  },
  headerTitleStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  searchIconView: {
    height: 20,
    aspectRatio: 1,
    marginRight: 15,
  },
  searchIcon: {
    height: '100%',
    width: '100%',
  },
});
