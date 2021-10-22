import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RenderOptionsView from '../questionOptionGenerator';
import styles from './styles';
const RenderQuestionMaker = ({addQuestion, cancel}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState('');
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Text input', value: 'text'},
    {label: 'Multi Select', value: 'multiple'},
    {label: 'Single Select', value: 'single'},
  ]);
  const save = () => {
    if (value) {
      if (question) {
        if (value == 'text') {
          const qstn = {
            type: value,
            question: question,
            isMandatory: true,
            qstnKey: null,
          };
          addQuestion(qstn);
        } else {
          if (options.length > 0) {
            const qstn = {
              type: value,
              question: question,
              isMandatory: true,
              qstnKey: null,
              options: options,
            };
            addQuestion(qstn);
          } else {
            Alert.alert('Add atleast one option...');
          }
        }
      } else {
        Alert.alert('Question field wont be empty...');
      }
    } else {
      Alert.alert('Please select question type...');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Question type</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.formLabel}>Question</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter question here..."
          onChangeText={text => setQuestion(text)}
        />
      </View>
      {value == 'multiple' || value == 'single' ? (
        <RenderOptionsView
          onChangeOptions={(options: any) => setOptions(options)}
        />
      ) : null}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button} onPress={() => save()}>
          <Text style={styles.submitButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => cancel()}>
          <Text style={[styles.submitButtonText, {color: 'red'}]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RenderQuestionMaker;
