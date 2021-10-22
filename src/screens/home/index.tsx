import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = props => {
  const {user} = props.route.params;
  const [surveys, setSurveyList] = useState([]);
  const getSurveys = async () => {
    try {
      const value = await AsyncStorage.getItem('surveys');
      if (value !== null) {
        setSurveyList(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getSurveys();
    });

    return unsubscribe;
  }, []);
  console.log('surveys', surveys);

  return (
    <View style={styles.container}>
      <FlatList
        data={surveys}
        renderItem={({item}) => {
          return (
            <View style={styles.surveyItemContainer}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('Survey', {data: item, userName: user.userName,})
                }>
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {user.type == 'admin' ? (
        <Button
          onPress={() =>
            props.navigation.navigate('NewSurvey', {
              id: 'survey4',
            })
          }
          title="Create a survey"
        />
      ) : null}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  surveyItemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  itemText: {
    color: '#2A66FF',
    fontWeight: '600',
  },
});
