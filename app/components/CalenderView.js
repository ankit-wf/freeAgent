import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CalendarStrip from '../CustomThirdPartyComponent/react-native-calendar-strip/src/CalendarStrip';
import getLanguage from '../hooks/calenderDetails';
// import PropTypes from 'prop-types';
import 'moment';
import 'moment/locale/fr';  // language must match config
import moment from 'moment-timezone';  // only if timezone is needed

export default function CalenderView({
  selectedDate,
  datesWhitelist,
  onDateSelected,
  getPreviousWeek,
}) {
  return (
    <CalendarStrip
      style={{
        height: 50,
        width: '100%',
      }}
      locale={getLanguage}
      daySelectionAnimation={{
        type: 'background',
        duration: 300,
        borderWidth: 1,
        borderHighlightColor: '#206c9f',
      }}
      selectedDate={selectedDate}
      calendarAnimation={{type: 'sequence', duration: 30}}
      calendarHeaderStyle={{
        color: 'red',
      }}
      calendarColor={'white'}
      dateNumberStyle={{color: '#BFBFBF'}}
      dateNameStyle={{color: '#BFBFBF'}}
      highlightDateNumberStyle={{
        color: '#1E1E1E',
      }}
      highlightDateNameStyle={{color: '#1E1E1E'}}
      disabledDateNameStyle={{color: '#BFBFBF'}}
      disabledDateNumberStyle={{color: '#BFBFBF'}}
      iconContainer={false}
      numDaysInWeek={7}
      scrollable={true}
      scrollerPaging={false}
      // datesWhitelist={datesWhitelist}
      onDateSelected={onDateSelected}
      getPreviousWeek={getPreviousWeek}
      // datesBlacklist={datesBlacklist}
    />
  );
}
// CalenderView.PropTypes = {
// //   onChangeFieldText: PropTypes.func,
// };

const styles = StyleSheet.create({});
