import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  ActivityIndicator,
  Share,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {COLORS} from '../../config/color';
import {appImages} from '../../config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import SeekBar from '../../components/SeekBar';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import ForwardIconWhite from '@assets/appimages/ForwardIconWhite.svg';
import BackRewindIcon from '@assets/appimages/BackRewindIcon.svg';
import RewindIcon from '@assets/appimages/RewindIcon.svg';
import Play from '@assets/appimages/Play.svg';
import Pause from '@assets/appimages/Pause.svg';
import {WebView} from 'react-native-webview';

const Player = ({navigation}) => {
  // const [musicItem, setTrack] = useState({
  //   id: 'unique track id',
  //   url: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
  //   title: 'Avaritia',
  //   artist: 'deadmau5',
  //   album: 'while(1<2)',
  //   time: '20:00',
  //   duration: 84.8195,
  // });

  // const {
  //   isMusicPlay,
  //   isBuffering,
  //   musicPlay,
  //   musicPause,
  //   position,
  //   duration,
  //   togglePlay,
  //   resetMusicPlay,
  // } = useMusicPlayer({
  //   musicItem,
  // });

  // const [isPlay, setIsPlay] = useState(false);

  // const PlayMusic = () => {
  //   console.log('MusicPlay===>', isMusicPlay);
  //   // setIsPlay(!isPlay);
  //   if (isPlay) {
  //     musicPause();
  //     setIsPlay(false);
  //   } else {
  //     musicPlay();
  //     setIsPlay(true);
  //   }
  // };

  const onShare = async () => {
    try {
      const result = await Share.share({
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABvFBMVEUAAAAA//8AnuwAnOsAneoAm+oAm+oAm+oAm+oAm+kAnuwAmf8An+0AqtUAku0AnesAm+oAm+oAnesAqv8An+oAnuoAneoAnOkAmOoAm+oAm+oAn98AnOoAm+oAm+oAmuoAm+oAmekAnOsAm+sAmeYAnusAm+oAnOoAme0AnOoAnesAp+0Av/8Am+oAm+sAmuoAn+oAm+oAnOoAgP8Am+sAm+oAmuoAm+oAmusAmucAnOwAm+oAmusAm+oAm+oAm+kAmusAougAnOsAmukAn+wAm+sAnesAmeoAnekAmewAm+oAnOkAl+cAm+oAm+oAmukAn+sAmukAn+0Am+oAmOoAmesAm+oAm+oAm+kAme4AmesAm+oAjuMAmusAmuwAm+kAm+oAmuoAsesAm+0Am+oAneoAm+wAmusAm+oAm+oAm+gAnewAm+oAle0Am+oAm+oAmeYAmeoAmukAoOcAmuoAm+oAm+wAmuoAneoAnOkAgP8Am+oAm+oAn+8An+wAmusAnuwAs+YAmegAm+oAm+oAm+oAmuwAm+oAm+kAnesAmuoAmukAm+sAnukAnusAm+oAmuoAnOsAmukAqv9m+G5fAAAAlHRSTlMAAUSj3/v625IuNwVVBg6Z//J1Axhft5ol9ZEIrP7P8eIjZJcKdOU+RoO0HQTjtblK3VUCM/dg/a8rXesm9vSkTAtnaJ/gom5GKGNdINz4U1hRRdc+gPDm+R5L0wnQnUXzVg04uoVSW6HuIZGFHd7WFDxHK7P8eIbFsQRhrhBQtJAKN0prnKLvjBowjn8igenQfkQGdD8A7wAAAXRJREFUSMdjYBgFo2AUDCXAyMTMwsrGzsEJ5nBx41HKw4smwMfPKgAGgkLCIqJi4nj0SkhKoRotLSMAA7Jy8gIKing0KwkIKKsgC6gKIAM1dREN3Jo1gSq0tBF8HV1kvax6+moG+DULGBoZw/gmAqjA1Ay/s4HA3MISyrdC1WtthC9ebGwhquzsHRxBfCdUzc74Y9UFrtDVzd3D0wtVszd+zT6+KKr9UDX749UbEBgULIAbhODVHCoQFo5bb0QkXs1RAvhAtDFezTGx+DTHEchD8Ql4NCcSyoGJYTj1siQRzL/JKeY4NKcSzvxp6RmSWPVmZhHWnI3L1TlEFDu5edj15hcQU2gVqmHTa1pEXJFXXFKKqbmM2ALTuLC8Ak1vZRXRxa1xtS6q3ppaYrXG1NWjai1taCRCG6dJU3NLqy+ak10DGImx07LNFCOk2js6iXVyVzcLai7s6SWlbnIs6rOIbi8ViOifIDNx0uTRynoUjIIRAgALIFStaR5YjgAAAABJRU5ErkJggg==',
        title: 'Share via',
        message: 'some message',
        // social: Share.Social.WHATSAPP,
        whatsAppNumber: '9199999999', // country code + phone number
        filename: 'test', // only for base64 file in Android
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // useEffect(() => {
  //   console.log('MusicPlay===>', isMusicPlay);
  // }, [isMusicPlay]);

  return (
    <View style={styles.main}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageView}>
            <Image source={appImages.Image1} style={styles.image} />

            <View style={styles.backIconView}>
              <TouchableOpacity
                style={styles.backIcon}
                onPress={() => navigation.goBack()}
                hitSlop={{
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10,
                }}>
                <LeftArrowIconWhite width={'100%'} height={'100%'} />
              </TouchableOpacity>
            </View>

            <View style={styles.forwardIconView}>
              <TouchableOpacity
                style={styles.backIcon}
                onPress={onShare}
                hitSlop={{
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10,
                }}>
                <ForwardIconWhite width={'100%'} height={'100%'} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.loremText}>Lorem ipsum dolores</Text>
          <Text style={styles.dateText}>16 AVRIL 2021</Text>

          <View style={{aspectRatio: 0.75, width: '100%', marginTop: 20}}>
            <WebView
              source={{
                uri: 'https://player.ausha.co/index.html?showId=bVK2VUdgvlzY&display=vertical&color=%2372238e&v=3&playerId=ausha-oQ1L',
              }}
              // source={{
              //   html: '<iframe frameborder="0" loading="lazy" id="ausha-oQ1L" height="500" style="border: none; width:100%; height:500px" src="https://player.ausha.co/index.html?showId=bVK2VUdgvlzY&display=vertical&color=%2372238e&v=3&playerId=ausha-oQ1L"></iframe><script src="https://player.ausha.co/ausha-player.js"></script>',
              // }}
            />
          </View>

          {/* <View style={styles.playerView}>
              <TouchableOpacity style={styles.rewindView}>
                <BackRewindIcon width={'100%'} height={'100%'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={togglePlay}
                style={styles.playBtnChildView}>
                <View style={styles.stopButton}>
                  {!isBuffering ? (
                    isMusicPlay ? (
                      <Play width={'100%'} height={'100%'} />
                    ) : (
                      <Pause width={'100%'} height={'100%'} />
                    )
                  ) : (
                    <View style={styles.activityIndicatorView}>
                      <ActivityIndicator color={'white'} />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rewindView}>
                <RewindIcon width={'100%'} height={'100%'} />
              </TouchableOpacity>
            </View> */}

          {/* <View style={styles.sliderMainView}>
              <SeekBar
                style={{marginTop: 5}}
                position={position}
                duration={duration}
                withThumb="active"
              />
            </View> */}

          <Text style={styles.loreamText}>Lorem ipsum dolores</Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            condimentum imperdiet vehicula. Consectetur adipiscing elit. Aliquam
            condimentum imperdiet vehicula.
          </Text>

          <Text style={[styles.description, {paddingBottom: 20}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            condimentum imperdiet vehicula. Consectetur adipiscing elit. Aliquam
            condimentum imperdiet vehicula.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Player;
