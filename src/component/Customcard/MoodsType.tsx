import React from 'react';
import moods from '../../utils/moodsData';
import {colors} from '../../utils/colors';
const width = Dimensions.get('screen').width;
import {strings} from '../../utils/localString';
import {normalize, vh, vw} from '../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
const _renderItem = ({item}: any) => {
  return <Text style={styles.moodImogiStyle}>{item?.emoji}</Text>;
};

const MoodsTypes = () => {
  return (
    <View style={styles.parent}>
      <LinearGradient
        style={styles.linearGradientStyel}
        colors={[colors.linearGradientGrey, colors.linearGradientBottomGrey]}>
        <Text style={styles.textHeadingStyle}>
          {strings.HowisMoods}
          <Text style={[styles.textHeadingStyle, {color: colors.lightYellow}]}>
            {'Mood'}
          </Text>
        </Text>
        <Text style={styles.textHeadingStyle}>{'Today'}</Text>
        <FlatList
          horizontal
          data={moods}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item?.emoji_point?.toString()}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </LinearGradient>
    </View>
  );
};

export default MoodsTypes;
const styles = StyleSheet.create({
  linearGradientStyel: {
    flex: 1,
    paddingLeft: vw(15),
    paddingRight: vw(15),
    borderRadius: 5,
    paddingVertical: vh(14),
  },
  parent: {
    width: width - 40,
    height: vh(180),
    alignSelf: 'center',
    borderColor: colors.lightYellow,
    borderWidth: 3,
    borderRadius: vh(10),
    marginBottom: vh(14),
  },
  textHeadingStyle: {
    fontSize: normalize(26),
    color: colors.white,
    fontWeight: '600',
    marginTop: 4,
  },
  moodImogiStyle: {
    fontSize: normalize(40),
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    marginTop: vh(10),
    width: width - 76,
  },
});
