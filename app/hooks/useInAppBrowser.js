import {useCallback} from 'react';
import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const useInAppBrowser = () => {
  const openURL = useCallback(async (url, errorName) => {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.close();
        await InAppBrowser.open(url, {
          // iOS Properties
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'overFullScreen',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
        });
      } else {
        await Linking.openURL(url);
      }
    } catch (err) {
      console.log(`[SettingsScreen] ${errorName} failed to open link`, err);
    }
  }, []);

  return openURL;
};

export default useInAppBrowser;
