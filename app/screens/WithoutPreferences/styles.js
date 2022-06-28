import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
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
  companyNameFlatList: {
    marginTop: 15,
  },
  flatlistMainView: {
    // marginTop: 10,
    height: '58%',
    paddingHorizontal: 15,
  },
  item: {
    height: 90,
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
  childView: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  bottomMainView: {
    height: '17%',
  },
  devider: {
    height: 0.5,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  terminarView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 15,
    padding: 5,
  },
  terminarText: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  rightIconImage: {
    height: 10,
    width: 15,
    marginLeft: 10,
    marginTop: 3,
  },
  rightImage: {
    height: '100%',
    width: '100%',
  },
  bottomChildView: {
    flex: 1,
    backgroundColor: '#636363',
  },
  modifierTextAndImageMainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginTop: 10,
  },
  yourFevouriteTeamText: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  imageMainView: {
    height: 35,
    aspectRatio: 1,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#373737',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageChildView: {
    height: 20,
    aspectRatio: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  modifierText: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  renderCompanyNameMainView: {
    paddingHorizontal: 20,
  },
  companyNameText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
});
