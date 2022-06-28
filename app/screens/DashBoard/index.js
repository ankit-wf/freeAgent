import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import {COLORS} from '../../config/color';
import DashBoardItem from './Component/DashBoardItem';
import ScoreBoard from '../../components/scoreBoard';
import News from '../../components/news';
import WhiteSearchIcon from '@assets/appimages/WhiteSearchIcon.svg';
import {postList} from '../../resources/baseServices/auth';

const DashBoard = ({navigation}) => {
  const [postData, setPostData] = useState([]);

  // useEffect(() => {
  //   setPostData([
  //     {
  //       id: 0,
  //       image: appImages.Image4,
  //       description: 'Phillip Lindsay, running back des Broncos, laissé libre',
  //       date: '18 Mars 2021',
  //     },
  //     {
  //       id: 1,
  //       image: appImages.Image5,
  //       description: 'Phillip Lindsay, running back des Broncos, laissé libre',
  //       date: '18 Mars 2021',
  //       subTitle: 'Sélection abonnés',
  //     },
  //   ]);
  // }, []);

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
    setNavigationBar();
    postListData();
  }, []);

  const postListData = useCallback(async () => {
    try {
      const data = {
        apiauth: '6e=nM$/R{sCaPWE',
      };
      const res = await postList(data);
      console.log(res);
      if (res?.data) {
        setPostData(res?.data?.data);
      } else {
      }
    } catch (err) {
      console.log('err===>', err);
    }
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <DashBoardItem
            data={postData}
            companyImage={appImages.NBAIcon}
            handleOnSelect={(postId) => {
              navigation.navigate('PostDetail', postId);
            }}
          />
          <ScoreBoard />
          <News />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashBoard;
