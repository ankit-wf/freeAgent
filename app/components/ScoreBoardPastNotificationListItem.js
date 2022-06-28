import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {appImages} from '../config';
import {COLORS} from '../config/color';
import PolygonIcon from '@assets/appimages/PolygonIcon.svg';

export default function ScoreBoardPastNotificationListItem({item}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', width: '80%'}}>
          <View style={styles.imageView}>
            <Image source={item.image} style={styles.image} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text style={styles.scoresText}>{item.name}</Text>
            <Text style={(styles.seeAllText, {right: 5})}>{item.score}</Text>
          </View>
        </View>
        <View style={{height: 10, width: 10, left: 2.5, top: 2}}>
          <PolygonIcon width={'100%'} height={'100%'} />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            // marginHorizontal: 10,
            borderColor: '#636363',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '20%',
            alignItems: 'center',
          }}>
          <View style={{top: 10, left: 5}}>
            <Text style={styles.seeAllText}>Final</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', width: '80%'}}>
          <View style={styles.imageView}>
            <Image source={item.image} style={styles.image} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text style={styles.scoresText}>{item.name2}</Text>
            <Text style={(styles.seeAllText, {right: 5})}>{item.score2}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            marginHorizontal: 10,
            borderColor: '#636363',
          }}
        />
      </View>
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#636363',
          marginVertical: 8,
        }}
      />
    </>
  );
}
// ScoreBoardPastNotificationListItem.PropTypes = {
// //   onChangeFieldText: PropTypes.func,
// };

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: COLORS.black,
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
    left: 15,
  },
  seeAllText: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Regular',
    textAlign: 'center',
  },
  timeText: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Bold',
  },
  imageView: {
    height: 20,
    width: 30,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  devider: {
    height: 0.5,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: COLORS.black,
    marginVertical: 15,
  },
});
