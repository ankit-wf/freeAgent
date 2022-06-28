import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import styles from './styles';
import {COLORS} from '../../config/color';
import {appImages} from '../../config';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import {WebView} from 'react-native-webview';

const Podcasts = ({navigation}) => {
  const [podcastList, setPodcastList] = useState([]);

  useEffect(() => {
    setPodcastList([
      {
        id: 0,
        image: appImages.Image2,
        title: 'Lorem ipsum dolores',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum imperdiet vehicula.',
        date: '16 AVR • 37min',
      },
      {
        id: 1,
        image: appImages.Image2,
        title: 'Lorem ipsum dolores',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum imperdiet vehicula.',
        date: '16 AVR • 37min',
      },
      {
        id: 2,
        image: appImages.Image2,
        title: 'Lorem ipsum dolores',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum imperdiet vehicula.',
        date: '16 AVR • 37min',
      },
      {
        id: 3,
        image: appImages.Image2,
        title: 'Lorem ipsum dolores',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum imperdiet vehicula.',
        date: '16 AVR • 37min',
      },
      {
        id: 4,
        image: appImages.Image2,
        title: 'Lorem ipsum dolores',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum imperdiet vehicula.',
        date: '16 AVR • 37min',
      },
      {
        id: 5,
        image: appImages.Image2,
        title: 'Lorem ipsum dolores',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum imperdiet vehicula.',
        date: '16 AVR • 37min',
      },
    ]);
  }, []);

  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.black,
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <Text />
        // <TouchableOpacity style={{height: 20, aspectRatio: 1, marginLeft: 15}}>
        //   <LeftArrowIconWhite width={'100%'} height={'100%'} />
        // </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Text style={styles.headerTitleStyle}>Podcasts</Text>
      ),
      headerRight: () => <Text />,
    });
  };

  useEffect(() => {
    setNavigationBar();
  }, []);

  const podcastListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.postListItemMainView}
        onPress={() => navigation.navigate('Player')}>
        <View style={styles.postListItemChildView}>
          <View style={styles.imageMainView}>
            <View style={styles.imageView}>
              <Image source={item.image} style={styles.postImage} />
            </View>
          </View>
          <View style={styles.textMainView}>
            <View style={styles.titleAndDesTextView}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <Text numberOfLines={3} style={styles.descriptionText}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        data={podcastList}
        renderItem={podcastListItem}
        keyExtractor={(item) => item.id}
      />
      {/*<View style={{aspectRatio: 0.2, width: '100%', marginTop: 0}}>*/}
      {/*  <WebView*/}
      {/*    originWhitelist={['*']}*/}
      {/*    source={{*/}
      {/*      html: '<iframe frameBorder="0" loading="lazy" id="ausha-oQ1L" height="" style="border: none; width:100%;" src="https://player.ausha.co/index.html?showId=bVK2VUdgvlzY&display=vertical&color=%2372238e&v=3&playerId=ausha-oQ1L"></iframe><script src="https://player.ausha.co/ausha-player.js"></script>',*/}
      {/*    }}*/}
      {/*    // source={{*/}
      {/*    //   html: '<iframe frameborder="0" loading="lazy" id="ausha-oQ1L" height="500" style="border: none; width:100%; height:500px" src="https://player.ausha.co/index.html?showId=bVK2VUdgvlzY&display=vertical&color=%2372238e&v=3&playerId=ausha-oQ1L"></iframe><script src="https://player.ausha.co/ausha-player.js"></script>',*/}
      {/*    // }}*/}
      {/*  />*/}
      {/*</View>*/}
    </View>
  );
};

export default Podcasts;
