import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {useStore} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountProposal from '../screens/AccountProposal';
import Preferences from '../screens/Preferences';
import WithoutPreferences from '../screens/WithoutPreferences';
import DashBoard from '../screens/DashBoard';
import Menu from '../screens/Menu';
import Setting from '../screens/Setting';
import CreateAccount from '../screens/CreateAccount';
import {isIphoneX} from '../helpers';
import {responsiveScale} from '../constants/mixins';
import Podcasts from '../screens/Podcasts';
import Results from '../screens/Results';
import PostDetail from '../screens/PostDetail';
import CreateAccount2 from '../screens/CreateAccount2';
import CompanyFutureScore from '../screens/CompanyFutureScore';
import PremiumAccount from '../screens/PremiumAccount';
import Player from '../screens/Player';
import HomeTab from '@assets/appimages/HomeTab.svg';
import TIcon from '@assets/appimages/TIcon.svg';
import ResultTab from '@assets/appimages/ResultTab.svg';
import PodcastTab from '@assets/appimages/PodcastTab.svg';
import NewsList from '../screens/News';

const AuthStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const NewsStack = createStackNavigator();
const ResultsStack = createStackNavigator();
const PodcastsStack = createStackNavigator();

const AuthNavigator = (navigation) => {
  const store = useStore();

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="AccountProposal"
        screenOptions={{gestureEnabled: false}}>
        <AuthStack.Screen
          name="AccountProposal"
          component={AccountProposal}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Preferences"
          component={Preferences}
          options={{headerShown: true}}
        />
        <AuthStack.Screen
          name="WithoutPreferences"
          component={WithoutPreferences}
          options={{headerShown: true}}
        />
        <AuthStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: true}}
        />
        <AuthStack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: true}}
        />
        <AuthStack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: true}}
        />
        <AuthStack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="CreateAccount2"
          component={CreateAccount2}
          options={{headerShown: true}}
        />
        <AuthStack.Screen
          name="PremiumAccount"
          component={PremiumAccount}
          options={{headerShown: true}}
        />
        <AuthStack.Screen
          name="Player"
          component={Player}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;

const BottomTabNavigator = ({navigation}) => {
  return (
    <TabStack.Navigator
      initialRouteName={'Menu'}
      backgroundColor="transparent"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#000000',
          height: isIphoneX() ? 110 : 80,
          elevation: 0,
        },
        labelStyle: {
          fontSize: responsiveScale(10),
          bottom: isIphoneX() ? 0 : 5,
          fontFamily: 'GlacialIndifference-Bold',
        },
      }}>
      <TabStack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: true,
          tabBarLabel: 'ACCUEIL',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.selectedImageView}>
                <View style={styles.image}>
                  <HomeTab width={'100%'} height={'100%'} />
                </View>
              </View>
            ) : (
              <View style={styles.nonSelectImageView}>
                <View style={styles.image}>
                  <HomeTab width={'100%'} height={'100%'} />
                </View>
              </View>
            );
          },
        }}
      />

      <TabStack.Screen
        name="NewsNavigator"
        component={NewsNavigator}
        options={{
          headerShown: true,
          tabBarLabel: 'ACTUALIT??',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.selectedImageView}>
                <View style={styles.image}>
                  <TIcon width={'100%'} height={'100%'} />
                </View>
              </View>
            ) : (
              <View style={styles.nonSelectImageView}>
                <View style={styles.image}>
                  <TIcon width={'100%'} height={'100%'} />
                </View>
              </View>
            );
          },
        }}
      />

      <TabStack.Screen
        name="ResultsNavigator"
        component={ResultsNavigator}
        options={{
          headerShown: true,
          tabBarLabel: 'R??SULTATS',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.selectedImageView}>
                <View style={styles.image}>
                  <ResultTab width={'100%'} height={'100%'} />
                </View>
              </View>
            ) : (
              <View style={styles.nonSelectImageView}>
                <View style={styles.image}>
                  <ResultTab width={'100%'} height={'100%'} />
                </View>
              </View>
            );
          },
        }}
      />

      <TabStack.Screen
        name="PodcastsNavigator"
        component={PodcastsNavigator}
        options={{
          headerShown: true,
          tabBarLabel: 'PODCASTS',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.selectedImageView}>
                <View style={styles.image}>
                  <PodcastTab width={'100%'} height={'100%'} />
                </View>
              </View>
            ) : (
              <View style={styles.nonSelectImageView}>
                <View style={styles.image}>
                  <PodcastTab width={'100%'} height={'100%'} />
                </View>
              </View>
            );
          },
        }}
      />
    </TabStack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="DashBoard" component={DashBoard} />
    </HomeStack.Navigator>
  );
};

const NewsNavigator = () => {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="News" component={NewsList} />
    </NewsStack.Navigator>
  );
};

const ResultsNavigator = () => {
  return (
    <ResultsStack.Navigator>
      <ResultsStack.Screen name="Results" component={Results} />
      <ResultsStack.Screen
        name="CompanyFutureScore"
        component={CompanyFutureScore}
      />
    </ResultsStack.Navigator>
  );
};

const PodcastsNavigator = () => {
  return (
    <PodcastsStack.Navigator>
      <PodcastsStack.Screen name="Podcasts" component={Podcasts} />
    </PodcastsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  selectedImageView: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  nonSelectImageView: {
    padding: 10,
    backgroundColor: '#373737',
    borderRadius: 6,
  },
  image: {
    height: 25,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
