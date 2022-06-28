import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {COLORS} from '../../config/color';
import DashBoardItem from '../DashBoard/Component/DashBoardItem';
import {appImages} from '../../config';
import News from '../../components/news';

const NewsList = ({navigation}) => {
  const [postData, setPostData] = useState([]);
  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.black,
        shadowColor: 'transparent',
      },
      headerLeft: () => <Text />,
      headerTitle: (props) => <Text style={styles.headerTitleStyle}>News</Text>,
      headerRight: () => <Text />,
    });
  };

  useEffect(() => {
    setNavigationBar();
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
    ]);
  }, []);

  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DashBoardItem
          data={postData}
          companyImage={appImages.NBAIcon}
          handleOnSelect={() => navigation.navigate('PostDetail')}
        />
        {/* <DashBoardItem data={postData} companyImage={appImages.Image3} /> */}
        <News />
      </ScrollView>
    </View>
  );
};

export default NewsList;
