import {isEmpty} from 'lodash';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { COLORS } from '../../../config/color';
// import PropTypes from 'prop-types';

export default function NewsLists({item}) {
  return (
    <TouchableOpacity onPress={null} style={styles.postListItemMainView}>
      <View style={styles.postImageView}>
        <Image source={item.image} style={styles.postImage} />
      </View>

      {!isEmpty(item.subTitle) && (
        <View style={styles.subTitleView}>
          <Text numberOfLines={2} style={styles.subTitleText}>
            {item.subTitle}
          </Text>
        </View>
      )}
      <View style={styles.descriptionAndDateView}>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {item.description}
        </Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
}
// NewsLists.PropTypes = {
// //   onChangeFieldText: PropTypes.func,
// };

const styles = StyleSheet.create({
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
