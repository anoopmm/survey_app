import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RenderQuestionMaker from '../../components/questionMaker'
interface NewSurveyProps {}
const renderOptionsView = () => {
  const [option, setOptionText] = useState('');
  const [options, setOptions] = useState([]);
  const addOption = () => {
    let optionsTemp = [...options];
    optionsTemp.push({
      label: option,
      key: options.length + '_' + option,
    });
    setOptions(optionsTemp);
  };
  return (
    <View>
      <Text>Options</Text>
      <FlatList
        data={options}
        renderItem={({item}) => <Text>{item.label}</Text>}
      />
      <View style={styles.optionInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setOptionText(text)}
        />
        <Button onPress={() => addOption()} title="Add option" />
      </View>
    </View>
  );
};


const NewSurvey: React.FunctionComponent<NewSurveyProps> = props => {
  const generateId = () => {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  };

  const [questions, setQuestions] = useState([]);
  const saveQuestion = item => {
    const tempQstions = [...questions];
    tempQstions.push({...item, qstnKey: generateId()});
    setQuestions([...tempQstions]);
    console.log(tempQstions);
    
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={({item}) => <Text>{item.question}</Text>}
      />
      <RenderQuestionMaker
        addQuestion={item => {
          saveQuestion(item);
        }}
      />
      <Button
        onPress={() => {
          addQuestion();
        }}
        title="Add"
      />
    </View>
  );
};

export default NewSurvey;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  textInput: {
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#4f4f40',
    marginTop: 8,
    flex: 1,
  },
  optionInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
