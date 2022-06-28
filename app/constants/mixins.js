import {Dimensions, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const IMAGE_ASPECT_RATIO = 16 / 9;
const GUIDELINE_BASE_WIDTH = 375;

export const scaleSize = (size) => (WINDOW_WIDTH / GUIDELINE_BASE_WIDTH) * size;

export const responsiveScale = (fontSize) => RFValue(fontSize);

export const scaleFont = (size) => size * PixelRatio.getFontScale();
