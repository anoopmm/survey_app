import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Alert, View} from 'react-native';
import Survey from '../../components/survey';

interface SurveyProps {}

const SurveyScreen: React.FunctionComponent<SurveyProps> = props => {
  const metaData = [
    {
      type: 'text',
      question: 'What is your name?',
      isMandatory: true,
      qstnKey: 'test1',
    },
    {
      type: 'single',
      question: 'Are you vaccinated?',
      isMandatory: true,
      qstnKey: 'test2',
      options: [
        {
          key: 'Yes',
          value: 'Yes',
        },
        {
          key: 'No',
          value: 'No',
        },
      ],
    },
    {
      type: 'multiple',
      question: 'Please select your preferred locations?',
      isMandatory: true,
      qstnKey: 'test3',
      options: [
        {
          key: 'Trivandrum',
          value: 'Trivandrum',
        },
        {
          key: 'Kochi',
          value: 'Kochi',
        },
        {
          key: 'Bangalore',
          value: 'Bangalore',
        },
      ],
    },
    {
      type: 'text',
      question: 'Please enter your comments',
      isMandatory: false,
      qstnKey: 'test4',
      options: [
        {
          key: 'option 1',
          value: 'option1',
        },
        {
          key: 'option 2',
          value: 'option2',
        },
        {
          key: 'option 3',
          value: 'option3',
        },
      ],
    },
  ];
  const {data, userName} = props.route.params;

  const submit = async (value: any) => {
    console.log('==============>', value);
    if (value != 'error') {
      let surveyResponses = [];
      let response = {
        id: data.id,
        userName: userName,
        response: value,
      };
      try {
        const surveyFromLocal = await AsyncStorage.getItem('surveyResponse');
        if (surveyFromLocal !== null) {
          surveyResponses = JSON.parse(surveyFromLocal);
          surveyResponses.push(response);
          await AsyncStorage.setItem(
            'surveyResponse',
            JSON.stringify(surveyResponses),
          );
        } else {
          surveyResponses.push(response);
          try {
            await AsyncStorage.setItem(
              'surveyResponse',
              JSON.stringify(surveyResponses),
            );
          } catch (e) {
            // saving error
          }
        }
      } catch (e) {
        // error reading value
      }

      Alert.alert('Survey submitted successfully');
      props.navigation.goBack();
    } else {
      Alert.alert('Please fill mandatory fields...')
    }
  };
  return (
    <View style={{flex: 1, padding: 8}}>
      <Survey
        metaData={data.questions}
        onSubmit={submit}
        formId={data.id + '_' + userName}
      />
    </View>
  );
};

export default SurveyScreen;
