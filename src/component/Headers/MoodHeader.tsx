import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';
import LineSeparator from '../Lineseparator';
const MoodHeader = (props: any) => {
  const {icon, label} = props;
  return (
    <View style={[styles.row]}>
      <Image source={icon} resizeMode="contain" style={styles.img} />
      <Text style={styles.label}>{label}</Text>
      <LineSeparator />
    </View>
  );
};
export default MoodHeader;
const styles = StyleSheet.create({
  row: {
    width: '97%',
    overflow: 'hidden',
    marginBottom: vh(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: vh(50),
    width: vh(50),
    marginRight: vw(12),
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    marginRight: vw(16),
    fontSize: normalize(22),
  },
});
