/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {colors} from '../../utils/colors';

export default function LineSeparator() {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: 1,
        marginVertical: 6,
        width: '95%',
        alignSelf: 'center',
      }}
    />
  );
}
