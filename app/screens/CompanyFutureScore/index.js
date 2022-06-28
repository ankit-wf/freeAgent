import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import {COLORS} from '../../config/color';
import {appImages} from '../../config';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import moment from 'moment-timezone';
import ScoreBoardNotificationListItem from '../../components/ScoreBoardNotificationListItem';
import {isEmpty} from 'lodash';
import ScoresLists from './Component/ScoresLists';
import NewsLists from './Component/NewsLists';
import NewsListItem from './Component/NewsListItem';
import ClassmentsListItem from './Component/ClassmentsListItem';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import NotificationIcon from '@assets/appimages/NotificationIcon.svg';

const CompanyFutureScore = ({navigation}) => {
  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.black,
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <TouchableOpacity
          style={{height: 20, aspectRatio: 1, marginLeft: 15}}
          onPress={() => navigation.goBack()}>
          <LeftArrowIconWhite width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            fontFamily: 'GlacialIndifference-Bold',
          }}>
          NBA
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 15, height: 18, width: 18}}>
          <NotificationIcon width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    setNavigationBar();
    setScoreBoardPastData([
      {
        id: 0,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '137',
        score2: '125',
      },
      {
        id: 1,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '137',
        score2: '125',
      },
      {
        id: 2,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '137',
        score2: '125',
      },
      {
        id: 3,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '137',
        score2: '125',
      },
    ]);
    setScoreBoardData([
      {
        id: 0,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
        time: '20:05',
        team: 'WSH - 153',
      },
      {
        id: 1,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
        time: '20:05',
        team: 'WSH - 153',
      },
      {
        id: 2,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
        time: '20:05',
        team: 'WSH - 153',
      },
      {
        id: 3,
        image: appImages.Image3,
        name: 'Blue Jays',
        name2: 'Rockies',
        score: '0-0',
        time: '20:05',
        team: 'WSH - 153',
      },
    ]);
    setPostData([
      {
        id: 0,
        image: appImages.Image4,
        description: 'Phillip Lindsay, running back des Broncos, laissé libre',
        date: '18 Mars 2021',
      },
      {
        id: 1,
        image: appImages.Image5,
        description: 'Phillip Lindsay, running back des Broncos, laissé libre',
        date: '18 Mars 2021',
        subTitle: 'Sélection abonnés',
      },
      {
        id: 2,
        image: appImages.Image4,
        description: 'Phillip Lindsay, running back des Broncos, laissé libre',
        date: '18 Mars 2021',
      },
    ]);
  }, []);
  const [scoreBoardData, setScoreBoardData] = useState([]);
  const [scoreBoardPastData, setScoreBoardPastData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [selectedDate, setselectedDate] = useState(new Date());
  let datesWhitelist = [
    {
      start: moment(),
      // end: moment().add(5, 'days'), // total 12 months enabled
    },
  ];

  const onDateSelected = (date) => {
    setselectedDate(date);
    console.log(
      'DATE===>',
      date,
      date.format('DD'),
      date.format('MM'),
      date.format('YYYY'),
    );
  };

  const getPreviousWeek = (date) => {
    setselectedDate(date);
    console.log(
      'DATE===>',
      date,
      date.format('DD'),
      date.format('MM'),
      date.format('YYYY'),
    );
  };

  return (
    <ScrollableTabView
      nestedScrollEnabled={true}
      tabBarBackgroundColor={'black'}
      tabBarActiveTextColor="#FF4747"
      tabBarInactiveTextColor="#AAAAAA"
      tabBarUnderlineStyle={{backgroundColor: '#FF4747'}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}>
      {/* SCRORES */}

      <View tabLabel="SCORES">
        <ScoresLists
          selectedDate={selectedDate}
          getPreviousWeek={getPreviousWeek}
          datesWhitelist={datesWhitelist}
          onDateSelected={onDateSelected}
          data={scoreBoardData}
          pastData={scoreBoardPastData}
        />
      </View>
      {/* NEWS */}

      <View tabLabel="NEWS">
        <NewsListItem data={postData} />
      </View>
      {/* CLASSMENTS */}

      <View tabLabel="CLASSMENTS">
        <ClassmentsListItem />
      </View>
    </ScrollableTabView>
  );
};

export default CompanyFutureScore;
