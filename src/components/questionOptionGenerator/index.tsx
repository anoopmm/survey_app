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
import styles from './styles';
const RenderOptionsView = () => {
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
  export default RenderOptionsView;