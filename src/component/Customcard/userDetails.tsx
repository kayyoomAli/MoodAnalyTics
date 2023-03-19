import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimensions';
import {localImages} from '../../utils/localImage';
const width = Dimensions.get('screen').width;

interface Props {
  Username?: string;
  userPosition?: string;
  userIcon?: ImageSourcePropType;
}
const UserDetails = (props: Props) => {
  return (
    <View style={styles.userCard}>
      <View style={styles.row}>
        <Image
          source={props?.userIcon || localImages.userImage}
          style={styles.img}
        />
        <View style={styles.column}>
          <Text style={styles.heading}>{props?.Username || 'userName'}</Text>
          <Text style={styles.headingLight}>
            {props?.userPosition || 'user Position'}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default UserDetails;
const styles = StyleSheet.create({
  userCard: {
    height: vh(120),
    width: width - 28,
    padding: vh(14),
  },
  img: {
    height: vw(80),
    width: vw(80),
    borderRadius: vw(50),
    marginRight: vh(14),
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
  column: {
    flexDirection: 'column',
  },
  heading: {
    fontSize: normalize(26),
    color: colors.white,
    fontWeight: '600',
    marginTop: 4,
  },
  headingLight: {
    fontSize: normalize(22),
    color: colors.white,
    marginTop: 4,
  },
});
