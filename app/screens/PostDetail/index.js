import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import News from '../../components/news';
import RBSheet from 'react-native-raw-bottom-sheet';
import YoutubePlayer from 'react-native-youtube-iframe';
import ClockIcon from '@assets/appimages/ClockIcon.svg';
import LeftArrowIconBlack from '@assets/appimages/LeftArrowIconBlack.svg';
import ForwardIcon from '@assets/appimages/ForwardIcon.svg';
import SaveIcon from '@assets/appimages/SaveIcon.svg';
import ChatIcon from '@assets/appimages/ChatIcon.svg';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import {postDetails} from '../../resources/baseServices/auth';
import useInAppBrowser from '../../hooks/useInAppBrowser';

const PostDetail = ({navigation, route}) => {
  const refRBSheet = useRef();
  const [playing, setPlaying] = useState(false);
  const [p_Details, setP_Details] = useState('');
  const openURL = useInAppBrowser();
  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const handleSubscribeBtn = () => {
    refRBSheet.current.close();
    openURL('https://thefreeagent.fr/register/?plan=chooseplan');
    // navigation.navigate('PremiumAccount');
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABvFBMVEUAAAAA//8AnuwAnOsAneoAm+oAm+oAm+oAm+oAm+kAnuwAmf8An+0AqtUAku0AnesAm+oAm+oAnesAqv8An+oAnuoAneoAnOkAmOoAm+oAm+oAn98AnOoAm+oAm+oAmuoAm+oAmekAnOsAm+sAmeYAnusAm+oAnOoAme0AnOoAnesAp+0Av/8Am+oAm+sAmuoAn+oAm+oAnOoAgP8Am+sAm+oAmuoAm+oAmusAmucAnOwAm+oAmusAm+oAm+oAm+kAmusAougAnOsAmukAn+wAm+sAnesAmeoAnekAmewAm+oAnOkAl+cAm+oAm+oAmukAn+sAmukAn+0Am+oAmOoAmesAm+oAm+oAm+kAme4AmesAm+oAjuMAmusAmuwAm+kAm+oAmuoAsesAm+0Am+oAneoAm+wAmusAm+oAm+oAm+gAnewAm+oAle0Am+oAm+oAmeYAmeoAmukAoOcAmuoAm+oAm+wAmuoAneoAnOkAgP8Am+oAm+oAn+8An+wAmusAnuwAs+YAmegAm+oAm+oAm+oAmuwAm+oAm+kAnesAmuoAmukAm+sAnukAnusAm+oAmuoAnOsAmukAqv9m+G5fAAAAlHRSTlMAAUSj3/v625IuNwVVBg6Z//J1Axhft5ol9ZEIrP7P8eIjZJcKdOU+RoO0HQTjtblK3VUCM/dg/a8rXesm9vSkTAtnaJ/gom5GKGNdINz4U1hRRdc+gPDm+R5L0wnQnUXzVg04uoVSW6HuIZGFHd7WFDxHK7P8eIbFsQRhrhBQtJAKN0prnKLvjBowjn8igenQfkQGdD8A7wAAAXRJREFUSMdjYBgFo2AUDCXAyMTMwsrGzsEJ5nBx41HKw4smwMfPKgAGgkLCIqJi4nj0SkhKoRotLSMAA7Jy8gIKing0KwkIKKsgC6gKIAM1dREN3Jo1gSq0tBF8HV1kvax6+moG+DULGBoZw/gmAqjA1Ay/s4HA3MISyrdC1WtthC9ebGwhquzsHRxBfCdUzc74Y9UFrtDVzd3D0wtVszd+zT6+KKr9UDX749UbEBgULIAbhODVHCoQFo5bb0QkXs1RAvhAtDFezTGx+DTHEchD8Ql4NCcSyoGJYTj1siQRzL/JKeY4NKcSzvxp6RmSWPVmZhHWnI3L1TlEFDu5edj15hcQU2gVqmHTa1pEXJFXXFKKqbmM2ALTuLC8Ak1vZRXRxa1xtS6q3ppaYrXG1NWjai1taCRCG6dJU3NLqy+ak10DGImx07LNFCOk2js6iXVyVzcLai7s6SWlbnIs6rOIbi8ViOifIDNx0uTRynoUjIIRAgALIFStaR5YjgAAAABJRU5ErkJggg==',
        title: p_Details.post_title,
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

  useEffect(() => {
    postDetailsData();
  }, []);

  const postDetailsData = useCallback(async () => {
    const postId = route?.params;
    try {
      const data = {
        apiauth: '6e=nM$/R{sCaPWE',
        postid: postId,
      };
      const res = await postDetails(data);
      if (res?.data) {
        // setPostData(res?.data?.data);
        setP_Details(res?.data?.data[0]);
      } else {
      }
    } catch (err) {
      console.log('err===>', err);
    }
  }, []);
  return (
    <View style={styles.main}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.postImageView}>
          <Image source={appImages.Image1} style={styles.Image} />
        </View>
        <View style={styles.contentMainView}>
          <View style={styles.descriptionsView}>
            <Text style={styles.contentTitle}>
              {/* Retour sur le All Star{'\n'}Game 2020: Le retour{'\n'}en grâce ? */}
              {p_Details?.post_title}
            </Text>
          </View>
          <View style={styles.subContentView}>
            <Text style={styles.subContentsText}>PAR</Text>
            <Text style={styles.subContentNormalText}>
              {' '}
              BAPTISTE TOURNIER-GUILLAUMY
            </Text>
            <Text style={styles.subContentsText}> | 23 JUILLET 2020</Text>
          </View>
          <View style={styles.minitView}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.open();
              }}
              activeOpacity={0.9}
              style={styles.minitBtn}>
              <View style={styles.clockView}>
                <ClockIcon width={'100%'} height={'100%'} />
              </View>
              <View style={styles.minitBtnTextView}>
                <Text style={styles.minitBtnText}>3 minutes de lecture</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionTextView}>
            <Text style={styles.postDescriptions}>
              Depuis quelques années le{' '}
              <Text
                style={{
                  fontFamily: 'GlacialIndifference-Bold',
                  fontSize: 16,
                  color: '#FF4747',
                }}>
                All Star Weekend
              </Text>{' '}
              n’attirait plus vraiment les foules car devenu trop caricatural.
              Le point d’orgue: le match des Étoiles le dimanche soir, véritable
              simulacre de basket.
            </Text>
            <Text style={styles.postDescriptions}>
              Mais cette année, qui dit nouvelle décennie dit aussi nouvelles
              règles, et nous avons sans doute assisté à l’un des meilleurs All
              Star WeekEnd depuis bien longtemps.
            </Text>
            <Text style={styles.postDescriptions}>
              Retour sur un week end riche en émotions.
            </Text>
            <Text
              style={[
                styles.postDescriptions,
                {fontFamily: 'GlacialIndifference-Bold'},
              ]}>
              Vendredi: Le Rising Star Challenge
            </Text>
            <Text style={styles.postDescriptions}>
              Morant et Zion contre Barret et Gilgeous-Alexander, USA vs World.
              La cuvée 2020 des rookies a de quoi donner l’eau à la bouche pour
              ce premier rdv du All Star WeekEnd. Les deux équipes comptaient en
              plus dans leurs rangs les deux néo All-Star que sont Dončić (pour
              team World) et Trae Young (pour Team USA).
            </Text>
            <Text style={styles.postDescriptions}>
              Je passerai rapidement sur le match qui a vu Team USA l’emporter
              151 à 131.
            </Text>
            <Text style={styles.postDescriptions}>Ce qu’on retiendra :</Text>
            <Text style={styles.postDescriptions}>
              Les passes laser de Morant en alley-hoop pour le colosse
              Williamson,
            </Text>
            <Text style={styles.postDescriptions}>
              La bonne perf du new-yorkais RJ Barret avec 27 points et 5 passes
            </Text>
            <Text style={styles.postDescriptions}>
              Miles Bridges MVP du match avec quelques dunk de folie (notamment
              celui là—>)
            </Text>
            <View style={styles.contentVideoView}>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={'iee2TATGMyI'}
                onChangeState={onStateChange}
              />
            </View>
            <View style={styles.descriptionTextView}>
              <Text style={styles.postDescriptions}>
                <Text
                  style={[
                    styles.postDescriptions,
                    {fontFamily: 'GlacialIndifference-Bold'},
                  ]}>
                  Samedi: Le dernier concours de Dunk pour Aaron Gordon ?
                </Text>
                {'\n'}
                Trois épreuves et trois gagnants surprise et un concours de dunk
                qui restera sans doute comme l’un des meilleurs jamais vu.{'\n'}
                Je passerai sur le skills challenge qui aura vu (le futur MIP ?)
                Bam Adebayo remporter le concours. Attardons nous sur le
                concours à trois points et son final haletant qui a vu Miles
                Bridges l’emporter avec 27 points (contre 26 à Devin Booker) sur
                l’ultime ballon à la dernière seconde. L’un des favoris, Trae
                Young, artilleur invétéré du parking n’a pas fait mieux que 15
                malheureux petits points et peu de paniers rentrés. Tout
                l’inverse de Devin Booker qui a posé les bases avec 27 points
                d’entree de jeu !{'\n'} Un concours à trois points sans Curry ou
                Thompson c’est toujours bizarre…{'\n'} À quand remonte le
                dernier concours de Dunk interessant ? A priori tout le monde
                s’accorde pour dire que le duel Gordon/Lavine en 2016 est le
                dernier. Mais ça c’était avant le duel Jones Jr/Gordon de 2020.
                Je n’oublie pas bien sur Pat Connaughton et Dwight Howard qui
                ont rendu chacun hommage à la culture basket à leur manière, en
                reprenant White Men can’t Jump et le personnage de Woody pour
                Connaughton et Kobe pour Howard avec sa cape de Superman. Mais
                ce duel, mon dieu que ça faisait du bien de les voir enchainer
                les performances exceptionnelles mais la polémique D.Wade
                occulte tout le reste. Accusé (à juste titre ?) d’avoir favorisé
                son ancien coéquipier à Miami en ne donnant qu’un 9 à Gordon
                alors que ce dernier venait de sauter par dessus l’immense Tacko
                Fall (joli bébé de 2m26). Tout le monde repart avec le sentiment
                qu’Aaron Gordon s’est fait volé et qu’il ne re-participera plus
                au Dunk contest durant sa carrière. Comment ne pas le comprendre
                après avoir planté ce dunk à une main ?
              </Text>
            </View>
            <News />
          </View>
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        openDuration={100}
        height={180}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
          draggableIcon: {
            backgroundColor: '#AAAAAA',
          },
          container: {},
        }}>
        <View style={styles.postContentMainView}>
          <View style={styles.postArticalMainView}>
            <View style={styles.postArticalView}>
              <TouchableOpacity
                onPress={() => {
                  refRBSheet.current.close();
                }}
                style={styles.backBtn}>
                <LeftArrowIconWhite width={'100%'} height={'100%'} />
              </TouchableOpacity>
              <View style={styles.ArticalView}>
                <Text style={styles.articalText}>
                  Cet article{'\n'}est réservé aux abonné(e)s
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.subscribeMainView}>
            <Text style={styles.subscribeNowText}>
              Abonnez-vous dès{'\n'}maintenant
            </Text>
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                style={styles.subscribeNowBtn}
                onPress={handleSubscribeBtn}>
                <Text style={styles.subContentsBtnText}>JE M’ABONNE</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={styles.alreadySubscibeText}>Déjà abonné ?</Text>
              <Text style={styles.logInText}>Connectez-vous</Text>
            </View>
          </View>
        </View>
      </RBSheet>
      <View style={styles.postBottomView}>
        <View style={styles.dividerView} />
        <View style={styles.mainBottomView}>
          <TouchableOpacity
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
            onPress={() => navigation.goBack()}
            style={styles.LeftArrowView}>
            <LeftArrowIconBlack width={'100%'} height={'100%'} />
          </TouchableOpacity>

          <View style={styles.rigthContentMainView}>
            <View style={styles.rigthContentView}>
              <TouchableOpacity style={{height: 18, width: 20}}>
                <ChatIcon width={'100%'} height={'100%'} />
              </TouchableOpacity>
              <View style={{left: 5}}>
                <Text>18</Text>
              </View>
            </View>
            <TouchableOpacity style={{height: 19, width: 13}}>
              <SaveIcon width={'100%'} height={'100%'} />
            </TouchableOpacity>
            <TouchableOpacity style={{height: 18, width: 18}} onPress={onShare}>
              <ForwardIcon width={'100%'} height={'100%'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
};

export default PostDetail;
