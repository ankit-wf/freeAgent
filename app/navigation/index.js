import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import useConnectionInfo from '../hooks/useConnectionInfo';
import useAuthorizedSession from '../hooks/useAuthorizedSession';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const Navigation = () => {
  const [authToken, isInitializing] = useAuthorizedSession();

  useConnectionInfo();

  // if (isInitializing) {
  //   return (
  //     <View style={styles.loaderWrap}>
  //       <ActivityIndicator size="large"  />
  //     </View>
  //   );
  // }

  return authToken ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;

const styles = StyleSheet.create({
  loaderWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
