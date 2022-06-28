import {StyleSheet} from 'react-native';
import {COLORS} from '../../config/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
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
  Image: {
    height: '100%',
    width: '100%',
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
  postImageView: {
    height: 230,
    width: '100%',
  },
  contentMainView: {marginHorizontal: 20},
  descriptionsView: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  contentTitle: {
    fontSize: 20,
    fontFamily: 'GlacialIndifference-Bold',
    textAlign: 'center',
  },
  subContentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContentsText: {
    fontSize: 12,
    color: '#636363',
    fontFamily: 'GlacialIndifference-Regular',
  },
  subContentNormalText: {
    fontSize: 12,
    fontFamily: 'GlacialIndifference-Regular',
  },
  minitView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  minitBtn: {
    flexDirection: 'row',
    backgroundColor: '#FF4747',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockView: {
    height: 15,
    width: 15,
    margin: 5,
  },
  clockImg: {height: '100%', width: '100%'},
  minitBtnTextView: {margin: 5, borderRadius: 4},
  minitBtnText: {
    fontFamily: 'GlacialIndifference-Regular',
    color: 'white',
  },
  descriptionTextView: {marginTop: 10},
  postDescriptions: {
    fontFamily: 'GlacialIndifference-Regular',
    fontSize: 16,
    marginTop: 10,
  },
  contentVideoView: {
    height: 200,
    width: '100%',
    marginTop: 20,
  },
  postContentMainView: {width: '100%', height: '100%', flexDirection: 'row'},
  postArticalMainView: {width: '40%', backgroundColor: '#FF4747'},
  postArticalView: {paddingHorizontal: 15, justifyContent: 'center'},
  backBtn: {height: 14, width: 20, marginTop: 10},
  ArticalView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  articalText: {textAlign: 'center', color: 'white'},
  subscribeMainView: {
    width: '60%',
    borderWidth: 0.5,
    borderColor: 'black',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscribeNowText: {
    fontFamily: 'GlacialIndifference-Bold',
    textAlign: 'center',
    // marginTop: 20,
  },
  subscribeNowBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4747',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 40,
  },
  subContentsBtnText: {
    fontFamily: 'GlacialIndifference-Bold',
    textAlign: 'center',
    color: 'white',
  },
  alreadySubscibeText: {
    color: '#636363',
    fontFamily: 'GlacialIndifference-Regular',
  },
  logInText: {fontFamily: 'GlacialIndifference-Bold'},
  postBottomView: {bottom: 0},
  dividerView: {
    height: 0.5,
    width: '100%',
    backgroundColor: COLORS.black,
  },
  mainBottomView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  LeftArrowView: {height: 14, width: 18},
  rigthContentMainView: {
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
  },
  rigthContentView: {flexDirection: 'row', alignItems: 'center'},
});
