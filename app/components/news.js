import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {appImages} from '../config';
import {COLORS} from '../config/color';

const News = (props) => {
  const [newsListData, setNewsListData] = useState([]);

  useEffect(() => {
    setNewsListData([
      {
        id: 0,
        image: appImages.Image5,
        title: 'NFL',
        description: 'Phillip Lindsay, running back des Broncos, laissé libre',
        date: '18 Mars 2021',
      },
      {
        id: 1,
        image: appImages.Image1,
        title: 'NFL',
        description: 'Phillip Lindsay, running back des Broncos, laissé libre',
        date: '18 Mars 2021',
      },
      {
        id: 2,
        image: appImages.Image5,
        title: 'NFL',
        description: 'Phillip Lindsay, running back des Broncos, laissé libre',
        date: '18 Mars 2021',
      },
      {
        id: 3,
        image: appImages.Image1,
        title: 'NFL',
        description: 'Phillip Lindsay, running back des Broncos, laissé libre',
        date: '18 Mars 2021',
      },
    ]);
  }, []);

  const newsListItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.postListItemMainView}>
        <View style={styles.postImageView}>
          <Image source={item.image} style={styles.postImage} />
        </View>
        <View style={styles.descriptionAndDateView}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.descriptionText}>
            {item.description}
          </Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <Text style={styles.otherNewsText}>LES AUTRES NEWS</Text>
      <View style={styles.flatListView}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEnabled={true}
          data={newsListData}
          renderItem={newsListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderRadius: 6,
  },
  flatListView: {
    width: '100%',
    marginVertical: 20,
  },
  postListItemMainView: {
    marginLeft: 5,
    paddingHorizontal: 10,
  },
  postImageView: {
    height: 300,
    aspectRatio: 1,
  },
  postImage: {
    height: '100%',
    width: '100%',
    borderRadius: 6,
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
    padding: 10,
    width: '80%',
    backgroundColor: '#1E1E1E',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 15,
    justifyContent: 'center',
    borderRadius: 10,
    right: 25,
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 5,
    color: COLORS.white,
    marginHorizontal: 10,
    fontFamily: 'GlacialIndifference-Bold',
  },
  dateText: {
    fontSize: 12,
    marginTop: 5,
    color: COLORS.white,
    marginHorizontal: 10,
    fontFamily: 'GlacialIndifference-Regular',
  },
  titleStyle: {
    fontSize: 13,
    color: '#FF4747',
    marginHorizontal: 10,
    fontFamily: 'GlacialIndifference-Bold',
  },
  otherNewsText: {
    fontSize: 16,
    color: COLORS.black,
    marginHorizontal: 15,
    marginTop: 15,
    fontFamily: 'GlacialIndifference-Bold',
  },
});
