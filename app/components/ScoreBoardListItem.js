import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../config/color';

export default function ScoreBoardListItem({item}) {
  return (
    <>
      <View style={styles.devider} />
      <View style={styles.companyNameAndImageView}>
        <View style={styles.companyNameAndImageChildView}>
          <View style={styles.imageView}>
            <Image
              source={{uri: item?.equipe_home?.[0]?.logo_url}}
              style={styles.image}
              resizeMode={'contain'}
            />
          </View>
          <Text style={styles.scoresText}>{item?.equipe_home?.[0]?.title}</Text>
        </View>
        <Text style={styles.seeAllText}>0-0</Text>
      </View>
      <View style={[styles.companyNameAndImageView, {marginTop: 5}]}>
        <View style={styles.companyNameAndImageChildView}>
          <View style={styles.imageView}>
            <Image
              source={{uri: item?.equipe_visiteur?.[0]?.logo_url}}
              style={styles.image}
            />
          </View>
          <Text style={styles.scoresText}>
            {item?.equipe_visiteur?.[0]?.title}
          </Text>
        </View>
        <Text style={styles.seeAllText}>0-0</Text>
      </View>
    </>
  );
}

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
    marginLeft: 15,
  },
  seeAllText: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Regular',
  },
  imageView: {
    height: 30,
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
