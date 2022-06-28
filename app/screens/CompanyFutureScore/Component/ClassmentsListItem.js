import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {appImages} from '../../../config';
import {COLORS} from '../../../config/color';

export default function ClassmentsListItem() {
  const [rankingData, setRankingData] = useState([]);
  const [subscribe, setSubscribe] = useState('Ligues');
  const [selectedButton, setSelectedButton] = useState('Classements');

  useEffect(() => {
    setRankingData([
      {
        id: 0,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 1,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 2,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 3,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 4,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 5,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 6,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 7,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 8,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 9,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 10,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
      {
        id: 11,
        image: appImages.Image3,
        name: 'LAL',
        W: '44',
        L: '17',
        PCT: '.721',
        GB: '2.5',
        HOME: '26-4',
        AWAY: '18-13',
        DIV: '5-4',
      },
    ]);
  }, []);

  const ListHeader = () => {
    return (
      <View style={{marginTop: 10}}>
        <View style={[styles.scoreBoardListDevider, {marginVertical: 0}]} />
        <View style={styles.listHeaderMainView}>
          <View style={{width: '25%'}} />
          <View
            style={{height: '100%', width: 0.6, backgroundColor: '#BFBFBF'}}
          />
          <View style={styles.WMainView}>
            <Text
              style={[
                styles.ListHeaderText,
                {textDecorationLine: 'underline'},
              ]}>
              W
            </Text>
          </View>
          <View style={styles.LMainView}>
            <Text
              style={[
                styles.ListHeaderText,
                {textDecorationLine: 'underline'},
              ]}>
              L
            </Text>
          </View>
          <View style={styles.PCTMAinView}>
            <Text
              style={[
                styles.ListHeaderText,
                {textDecorationLine: 'underline'},
              ]}>
              PCT
            </Text>
          </View>
          <View style={styles.GBMainView}>
            <Text
              style={[
                styles.ListHeaderText,
                {textDecorationLine: 'underline'},
              ]}>
              GB
            </Text>
          </View>
          <View
            style={{height: '100%', width: 0.6, backgroundColor: '#BFBFBF'}}
          />
          <View style={styles.HOMEMainView}>
            <Text style={styles.ListHeaderText}>HOME</Text>
          </View>
          <View style={styles.AWAYMainView}>
            <Text style={styles.ListHeaderText}>AWAY</Text>
          </View>
          <View style={styles.DIVMainView}>
            <Text style={styles.ListHeaderText}>DIV</Text>
          </View>
        </View>
        <View style={[styles.scoreBoardListDevider, {marginTop: 0}]} />
      </View>
    );
  };

  const scoreBoardList = ({item, index}) => {
    return (
      <View>
        <View style={styles.scoreBoardListMainView}>
          <View style={styles.imageAndNameView}>
            <View style={styles.imageView}>
              <Image source={item.image} style={styles.imageStyle} />
            </View>
            <Text
              style={[
                styles.scoreBoardListText,
                {fontFamily: 'GlacialIndifference-Bold'},
              ]}>
              {item.name}
            </Text>
          </View>
          <View
            style={{height: '100%', width: 0.6, backgroundColor: '#BFBFBF'}}
          />
          <View style={styles.WMainView}>
            <Text style={styles.scoreBoardListText}>{item.W}</Text>
          </View>
          <View style={styles.LMainView}>
            <Text style={styles.scoreBoardListText}>{item.L}</Text>
          </View>
          <View style={styles.PCTMAinView}>
            <Text style={styles.scoreBoardListText}>{item.PCT}</Text>
          </View>
          <View style={styles.GBMainView}>
            <Text style={styles.scoreBoardListText}>{item.GB}</Text>
          </View>
          <View
            style={{height: '100%', width: 0.6, backgroundColor: '#BFBFBF'}}
          />
          <View style={styles.HOMEMainView}>
            <Text style={styles.scoreBoardListText}>{item.HOME}</Text>
          </View>
          <View style={styles.AWAYMainView}>
            <Text style={styles.scoreBoardListText}>{item.AWAY}</Text>
          </View>
          <View style={styles.DIVMainView}>
            <Text style={styles.scoreBoardListText}>{item.DIV}</Text>
          </View>
        </View>
        <View style={styles.scoreBoardListDevider} />
      </View>
    );
  };

  const _handleSubscribeButton = (selected) => {
    setSubscribe(selected);
  };

  const _handleButton = (selected) => {
    setSelectedButton(selected);
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.buttonMainView}>
        <TouchableOpacity
          style={[
            styles.buttonView,
            {
              backgroundColor:
                selectedButton === 'Classements' ? '#FF4747' : '#E5E5E5',
            },
          ]}
          onPress={() => _handleButton('Classements')}>
          <Text
            style={[
              styles.buttonText,
              {
                color: selectedButton === 'Classements' ? '#FFFFFF' : '#BFBFBF',
              },
            ]}>
            Classements
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonView,
            {
              backgroundColor:
                selectedButton === 'Expanded' ? '#FF4747' : '#E5E5E5',
            },
          ]}
          onPress={() => _handleButton('Expanded')}>
          <Text
            style={[
              styles.buttonText,
              {
                color: selectedButton === 'Expanded' ? '#FFFFFF' : '#BFBFBF',
              },
            ]}>
            Expanded
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonView,
            {
              backgroundColor:
                selectedButton === 'Division' ? '#FF4747' : '#E5E5E5',
            },
          ]}
          onPress={() => _handleButton('Division')}>
          <Text
            style={[
              styles.buttonText,
              {
                color: selectedButton === 'Division' ? '#FFFFFF' : '#BFBFBF',
              },
            ]}>
            Vs. Division
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subscribeAndAlreadySubscribeBtnView}>
        <View
          style={styles.buttonMainContainer}>
          <TouchableOpacity
            onPress={() => _handleSubscribeButton('Ligues')}
            style={[
              styles.subscribeButtonView,
              {
                backgroundColor: subscribe === 'Ligues' ? '#FFFFFF' : '#E5E5E5',
              },
            ]}>
            <Text
              style={[
                styles.subscribeText,
                {
                  color: subscribe === 'Ligues' ? '#FF4747' : '#BFBFBF',
                },
              ]}>
              Ligues
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _handleSubscribeButton('Conference')}
            style={[
              styles.alreadySubscribeButtonView,
              {
                backgroundColor:
                  subscribe === 'Conference' ? '#FFFFFF' : '#E5E5E5',
              },
            ]}>
            <Text
              style={[
                styles.alreadySubscribeText,
                {
                  color: subscribe === 'Conference' ? '#FF4747' : '#BFBFBF',
                },
              ]}>
              Conference
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _handleSubscribeButton('Division')}
            style={[
              styles.alreadySubscribeButtonView,
              {
                backgroundColor:
                  subscribe === 'Division' ? '#FFFFFF' : '#E5E5E5',
              },
            ]}>
            <Text
              style={[
                styles.alreadySubscribeText,
                {
                  color: subscribe === 'Division' ? '#FF4747' : '#BFBFBF',
                },
              ]}>
              Division
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.nationalText}>National Basketball Association</Text>

      <View style={styles.flatListView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={rankingData}
          ListHeaderComponent={() => ListHeader()}
          renderItem={scoreBoardList}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 10,
  },
  flatListView: {
    height: '100%',
    marginTop: 10,
  },
  listHeaderMainView: {
    // marginTop: 10,
    // paddingVertical:5,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ListHeaderText: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'GlacialIndifference-Bold',
  },
  scoreBoardListText: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'GlacialIndifference-Regular',
  },
  WMainView: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LMainView: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PCTMAinView: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  GBMainView: {
    width: '7%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HOMEMainView: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AWAYMainView: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DIVMainView: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreBoardListMainView: {
    // marginTop: 3,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageAndNameView: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  imageView: {
    height: 25,
    aspectRatio: 1,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  buttonMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonView: {
    backgroundColor: '#FF4747',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'GlacialIndifference-Bold',
    fontSize: 14,
  },
  scoreBoardListDevider: {
    height: 0.6,
    width: '100%',
    backgroundColor: '#BFBFBF',
  },
  nationalText: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'GlacialIndifference-Bold',
    marginLeft: 20,
    marginTop: 10,
  },
  subscribeAndAlreadySubscribeBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  subscribeButtonView: {
    width: '30%',
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscribeText: {
    fontSize: 13,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
  alreadySubscribeButtonView: {
    width: '30%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  alreadySubscribeText: {
    fontSize: 13,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'GlacialIndifference-Bold',
  },
  buttonMainContainer:{
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    justifyContent: 'space-between',
    borderRadius: 15,
    width:'80%'
  }
});
