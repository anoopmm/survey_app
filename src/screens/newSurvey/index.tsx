import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import AddedQuestion from '../../components/addedQuestion';
import RenderQuestionMaker from '../../components/questionMaker';
interface NewSurveyProps {}

const NewSurvey: React.FunctionComponent<NewSurveyProps> = props => {
  const generateId = () => {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  };

  const [questions, setQuestions] = useState([]);
  const [surveyName, setSurveyName] = useState('');
  const [isFormOpened, setFormStatus] = useState(false);
  const saveQuestion = item => {
    let tempQstions = [...questions];
    tempQstions.push({...item, qstnKey: generateId()});
    setQuestions([...tempQstions]);
    console.log(tempQstions);
    setFormStatus(false);
  };
  const addNewQuestion = () => {
    setFormStatus(true);
  };
  const deleteQuestion = index => {
    let tempQstions = [...questions];
    tempQstions.splice(index, 1);
    setQuestions([...tempQstions]);
  };
  const renderItems = () => {
    const items = questions.map((item, index) => {
      return (
        <AddedQuestion
          item={item}
          index={index}
          deleteQuestion={index => deleteQuestion(index)}
        />
      );
    });
    return items;
  };
  const submitSurvey = async () => {
    if (surveyName) {
      if (questions.length > 0) {
        let surveys = [];
        try {
          const value = await AsyncStorage.getItem('surveys');
          if (value !== null) {
            surveys = JSON.parse(value);
          }
        } catch (e) {
          // error reading value
        }
        let survey = {
          name: surveyName,
          questions: questions,
          id: generateId(),
        };
        console.log('survey', surveys);
        surveys.push(survey);
        try {
          await AsyncStorage.setItem('surveys', JSON.stringify(surveys));
          props.navigation.goBack();
        } catch (e) {
          // saving error
        }
      } else {
        Alert.alert('Add your questions...');
      }
    } else {
      Alert.alert('Enter survey name...');
    }
  };
  const renderAddedQuestions = () => {
    if (questions.length > 0) {
      return (
        <View>
          <Text style={styles.formLabel}>Questions</Text>

          {renderItems()}
        </View>
      );
    }
  };
  const renderContent = () => {
    if (questions.length > 0 || isFormOpened) {
      return (
        <Button
          onPress={() => {
            addNewQuestion();
          }}
          title="Add New"
        />
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            onPress={() => {
              addNewQuestion();
            }}
            title="Add your first question"
          />
        </View>
      );
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.formLabel}>Survey name</Text>
        <TextInput
          placeholder={'Survey name...'}
          value={surveyName}
          style={styles.textInput}
          onChangeText={setSurveyName}
        />
        {renderAddedQuestions()}
        <Modal
          isVisible={isFormOpened}
          animationIn="zoomIn"
          animationOut="zoomOut">
          <RenderQuestionMaker
            cancel={() => setFormStatus(false)}
            addQuestion={item => {
              saveQuestion(item);
            }}
          />
        </Modal>
        {renderContent()}
      </ScrollView>
      <View style={styles.floatingButton}>
        <TouchableOpacity onPress={() => submitSurvey()}>
          <Text style={styles.buttonLabel}>Save Survey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewSurvey;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textInput: {
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#4f4f40',
    // marginTop: 8,
    // flex: 1,
  },
  formLabel: {
    marginVertical: 8,
    fontSize: 16,
  },
  floatingButton: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A66FF',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
