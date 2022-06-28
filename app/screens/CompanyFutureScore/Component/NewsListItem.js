import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import NewsLists from './NewsLists';
// import PropTypes from 'prop-types';

export default function NewsListItem({item,data}) {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 10}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        data={data}
        renderItem={({item, index}) => <NewsLists item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
// NewsListItem.PropTypes = {
// //   onChangeFieldText: PropTypes.func,
// };

const styles = StyleSheet.create({});
