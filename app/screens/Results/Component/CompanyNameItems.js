import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {appImages} from '../../../config';
export default function CompanyNameItems({
  item,
  selectedType,
  onSelectScoreType = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.companyImageMainView}
      onPress={() => onSelectScoreType(item?.id)}>
      <View
        style={[
          styles.imageMainView,
          {borderColor: selectedType === item?.id ? 'red' : 'transparent'},
        ]}>
        <View style={styles.imageChildView}>
          <Image source={item?.image} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
// CompanyNameItems.PropTypes = {
//   //   onChangeFieldText: PropTypes.func,
// };

const styles = StyleSheet.create({
  companyImageMainView: {
    marginTop: 8,
    padding: 4,
  },
  imageMainView: {
    height: 40,
    aspectRatio: 1.4,
    backgroundColor: '#373737',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
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
