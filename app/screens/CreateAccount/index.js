import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import {COLORS} from '../../config/color';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import AppleIcon from '@assets/appimages/AppleIcon.svg';
import GoogleIcon from '@assets/appimages/GoogleIcon.svg';
import FacebookIcon from '@assets/appimages/FacebookIcon.svg';
import MailIcon from '@assets/appimages/MailIcon.svg';
import RightArrowIconWhite from '@assets/appimages/RightArrowIconWhite.svg';
import {WebView} from 'react-native-webview';
import useInAppBrowser from '../../hooks/useInAppBrowser';
import {login} from '../../resources/baseServices/auth';
import {isEmpty} from 'lodash';
import {setAuthToken, setUserDetails} from '../../helpers/auth';

const CreateAccount = ({navigation}) => {
  const [loginPage, setLoginPage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const openURL = useInAppBrowser();
  const [isloaderVisible, setIsloaderVisible] = useState(false);

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
          <LeftArrowIconWhite width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
      headerTitle: (props) => <Text />,
    });
  };

  const handleLoginBtn = () => {
    loginPage ? null : setLoginPage(!loginPage);
    openURL('https://thefreeagent.fr/login/');
  };
  const handleRegisterBtn = () => {
    openURL('https://thefreeagent.fr/register/');
  };

  useEffect(() => {
    setNavigationBar();
  }, []);

  const handleConnecterButton = async () => {
    if (email === '') {
      Alert.alert('Alert', 'please enter email');
    } else if (password === '') {
      Alert.alert('Alert', 'please enter Password');
    } else {
      setIsloaderVisible(true);
      try {
        const data = {
          apiauth: '6e=nM$/R{sCaPWE',
          rcp_user_login: email,
          rcp_user_pass: password,
        };
        const res = await login(data);
        if (!isEmpty(res?.data?.data)) {
          setIsloaderVisible(false);
          const token = res?.data?.data?.userid;
          await setAuthToken(token);
          console.log(res?.data?.data);
          await setUserDetails(res?.data?.data);
          navigation.navigate('BottomTabNavigator');
        } else {
          setIsloaderVisible(false);
          Alert.alert('Alert!', res?.data?.ResponseMsg);
        }
      } catch (err) {
        console.log('err===>', err);
      }
    }
  };

  return (
    <View style={styles.main}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.root}>
        <Text style={styles.titleText}>
          {!loginPage
            ? 'Nous sommes\nheureux de vous retrouver !'
            : 'Créez un compte'}
        </Text>

        {loginPage && (
          <Text style={styles.description}>
            En créant un compte, vous pourrez choisir vos préférences de ligues
            ainsi que d’équipes afin de bénéficier contenu personnalisé.
          </Text>
        )}

        {/* <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.buttonView, {marginTop: 30}]}>
          <View style={styles.imageView}>
            <GoogleIcon width={'100%'} height={'100%'} />
          </View>
          <Text style={styles.text}>Continuez avec Google</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.buttonView}>
          <View style={styles.imageView}>
            <AppleIcon width={'100%'} height={'100%'} />
          </View>
          <Text style={styles.text}>Continuez avec Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.buttonView}>
          <View style={styles.imageView}>
            <FacebookIcon width={'100%'} height={'100%'} />
          </View>
          <Text style={styles.text}>Continuez avec Facebook</Text>
        </TouchableOpacity> */}
        <View style={{marginTop: 15}}>
          <Text style={styles.emailtext}>E-mail</Text>
          <TextInput
            placeholder="Votre e-mail"
            placeholderTextColor={'#CECECE'}
            style={styles.searchItemTextInput}
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.emailtext}>Mot de passe</Text>
          <TextInput
            placeholder="Votre mot de passe"
            placeholderTextColor={'#CECECE'}
            style={styles.searchItemTextInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            keyboardType="default"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleConnecterButton()}
          activeOpacity={0.8}
          style={styles.createFreeAccountView}>
          {!isloaderVisible && (
            <Text style={styles.createFreeAccountText}>SE CONNECTER</Text>
          )}
          {!isloaderVisible ? (
            <View style={styles.rightButtonView}>
              <RightArrowIconWhite width={'100%'} height={'100%'} />
            </View>
          ) : (
            <ActivityIndicator color={'white'} size={'small'} />
          )}
        </TouchableOpacity>
        <View style={styles.devider} />

        {/* <TouchableOpacity
          onPress={() =>
            loginPage ? null : navigation.navigate('CreateAccount2')
          }
          activeOpacity={0.8}
          style={[styles.buttonView, {marginTop: 30}]}>
          <View style={styles.imageView}>
            <MailIcon width={'100%'} height={'100%'} />
          </View>
          <Text style={styles.text}>
            {loginPage
              ? 'Connectez-vous avec e-mail'
              : 'Créez un compte avec e-mail'}
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => (loginPage ? handleLoginBtn() : handleRegisterBtn())}
          style={styles.alreadySubscribeAndLoginTextView}>
          {/* <WebView
            source={{
              uri: 'https://thefreeagent.fr/login/',
            }}
            // source={{
            //   html: '<iframe frameborder="0" loading="lazy" id="ausha-oQ1L" height="500" style="border: none; width:100%; height:500px" src="https://player.ausha.co/index.html?showId=bVK2VUdgvlzY&display=vertical&color=%2372238e&v=3&playerId=ausha-oQ1L"></iframe><script src="https://player.ausha.co/ausha-player.js"></script>',
            // }}
          /> */}
          <Text style={styles.alreadySubscribeText}>
            {!loginPage
              ? "Vous n'avez pas de compte? Créez votre compte"
              : 'Déjà abonné ?'}
            <Text style={styles.loginText}> Connectez-vous</Text>
          </Text>
          <View style={[styles.imageView, {marginLeft: 10}]}>
            <RightArrowIconWhite width={'100%'} height={'100%'} />
          </View>
        </TouchableOpacity>
      </View>
      {!loginPage && (
        <View style={styles.descriptionView}>
          <Text style={styles.bottomDesctiptionText}>
            En m’abonnant, j’accepte les Modalités de service et Politique de
            confidentialité d’US Sports Media
          </Text>
        </View>
      )}
    </View>
  );
};

export default CreateAccount;
