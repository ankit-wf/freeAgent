import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import {COLORS} from '../../config/color';
import RightArrowIconWhite from '@assets/appimages/RightArrowIconWhite.svg';
import useInAppBrowser from '../../hooks/useInAppBrowser';

const AccountProposal = ({navigation}) => {
  const [subscribe, setSubscribe] = useState('Abonnez-vous');
  const openURL = useInAppBrowser();

  const _handleSubscribeButton = (selected) => {
    setSubscribe(selected);
    openURL('https://thefreeagent.fr/register/?plan=chooseplan');
    // navigation.navigate('PremiumAccount');
  };
  const _handleAlreadySubscribeButton = (selected) => {
    setSubscribe(selected);
    navigation.navigate('CreateAccount');
  };

  const handleCreateFreeAccountBtn = () => {
    openURL('https://thefreeagent.fr/register/');
    // navigation.navigate('Preferences');
  };
  return (
    <View style={styles.main}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.root}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="stretch"
          source={appImages.Image1}
        />

        <View style={styles.childView}>
          <Text style={styles.titleText}>THE FREE AGENT</Text>
          <Text style={styles.nbaText}>NBA - NFL - MLB - NHL</Text>
          <Text style={styles.description}>
            Créer un compte gratuitement pour choisir vos préférences et
            profiter des contenus lorem.
          </Text>
          <TouchableOpacity
            onPress={() => handleCreateFreeAccountBtn()}
            activeOpacity={0.8}
            style={styles.createFreeAccountView}>
            <Text style={styles.createFreeAccountText}>
              CRÉER UN COMPTE GRATUIT
            </Text>
            <View style={styles.rightButtonView}>
              <RightArrowIconWhite width={'100%'} height={'100%'} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textAndButtonView}>
          <Text style={styles.accessText}>
            Accédez à l’intégralité des contenus de The Free Agent sans
            engagement - 1 semaine offerte
          </Text>
          <View style={styles.subscribeAndAlreadySubscribeBtnView}>
            <TouchableOpacity
              onPress={() => _handleSubscribeButton('Abonnez-vous')}
              style={[
                styles.subscribeButtonView,
                {
                  backgroundColor:
                    subscribe === 'Abonnez-vous' ? '#F8EE82' : COLORS.black,
                  borderColor: subscribe === 'Abonnez-vous' ? null : '#F8EE82',
                },
              ]}>
              <Text
                style={[
                  styles.subscribeText,
                  {
                    color:
                      subscribe === 'Abonnez-vous'
                        ? COLORS.black
                        : COLORS.white,
                  },
                ]}>
                Abonnez-vous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => _handleAlreadySubscribeButton('Déjà abonné')}
              style={[
                styles.alreadySubscribeButtonView,
                {
                  backgroundColor:
                    subscribe === 'Déjà abonné' ? '#F8EE82' : COLORS.black,
                  borderColor: subscribe === 'Déjà abonnés' ? null : '#F8EE82',
                },
              ]}>
              <Text
                style={[
                  styles.alreadySubscribeText,
                  {
                    color:
                      subscribe === 'Déjà abonné' ? COLORS.black : COLORS.white,
                  },
                ]}>
                Déjà abonné
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.deviderAndTextView}>
        <View style={styles.devider} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.readArticalView}
          onPress={() => navigation.navigate('BottomTabNavigator')}>
          <Text style={styles.reactArticalText}>
            Lire les articles sans préférences
          </Text>
          <View style={styles.rightButtonView}>
            <RightArrowIconWhite width={'100%'} height={'100%'} />
          </View>
        </TouchableOpacity>
      </View>
      <SafeAreaView />
    </View>
  );
};

export default AccountProposal;
