import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    // paddingHorizontal: 10,
  },
  headerTitleStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
  },
  postListItemMainView: {
    marginTop: 15,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  postListItemChildView: {
    flexDirection: 'row',
  },
  postImageView: {
    height: 60,
    aspectRatio: 1.4,
  },
  postImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  imageMainView: {
    width: '25%',
    height: 100,
    justifyContent: 'center',
  },
  imageView: {
    height: 60,
    aspectRatio: 1.4,
  },
  textMainView: {
    width: '75%',
    justifyContent: 'center',
  },
  titleAndDesTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#1E1E1E',
    fontFamily: 'GlacialIndifference-Bold',
    marginLeft: 10,
  },
  dateText: {
    fontSize: 11,
    textAlign: 'center',
    color: '#636363',
    fontFamily: 'GlacialIndifference-Regular',
  },
  descriptionText: {
    fontSize: 15,
    color: '#636363',
    fontFamily: 'GlacialIndifference-Regular',
    marginLeft: 10,
  },
  ScoreBoardStyle:{
    backgroundColor:'white'
  },
  mainFlatListView: {
    // marginHorizontal: 1,
    padding: 15,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    borderRadius: 5,
  },
  companyNameAndImageView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  companyNameAndImageChildView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyImageView: {
    height: 25,
    width: 40,
  },
  companyImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  scoresText: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Bold',
    marginLeft: 15,
  },
  seeAllText: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Regular',
  },
  backIcon: {
    height: 20,
    aspectRatio: 1,
    marginLeft: 15,
    tintColor: COLORS.white,
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
