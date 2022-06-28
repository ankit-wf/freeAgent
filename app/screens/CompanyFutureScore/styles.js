import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  postListItemMainView: {
    marginTop: 10,
  },
  postImageView: {
    height: 230,
    width: '100%',
  },
  postImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  subTitleView: {
    backgroundColor: '#F8EE82',
    position: 'absolute',
    justifyContent: 'center',
    marginTop: 20,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
  },
  subTitleText: {
    fontSize: 12,
    padding: 5,
    color: COLORS.black,
    marginHorizontal: 10,
    fontFamily: 'GlacialIndifference-Bold',
  },
  descriptionAndDateView: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.black,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 12,
    color: COLORS.white,
    marginHorizontal: 20,
    fontFamily: 'GlacialIndifference-Bold',
  },
  dateText: {
    fontSize: 12,
    color: COLORS.white,
    marginHorizontal: 20,
    fontFamily: 'GlacialIndifference-Regular',
  },
});
