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
  searchItemMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#4A4A4A',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  searchImageView: {
    height: 15,
    aspectRatio: 1,
  },
  searchImage: {
    height: '100%',
    width: '100%',
  },
  searchItemTextInput: {
    width: '95%',
    color: '#E5E5E5',
    fontSize: 14,
    paddingLeft: 10,
    fontFamily: 'GlacialIndifference-Regular',
  },
  description: {
    marginTop: 20,
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Regular',
    paddingHorizontal: 20,
  },
  flatlistMainView: {
    marginTop: 20,
    
  },
  item: {
    height: 100,
    flex: 1,
    backgroundColor: '#373737',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  itemImageView: {
    height: '55%',
    width: '70%',
  },
  itemImage: {height: '100%', width: '100%', resizeMode: 'contain'},
  backIcon: {height: 20, aspectRatio: 1, marginLeft: 15},
  headerTitleStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  headerRightStyle: {
    fontSize: 13,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Regular',
    marginRight: 15,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  createFreeAccountView: {
    marginTop: 30,
    backgroundColor: '#FF4747',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    bottom:10
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
  deviderAndTextView: {
    width: '100%',
    bottom: 0,
    flex:1
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
