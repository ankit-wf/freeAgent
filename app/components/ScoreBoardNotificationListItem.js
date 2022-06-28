import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {appImages} from '../config';
import {COLORS} from '../config/color';
import BellIcon from '@assets/appimages/BellIcon.svg';

export default function ScoreBoardNotificationListItem({item}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', width: '70%'}}>
          <View
            style={{
              width: '25%',

              alignItems: 'center',
            }}>
            <View style={styles.imageView}>
              <Image source={item.image} style={styles.image} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
              width: '75%',
            }}>
            <Text style={styles.scoresText}>{item.name}</Text>
            <Text style={styles.seeAllText}>{item.score}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            marginHorizontal: 10,
            borderColor: '#636363',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '30%',
          }}>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', width: '70%'}}>
          <View
            style={{
              width: '25%',
              alignItems: 'center',
            }}>
            <View style={styles.imageView}>
              <Image source={item.image} style={styles.image} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '75%',
            }}>
            <Text style={styles.scoresText}>{item.name2}</Text>
            <Text style={styles.seeAllText}>{item.score}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            marginHorizontal: 10,
            borderColor: '#636363',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '30%',
            // justifyContent: 'space-between',
          }}>
          <Text style={styles.seeAllText}>{item.team}</Text>
          <View style={{height: 16, width: 18, left: 5}}>
            <BellIcon width={"100%"} height={'100%'} />
          </View>
        </View>
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
// ScoreBoardNotificationListItem.PropTypes = {
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
    // left: 15,
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
