import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import {COLORS} from '../../config/color';
import WhiteCloseIcon from '@assets/appimages/WhiteCloseIcon.svg';
import SettingIcon from '@assets/appimages/SettingIcon.svg';
import SettingBtn from '@assets/appimages/SettingBtn.svg';
import RightArrow from '@assets/appimages/RightArrow.svg';
import TIcon from '@assets/appimages/TIcon.svg';
import ConditionIcon from '@assets/appimages/ConditionIcon.svg';
import PrivacyIcon from '@assets/appimages/PrivacyIcon.svg';
import FAQIcon from '@assets/appimages/FAQIcon.svg';
import ContactUsIcon from '@assets/appimages/ContactUsIcon.svg';
import RateIcon from '@assets/appimages/RateIcon.svg';
import LogoutIcon from '@assets/appimages/LogoutIcon.svg';
import YourPreferencesList from '../../components/YourPreferencesList';
import {clearAsyncStorage, removeAuthToken} from '../../helpers/auth';
import {logError} from '../../helpers/logging';
import useInAppBrowser from '../../hooks/useInAppBrowser';
import AsyncStorage from '@react-native-community/async-storage';

const Menu = ({navigation}) => {
  const [preferenceData, setPreferenceData] = useState([]);
  const [user, setUser] = useState();
  const openURL = useInAppBrowser();

  useEffect(() => {
    userDetails().then((r) => setUser(r));
  }, []);

  const userDetails = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user_details');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
    console.log('Done.');
  };

  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.black,
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <WhiteCloseIcon width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
      headerTitle: (props) => <Text />,
      headerRight: (props) => (
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <View style={styles.settingImageMainView}>
            <View style={styles.settingImageChildView}>
              <SettingIcon width={'100%'} height={'100%'} />
            </View>
          </View>
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    setNavigationBar();
    setPreferenceData([
      {
        id: 0,
        image: appImages.Image2,
      },
      {
        id: 1,
        image: appImages.Image6,
      },
      {
        id: 2,
        image: appImages.Image3,
      },
    ]);
  }, []);

  const _handleLogOutPress = async () => {
    try {
      navigation.navigate('AccountProposal');
      await clearAsyncStorage();
      await removeAuthToken();
    } catch (err) {
      logError(err, '[SettingsScreen] logOut Error');
    }
  };
  return (
    <View style={styles.main}>
      <SafeAreaView translucent backgroundColor="transparent" flex={1}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ScrollView style={{bottom: 5}}>
          <View style={styles.root}>
            <Text style={styles.titleText}>
              Bonjour {user ? user.user_display_name : ''}
            </Text>

            {/*<TouchableOpacity*/}
            {/*  onPress={() => openURL('https://thefreeagent.fr/register/')}*/}
            {/*  activeOpacity={0.8}*/}
            {/*  style={styles.createFreeAccountView}>*/}
            {/*  <Text style={styles.createFreeAccountText}>*/}
            {/*    Commencez votre semaine d’essai*/}
            {/*  </Text>*/}
            {/*  <View style={styles.rightButtonView}>*/}
            {/*    <RightArrowIconBlack width={'100%'} height={'100%'} />*/}
            {/*  </View>*/}
            {/*</TouchableOpacity>*/}

            <View style={styles.yourPreferencesMainView}>
              <View style={styles.yourPreferenceTextAndIconView}>
                <Text style={styles.yourPreferencesText}>Vos préférences</Text>
                <TouchableOpacity style={styles.iconView}>
                  <SettingBtn width={'100%'} height={'100%'} />
                </TouchableOpacity>
              </View>

              <View style={styles.companyImageMainView}>
                <FlatList
                  horizontal={true}
                  data={preferenceData}
                  keyExtractor={(item, index) => item.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <YourPreferencesList
                      item={item}
                      handleYourPreferencesBtn={() =>
                        navigation.navigate('WithoutPreferences')
                      }
                    />
                  )}
                />
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonView, {marginTop: 20}]}>
              <Text style={styles.articalText}>Mes articles favoris</Text>
              <View style={styles.rightArrowView}>
                <RightArrow width={'100%'} height={'100%'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonView}
              onPress={() => openURL('https://thefreeagent.fr/')}>
              <Text style={styles.articalText}>Mes préférences d’email</Text>
              <View style={styles.rightArrowView}>
                <RightArrow width={'100%'} height={'100%'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonView}>
              <Text style={styles.articalText}>Mes notifications</Text>
              <View style={styles.rightArrowView}>
                <RightArrow width={'100%'} height={'100%'} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openURL('https://thefreeagent.fr/')}
              activeOpacity={0.8}
              style={[styles.iconAndTextView, {marginTop: 40}]}>
              <View style={styles.iconView}>
                <TIcon width={'100%'} height={'100%'} />
              </View>
              <Text style={styles.text}>À propos de The Free Agent</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={null}
              activeOpacity={0.8}
              style={styles.iconAndTextView}>
              <View style={styles.iconView}>
                <RateIcon width={'100%'} height={'100%'} />
              </View>
              <Text style={styles.text}>Notez l’application</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={null}
              activeOpacity={0.8}
              style={styles.iconAndTextView}>
              <View style={styles.iconView}>
                <FAQIcon height={'100%'} width={'100%'} />
              </View>
              <Text style={styles.text}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={null}
              activeOpacity={0.8}
              style={styles.iconAndTextView}>
              <View style={styles.iconView}>
                <ContactUsIcon height={'100%'} width={'100%'} />
              </View>
              <Text style={styles.text}>Contactez le support</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={null}
              activeOpacity={0.8}
              style={styles.iconAndTextView}>
              <View style={styles.iconView}>
                <PrivacyIcon height={'100%'} width={'100%'} />
              </View>
              <Text style={styles.text}>Politique de confidentialité</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={null}
              activeOpacity={0.8}
              style={styles.iconAndTextView}>
              <View style={styles.iconView}>
                <ConditionIcon height={'100%'} width={'100%'} />
              </View>
              <Text style={styles.text}>Conditions générales de vente</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.LogoutView}
          onPress={() => _handleLogOutPress()}>
          <View style={styles.iconView}>
            <LogoutIcon height={'100%'} width={'100%'} />
          </View>
          <Text style={styles.text}>Déconnexion</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Menu;
