import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Keyboard,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import {COLORS} from '../../config/color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import PrivacyIcon from '@assets/appimages/PrivacyIcon.svg';

const Setting = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

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
      headerRight: (props) => (
        <TouchableOpacity onPress={null}>
          <Text style={styles.headerTitleStyle}>Enregistrer</Text>
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    setNavigationBar();
  }, []);

  return (
    <View style={styles.main}>
      <SafeAreaView translucent backgroundColor="transparent" flex={1}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <KeyboardAwareScrollView>
          <View style={styles.root}>
            <Text style={styles.titleText}>Préférences compte</Text>
            <View style={{marginTop: 15}}>
              <Text style={styles.text}>Prénom</Text>
              <TextInput
                placeholder="Prénom"
                placeholderTextColor={COLORS.black}
                style={styles.searchItemTextInput}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                keyboardType="default"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.text}>Nom</Text>
              <TextInput
                placeholder="Nom"
                placeholderTextColor={COLORS.black}
                style={styles.searchItemTextInput}
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                keyboardType="default"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.text}>E-mail</Text>
              <TextInput
                placeholder="E-mail"
                placeholderTextColor={COLORS.black}
                style={styles.searchItemTextInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.text}>Numéro de téléphone</Text>
              <TextInput
                placeholder="Numéro de téléphone"
                placeholderTextColor={COLORS.black}
                style={styles.searchItemTextInput}
                value={mobileNumber}
                onChangeText={(text) => setMobileNumber(text)}
                keyboardType="number-pad"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>

            <Text style={styles.subscription}>Abonnement</Text>

            <View style={styles.premiumTextView}>
              <Text style={styles.premiumText}>PREMIUM</Text>
              <TouchableOpacity style={styles.modifierButtonView}>
                <Text style={styles.modifierText}>Modifier</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            bottom: 0,
            padding: 5,
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <View style={styles.iconView}>
            <PrivacyIcon height={'100%'} width={'100%'} />
          </View>
          <Text style={[styles.text, {marginLeft: 15}]}>
            Changer le mot de passe
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Setting;
