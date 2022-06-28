import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import CalenderView from '../../../components/CalenderView';
import ScoreBoardNotificationListItem from '../../../components/ScoreBoardNotificationListItem';
import ScoreBoardPastNotificationListItem from '../../../components/ScoreBoardPastNotificationListItem';
import {COLORS} from '../../../config/color';
// import PropTypes from 'prop-types';
import CalendarStrip from '../../../CustomThirdPartyComponent/react-native-calendar-strip/src/CalendarStrip';
import getLanguage from '../../../hooks/calenderDetails';
export default function ScoresLists({
  item,
  selectedDate,
  datesWhitelist,
  data,
  pastData,
  onDateSelected,
  getPreviousWeek,
}) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CalenderView
          getPreviousWeek={getPreviousWeek}
          selectedDate={selectedDate}
          datesWhitelist={datesWhitelist}
          onDateSelected={onDateSelected}
        />
        {!selectedDate ? (
          <>
            <View style={styles.mainFlatlistView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item, index}) => (
                  <ScoreBoardNotificationListItem item={item} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.mainFlatlistView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item, index}) => (
                  <ScoreBoardNotificationListItem item={item} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </>
        ) : (
          <>
            <View style={styles.mainFlatlistView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={pastData}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                  <ScoreBoardPastNotificationListItem item={item} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.mainFlatlistView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={pastData}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                  <ScoreBoardPastNotificationListItem item={item} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
}
// ScoresLists.PropTypes = {
// //   onChangeFieldText: PropTypes.func,
// };

const styles = StyleSheet.create({
  mainFlatlistView: {
    padding: 15,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
