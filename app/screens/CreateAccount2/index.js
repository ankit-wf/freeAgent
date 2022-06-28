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
import RightArrowIconWhite from '@assets/appimages/RightArrowIconWhite.svg';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';

const CreateAccount2 = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [selectedBox, setSelectedBox] = useState(true);

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
            <Text style={styles.titleText}>Créez un compte</Text>
            <Text style={styles.description}>
              En créant un compte, vous pourrez choisir vos préférences de
              ligues ainsi que d’équipes afin de bénéficier contenu
              personnalisé.
            </Text>

            <View style={{marginTop: 15}}>
              <Text style={styles.text}>Prénom</Text>
              <TextInput
                placeholder="Votre prénom"
                placeholderTextColor={'#CECECE'}
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
                placeholder="Votre nom"
                placeholderTextColor={'#CECECE'}
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
              <Text style={styles.text}>Numéro de téléphone</Text>
              <TextInput
                placeholder="Votre numéro"
                placeholderTextColor={'#CECECE'}
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

            <View style={{marginTop: 15}}>
              <Text style={styles.text}>E-mail</Text>
              <TextInput
                placeholder="Votre e-mail"
                placeholderTextColor={'#CECECE'}
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
              <Text style={styles.text}>Mot de passel</Text>
              <TextInput
                placeholder="Votre mot de passe"
                placeholderTextColor={'#CECECE'}
                style={styles.searchItemTextInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                keyboardType="email-address"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>

            <View style={styles.checkBoxAndTextView}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setSelectedBox(!selectedBox)}
                style={styles.checkBoxView}>
                {selectedBox ? (
                  <View style={styles.emptyBoxView} />
                ) : (
                  <>
                    <View style={styles.emptyBoxView} />
                    <View style={styles.selectedBoxView} />
                  </>
                )}
              </TouchableOpacity>
              <Text style={styles.textView}>
                Je souhaite recevoir les actualités de lorem ipsum dolors lorem
                ipsum sans lordel so doleres.
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.createFreeAccountView}>
              <Text style={styles.createFreeAccountText}>TERMINER</Text>
              <View style={styles.rightButtonView}>
                <RightArrowIconWhite width={'100%'} height={'100%'} />
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.descriptionView}>
          <Text style={styles.bottomDesctiptionText}>
            En m’abonnant, j’accepte les Modalités de service et Politique de
            confidentialité d’US Sports Media
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateAccount2;
