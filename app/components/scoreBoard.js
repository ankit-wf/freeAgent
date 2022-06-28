import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text, FlatList} from 'react-native';
import {appImages} from '../config';
import {COLORS} from '../config/color';

const ScoreBoard = (props) => {
  const [scoreBoardData, setScoreBoardData] = useState([]);

  useEffect(() => {
    setScoreBoardData([
      {
        id: 0,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
      },
      {
        id: 1,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
      },
      {
        id: 2,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
      },
      {
        id: 3,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
      },
    ]);
  }, []);

  const scoreBoardListItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.devider} />
        <View style={styles.companyNameAndImageView}>
          <View style={styles.companyNameAndImageChildView}>
            <View style={styles.imageView}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.scoresText}>{item.name}</Text>
          </View>
          <Text style={styles.seeAllText}>{item.score}</Text>
        </View>
        <View style={[styles.companyNameAndImageView, {marginTop: 5}]}>
          <View style={styles.companyNameAndImageChildView}>
            <View style={styles.imageView}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.scoresText}>{item.name2}</Text>
          </View>
          <Text style={styles.seeAllText}>{item.score}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.companyNameAndImageView}>
        <View style={styles.companyNameAndImageChildView}>
          <View style={styles.companyImageView}>
            <Image source={appImages.NBAIcon} style={styles.companyImage} />
          </View>
          <Text style={styles.scoresText}>LES SCORES NBA</Text>
        </View>
        <Text style={styles.seeAllText}>Tous voir</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        data={scoreBoardData}
        renderItem={scoreBoardListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ScoreBoard;

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
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Bold',
    marginLeft: 15,
  },
  seeAllText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'GlacialIndifference-Regular',
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
    backgroundColor: COLORS.white,
    marginVertical: 15,
  },
});
