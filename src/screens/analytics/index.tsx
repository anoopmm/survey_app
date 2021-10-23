import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
interface AnalyticsProps {}

const Analytics: React.FunctionComponent<AnalyticsProps> = props => {
  const [surveydata, setsurveydata] = useState(null);
  const getData = async () => {
    try {
      const surveyFromLocal = await AsyncStorage.getItem('surveyResponse');
      if (surveyFromLocal) {
        setsurveydata(JSON.parse(surveyFromLocal));
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  console.log('surveydata', surveydata);
  return (
    <View style={{padding:8}}>
      <View>
        <Text>Survey Data</Text>
        <BarChart
          data={{
            labels: ['Survey 1', 'Survey 2', 'survey 3'],
            datasets: [
              {
                data: [30, 40, 10],
              },
            ],
          }}
          width={Dimensions.get('window').width-16} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#2A66FF',
            backgroundGradientFrom: '#2A66FF',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default Analytics;
