import getApi from '../../utils/apiCall';
import {colors} from '../../utils/colors';
const width = Dimensions.get('screen').width;
import {vh, vw} from '../../utils/dimensions';
import {LineChart} from 'react-native-chart-kit';
import React, {useEffect, useState} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';

const MoodAnalyticsGraph = ({setCurrentMood}: any) => {
  const [data, setData] = useState<any>([]);
  const [dataSet, setDataSet] = useState<any>([4, 1, 5, 3, 4, 4, 3, 5]);
  useEffect(() => {
    getApi(
      (res: any) => {
        console.log('res', res);
        setData(res);
        setDataSet(res?.map((ele: any) => ele?.emoji_point));
        let sum = res?.reduce((a: any, b: any) => a + b?.emoji_point, 0);
        setCurrentMood(Math?.floor(sum / res.length));
      },
      (err: any) => {
        let sum = dataSet?.reduce((a: any, b: any) => a + b, 0);
        setCurrentMood(Math?.floor(sum / dataSet?.length));
        console.log(err);
      },
    );
  }, []);

  const chartConfig = {
    backgroundColor: colors.primaryColor,
    backgroundGradientFrom: colors.primaryColor,
    backgroundGradientTo: colors.primaryColor,
    fillShadowGradientFrom: colors.primaryColor,
    fillShadowGradientTo: colors.primaryColor,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      height: vh(200),
      right: vw(100),
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      color: colors.propsBgColor,
    },
    propsForVerticalLabels: {
      translateY: 40,
    },
    propsForDots: {
      r: '4',
    },
  };
  return (
    <View style={{marginBottom: 50}}>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: dataSet,
            },
          ],
        }}
        height={180}
        yAxisInterval={1}
        width={width - 20}
        verticalLabelRotation={-60}
        segments={Math.max(...dataSet) - Math.min(...dataSet)}
        getDotColor={(_dataPoint, _dataPointIndex) => colors.green}
        renderDotContent={({x, y, index, indexData}) => {
          return (
            <Text
              key={index}
              style={{
                top: y - 20,
                left: x + 2,
                color: colors.green,
                position: 'absolute',
              }}>
              {indexData}
            </Text>
          );
        }}
        chartConfig={chartConfig}
        style={styles.lineChartStyle}
      />

      <View style={styles.dateCreatedStyle}>
        {data.map((ele: any, index: number) => {
          return (
            <Text key={index} style={styles.dateTextStyle}>
              {ele?.created_at}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
export default MoodAnalyticsGraph;
const styles = StyleSheet.create({
  dateCreatedStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 120,
  },
  dateTextStyle: {
    left: 6,
    marginRight: vw(-45),
    color: colors.white,
    transform: [{rotate: '-60deg'}],
  },
  lineChartStyle: {
    right: vw(25),
    marginVertical: vh(8),
  },
});
