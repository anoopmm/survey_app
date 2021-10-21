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
import RenderOptionsView from '../questionOptionGenerator';
import styles from './styles';
const RenderQuestionMaker = ({addQuestion}) => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'text', value: 'Text Input'},
    {label: 'Multiselect', value: 'Multi Select'},
    {label: 'SingleSelect', value: 'Songle Select'},
  ]);
  const save = () => {
    const qstn = {
      type: value,
      question: question,
      isMandatory: true,
      qstnKey: null,
    };
    addQuestion(qstn);
  };
  return (
    <View style={{zIndex: 1}}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setQuestion(text)}
        />
      </View>
      <RenderOptionsView />
      <Button onPress={() => save()} title="save" />
    </View>
  );
};
export default RenderQuestionMaker;
