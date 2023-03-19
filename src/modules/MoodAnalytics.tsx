import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {vh} from '../utils/dimensions';
import {strings} from '../utils/localString';
import {localImages} from '../utils/localImage';
import MoodAnalyticsGraph from '../component/Graphs';
import LineSeparator from '../component/Lineseparator';
import MoodHeader from '../component/Headers/MoodHeader';
import GraphHeader from '../component/Headers/GraphHeader';
import MoodsTypes from '../component/Customcard/MoodsType';
import UserDetails from '../component/Customcard/userDetails';
import TeamMoodComponet from '../component/Customcard/teamMoods';

const MoodAnalytics = () => {
  const [currentMood, setCurrentMood] = useState(1);
  return (
    <SafeAreaView style={styles.mainContainerStyle}>
      <ScrollView>
        <View style={styles.innerContainerStyle}>
          <UserDetails
            Username={strings.userName}
            userPosition={strings.UserPostion}
          />
          <MoodsTypes />
          <LineSeparator />
          <MoodHeader icon={localImages.speed} label={strings.teamMood} />
          <TeamMoodComponet currentMood={currentMood} />
          <GraphHeader currentMood={currentMood} />
          <MoodAnalyticsGraph setCurrentMood={setCurrentMood} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoodAnalytics;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: '#222',
  },
  innerContainerStyle: {
    flex: 1,
    paddingHorizontal: 14,
    marginTop: Platform.OS === 'android' ? vh(20) : 0,
  },
});
