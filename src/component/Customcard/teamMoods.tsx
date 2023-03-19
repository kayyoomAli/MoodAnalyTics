import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import moods from '../../utils/moodsData';
import {vw, vh, normalize} from '../../utils/dimensions';
import {colors} from '../../utils/colors';
import {localImages} from '../../utils/localImage';
const width = Dimensions.get('screen').width;

const TeamMoodComponet = ({currentMood}: any) => {
  console.log('currentMood', currentMood);
  return (
    <View style={styles.parent}>
      <LinearGradient
        colors={[colors.linearGradientGrey, colors.linearGradientBottomGrey]}
        style={styles.linearGradient}>
        <View style={styles.row}>
          <Image
            source={localImages.qoutes}
            resizeMode="contain"
            style={[styles.icon, {transform: [{rotate: '180deg'}]}]}
          />
          <Text style={[styles.headingLight]}>
            {moods.map(item => {
              if (item?.emoji_point === currentMood) {
                return item?.text;
              }
            })}
          </Text>
          <Image
            source={localImages.qoutes}
            resizeMode="contain"
            style={[styles.icon, {marginTop: vh(50)}]}
          />
          <Text style={[styles.mood]}>
            {moods?.map(item => {
              if (item?.emoji_point === currentMood) {
                return item?.emoji;
              }
            })}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};
export default TeamMoodComponet;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: vw(15),
    paddingRight: vw(15),
    borderRadius: 5,
    paddingVertical: vh(14),
  },
  parent: {
    width: width - 40,
    height: vh(110),
    alignSelf: 'center',
    borderColor: colors.lightYellow,
    borderWidth: 3,
    borderRadius: vh(10),
    marginBottom: vh(14),
  },
  headingLight: {
    fontSize: normalize(22),
    color: colors.white,
    marginTop: 4,
    width: vw(200),
  },
  mood: {
    fontSize: normalize(40),
    alignSelf: 'center',
  },
  icon: {
    height: vw(15),
    width: vw(15),
    marginRight: vh(14),
    borderRadius: normalize(50),
  },
  row: {
    flexDirection: 'row',
  },
});
