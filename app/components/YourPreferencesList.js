import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default function YourPreferencesList({item, handleYourPreferencesBtn}) {
  return (
    <TouchableOpacity
      onPress={handleYourPreferencesBtn}
      style={styles.companyImageMainView}>
      <View style={styles.imageMainView}>
        <View style={styles.imageChildView}>
          <Image source={item?.image} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  companyImageMainView: {
    padding: 4,
  },
  imageMainView: {
    height: 50,
    aspectRatio: 1.5,
    backgroundColor: '#373737',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageChildView: {
    height: 30,
    aspectRatio: 1.7,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
