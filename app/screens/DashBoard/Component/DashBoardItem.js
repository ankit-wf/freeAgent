import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../../config/color';
import {isEmpty} from 'lodash';
import Moment from 'moment';
import {appImages} from '../../../config';

export default function DashBoardItem({companyImage, data, handleOnSelect}) {
  // const [postData, setPostData] = useState([]);

  // useEffect(() => {
  //   setPostData([
  //     {
  //       id: 0,
  //       image:
  //         '/Volumes/Data/Projects/TheFreeAgent/TheFreeAgent_repo/projectname/app/assets/appimages/Image4.png',
  //       description: 'Phillip Lindsay, running back des Broncos, laissé libre',
  //       date: '18 Mars 2021',
  //     },
  //     {
  //       id: 1,
  //       image:
  //         '/Volumes/Data/Projects/TheFreeAgent/TheFreeAgent_repo/projectname/app/assets/appimages/Image5.png',
  //       description: 'Phillip Lindsay, running back des Broncos, laissé libre',
  //       date: '18 Mars 2021',
  //       subTitle: 'Sélection abonnés',
  //     },
  //   ]);
  // }, []);

  const postListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleOnSelect(item.post_id)}
        style={styles.postListItemMainView}>
        <View style={styles.postImageView}>
          <Image source={appImages.Image4} style={styles.postImage} />
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
            {item.post_title}
          </Text>
          <Text style={styles.dateText}>
            {Moment(item.post_date).format('YYYY MMM DD')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.companyImageView}>
        <Image source={companyImage} style={styles.companyImage} />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={data}
          renderItem={postListItem}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity style={styles.readAllView}>
          <Text style={styles.readAllText}>Tous lire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    borderRadius: 5,
  },
  companyImageView: {
    height: 30,
    width: 40,
  },
  companyImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
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
  readAllView: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  readAllText: {
    fontSize: 15,
    color: COLORS.black,
    fontFamily: 'GlacialIndifference-Bold',
    textDecorationLine: 'underline',
  },
});
