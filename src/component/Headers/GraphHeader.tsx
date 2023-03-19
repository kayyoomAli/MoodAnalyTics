import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';
import {strings} from '../../utils/localString';
import moods from '../../utils/moodsData';
const width = Dimensions.get('screen').width;
export default function GraphHeader({currentMood}: any) {
  return (
    <View style={styles.row}>
      <Text style={[styles.mood, {alignSelf: 'center'}]}>
        {moods?.map(item => {
          if (item?.emoji_point === currentMood) {
            return item?.emoji;
          }
        })}
      </Text>
      <Text style={styles.label}>{strings.moodAnalytics}</Text>
      <Text style={styles.labelLight}>{strings.trends}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    marginBottom: vh(10),
  },
  img: {
    height: vh(50),
    width: vh(50),
    marginRight: vw(12),
  },
  label: {
    fontSize: normalize(22),
    fontWeight: '600',
    color: '#fff',
    marginRight: vw(16),
  },
  labelLight: {
    fontSize: vw(16),
    color: '#fff',
    marginRight: vw(16),
  },
  mood: {
    fontSize: normalize(30),
    marginRight: vw(10),
  },
});
