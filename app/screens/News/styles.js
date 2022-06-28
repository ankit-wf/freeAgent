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
});
