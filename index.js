/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {BaseSetting} from './app/config';
import App from './app/index';
import RNTrackPlayer from 'react-native-track-player';

console.disableYellowBox = true;

RNTrackPlayer.registerPlaybackService(() => require('./service.js'));

AppRegistry.registerComponent(BaseSetting.name, () => App);
