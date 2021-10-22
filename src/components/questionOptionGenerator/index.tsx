import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
const RenderOptionsView = ({onChangeOptions}) => {
  const [option, setOptionText] = useState('');
  const [options, setOptions] = useState([]);
  const addOption = () => {
    let optionsTemp = [...options];
    optionsTemp.push({
      label: option,
      key: options.length + '_' + option,
    });
    setOptions(optionsTemp);
    onChangeOptions(optionsTemp);
  };
  const renderOptionsList = () => {
    const optionsList = options.map((item, index) => {
      return (
        <Text style={styles.option}>
          {index + 1}. {item.label}
        </Text>
      );
    });
    return optionsList;
  };
  return (
    <View>
      <Text style={styles.formLabel}>Options</Text>
      {renderOptionsList()}
      <View style={styles.optionInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setOptionText(text)}
        />
        <TouchableOpacity onPress={() => addOption()} style={styles.button}>
          <Text style={styles.submitButtonText}>Add Option</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RenderOptionsView;
