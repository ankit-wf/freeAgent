import React, {useEffect} from 'react';
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
import RightArrowIconWhite from '@assets/appimages/RightArrowIconWhite.svg';
import BlackCloseIcon from '@assets/appimages/BlackCloseIcon.svg';

const PremiumAccount = ({navigation}) => {
  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.white,
        shadowColor: 'transparent',
      },
      headerLeft: () => <Text />,
      headerTitle: (props) => <Text />,
      headerRight: (props) => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{height: 10, width: 15, marginRight: 15}}>
          <BlackCloseIcon width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    setNavigationBar();
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.childView}>
          <Text style={styles.titleText}>THE FREE AGENT</Text>
          <Text style={styles.nbaText}>NBA - NFL - MLB - NHL</Text>
          <Text style={styles.description}>
            Abonnez-vous pour consulter du contenu exclusif
          </Text>

          <View style={styles.recommandeMainView}>
            <View style={styles.recommandeChildView}>
              <Text style={styles.recommandeText}>RECOMMANDÉ</Text>
            </View>
          </View>
          <View style={styles.annualBoxMainView}>
            <TouchableOpacity style={styles.annualBoxView} activeOpacity={0.8}>
              <Text style={styles.annualText}>ANNUEL</Text>
              <Text style={styles.essaiText}>Essai gratuit de 7 jours</Text>
              <Text style={styles.annualAmountText}>29,99 € / an</Text>
              <Text style={styles.factureText}>
                Facturé annuellement après l’essai.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.monthlyView} activeOpacity={0.8}>
              <Text style={styles.monthltText}>MENSUEL</Text>
              <Text style={styles.monthlyAmountText}>2,99 € / mois</Text>
              <Text style={styles.monthlyFeatureText}>
                Facturé mensuellement.
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.createFreeAccountView}>
            <Text style={styles.createFreeAccountText}>S’ABONNER</Text>
            <View style={styles.rightButtonView}>
              <RightArrowIconWhite width={'100%'} height={'100%'} />
            </View>
          </TouchableOpacity>

          <Text style={styles.bottomDescription}>
            Vous serez facturé 29,99 € (forfait annuel) ou 2,99 € (forfait
            mensuel) par le biais de votre compte iTunes. Votre abonnement se
            renouvellera automatiquement à moins que vous l’annuliez dans vos
            paramètres de compte plus de 24 heures avant la fin de la période de
            facturation.{'\n\n'}En devnant membre, vous acceptez notre
            <Text style={styles.boldText}> politique de</Text> confidentialité
            et nos{' '}
            <Text style={styles.boldText}>conditions générales de vente.</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PremiumAccount;
