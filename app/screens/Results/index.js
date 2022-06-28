/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {COLORS} from '../../config/color';
import moment from 'moment-timezone';
import {appImages} from '../../config';
import CompanyNameItems from './Component/CompanyNameItems';
import ScoreBoardListItem from '../../components/ScoreBoardListItem';
import CalenderView from '../../components/CalenderView';
import WhiteSearchIcon from '@assets/appimages/WhiteSearchIcon.svg';
import {scoresDetails} from '../../resources/baseServices/auth';
import {isEmpty} from 'lodash';
import axios from 'axios';
import base64 from 'react-native-base64';

const Results = ({navigation}) => {
  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.black,
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image
            style={styles.backIcon}
            source={appImages.Menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Text style={styles.headerTitleStyle}>THE FREE AGENT</Text>
      ),
      headerRight: (props) => (
        <TouchableOpacity style={styles.searchIconView}>
          <WhiteSearchIcon width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    getScoresDetails();
    setNavigationBar();
    setPreferenceData([
      {
        id: 0,
        image: appImages.Image2,
      },
      {
        id: 1,
        image: appImages.Image2,
      },
      {
        id: 2,
        image: appImages.Image2,
      },
      {
        id: 3,
        image: appImages.Image2,
      },
      {
        id: 4,
        image: appImages.Image2,
      },
      {
        id: 5,
        image: appImages.Image2,
      },
      {
        id: 6,
        image: appImages.Image2,
      },
      {
        id: 7,
        image: appImages.Image2,
      },
      {
        id: 8,
        image: appImages.Image2,
      },
      {
        id: 9,
        image: appImages.Image2,
      },
      {
        id: 10,
        image: appImages.Image2,
      },
      {
        id: 11,
        image: appImages.Image2,
      },
    ]);
    // setScoreBoardData([
    //   {
    //     id: 0,
    //     image: appImages.Image3,
    //     name: 'Blue Jays',
    //     name2: 'Rockies',
    //     score: '0-0',
    //   },
    //   {
    //     id: 1,
    //     image: appImages.Image3,
    //     name: 'Blue Jays',
    //     name2: 'Rockies',
    //     score: '0-0',
    //   },
    //   {
    //     id: 2,
    //     image: appImages.Image3,
    //     name: 'Blue Jays',
    //     name2: 'Rockies',
    //     score: '0-0',
    //   },
    //   {
    //     id: 3,
    //     image: appImages.Image3,
    //     name: 'Blue Jays',
    //     name2: 'Rockies',
    //     score: '0-0',
    //   },
    // ]);
  }, []);
  const [selectedDate, setselectedDate] = useState(new Date());
  const [scoreBoardData, setScoreBoardData] = useState([]);
  const [selectedType, setSelectedType] = useState(0);
  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(3, 'days'), // total 4 days enabled
    },
  ];
  // let datesBlacklist = [ moment().add(1, 'days') ]; // 1 day disabled
  const [preferenceData, setPreferenceData] = useState([]);
  const [isloaderVisible, setIsloaderVisible] = useState(false);
  const onDateSelected = (date) => {
    setselectedDate(date);
  };

  const getScoresDetails = async () => {
    setIsloaderVisible(true);
    var headers = new Headers();
    headers.append(
      'Authorization',
      'Basic ' + base64.encode('serpil_app:UEz4gtj8fQxc'),
    );
    axios
      .get('https://thefreeagent.fr/serpil/get_matchs.php', {
        headers: headers?.map,
      })
      .then((response) => {
        console.log('response===', response?.data);
        setIsloaderVisible(false);
        if (!isEmpty(response?.data)) {
          setScoreBoardData(response?.data);
        }
      })
      .catch((error) => {
        setIsloaderVisible(false);
        console.log('error===>', error);
      });

    // try {
    //   // const data = {
    //   //   apiauth: '6e=nM$/R{sCaPWE',
    //   // };
    //   const res = await scoresDetails();
    //   if (!isEmpty(res?.data)) {
    //     setScoreBoardData(res?.data);
    //     // await setAuthToken(token);
    //   } else {
    //     Alert.alert('Alert!', 'Something Went Wrong.');
    //   }
    // } catch (err) {
    //   console.log('err===>', err);
    // }
  };
  const onSelectScoreType = (id) => {
    setSelectedType(id);
  };

  return (
    <View style={styles.main}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView
        flex={1}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <CalenderView
            selectedDate={selectedDate}
            datesWhitelist={datesWhitelist}
            onDateSelected={onDateSelected}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <View>
            <FlatList
              horizontal={true}
              data={preferenceData}
              keyExtractor={(item, index) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <CompanyNameItems
                  item={item}
                  onSelectScoreType={(id) => onSelectScoreType(id)}
                  selectedType={selectedType}
                />
              )}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('CompanyFutureScore')}
            style={styles.mainFlatListView}>
            <View style={styles.companyNameAndImageView}>
              <View style={styles.companyNameAndImageChildView}>
                <View style={styles.companyImageView}>
                  <Image
                    source={appImages.NBAIcon}
                    style={styles.companyImage}
                  />
                </View>
                <Text style={styles.scoresText}>LES SCORES MLB</Text>
              </View>
              <Text style={styles.seeAllText}>Tous voir</Text>
            </View>
            <View style={{flex: 1}}>
              {isloaderVisible ? (
                <View
                  style={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator size={'large'} color={'black'} />
                </View>
              ) : (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={scoreBoardData}
                  renderItem={({item, index}) => (
                    <ScoreBoardListItem item={item} />
                  )}
                  keyExtractor={(item) => item.id}
                />
              )}
            </View>
          </TouchableOpacity>

          {/* <View style={styles.mainFlatListView}>
            <View style={styles.companyNameAndImageView}>
              <View style={styles.companyNameAndImageChildView}>
                <View style={styles.companyImageView}>
                  <Image
                    source={appImages.NBAIcon}
                    style={styles.companyImage}
                  />
                </View>
                <Text style={styles.scoresText}>LES SCORES NBA</Text>
              </View>
              <Text style={styles.seeAllText}>Tous voir</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={scoreBoardData}
              renderItem={({item, index}) => <ScoreBoardListItem item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Results;
