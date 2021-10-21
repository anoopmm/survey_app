import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

interface textInputProps {
  value: string;
  index:Number;
  onChange: Function;
  item: {
    question: String;
    qstnKey: String;
    isMandatory: Boolean;
  };
  submitStatus: boolean;
}

const TextInputBox: React.FunctionComponent<textInputProps> = ({
  item,
  index,
  onChange,
  value,
  submitStatus,
}) => {
    console.log('item.isMandatory',item.isMandatory);
    
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.label}>{index+1}. {item.question}</Text>
      <TextInput
      placeholder={'Your answer ...'}
        style={styles.textInput}
        onChangeText={value => onChange(item.qstnKey, value)}
        value={value}
      />
      {submitStatus && !value && item.isMandatory ? (
        <Text style={styles.error}>Please fill mandatory field</Text>
      ) : null}
    </View>
  );
};

export default TextInputBox;
