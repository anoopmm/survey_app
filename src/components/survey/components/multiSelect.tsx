import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, FlatList, Alert} from 'react-native';
import CheckBox from './checkBox';
import styles from './styles';
const CustomCheckBox = ({checkBoxOptionItem, onValueChanged}) => {
  return (
    <View style={styles.checkBoxContainer}>
      <CheckBox
        status={checkBoxOptionItem.status}
        onValueChanged={onValueChanged}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{checkBoxOptionItem.label}</Text>
    </View>
  );
};
interface MultiSelectBoxProps {
  value: string;
  index:Number;
  onChange: Function;
  item: {
    question: String;
    qstnKey: String;
    isMandatory: Boolean;
    options: Array;
  };
  submitStatus: boolean;
}

const MultiSelectBox: React.FunctionComponent<MultiSelectBoxProps> = ({
  item,
  onChange,
  value,
  index,
  submitStatus,
}) => {
  const [listValues, setListValue] = useState(item.options);
  useEffect(() => {
    const newOptions = item.options.map(option => {
      if (value) {
        for (let i = 0; i < value.length; i++) {
          if (option.key === value[i].key) {
            option.status = true;
            return option;
          } else {
            option.status = false;
          }
        }
        return option;
      } else {
        return option;
      }
    });
    setListValue(newOptions);
  }, [value, item]);
  const onValueChanged = (currentItem, status) => {
    const index = listValues.findIndex(
      (li: {key: any}) => li.key === currentItem.key,
    );
    if (index >= 0) {
      let tempList = [...listValues];
      tempList[index].status = status;
      const answers = tempList.filter(i => i.status);
      onChange(item.qstnKey, answers);
      setListValue(tempList);
    }
  };
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.label}>{index+1}. {item.question}</Text>
      <FlatList
        data={listValues}
        renderItem={({item: checkBoxOptionItem}) => (
          <CustomCheckBox
            checkBoxOptionItem={checkBoxOptionItem}
            onValueChanged={(status: any) =>
              onValueChanged(checkBoxOptionItem, status)
            }
          />
        )}
      />
      {submitStatus && !value && item.isMandatory ? (
        <Text style={styles.label}>Please fill mandatory field</Text>
      ) : submitStatus && value && item.isMandatory ? (
        value.length === 0 ? (
          <Text style={styles.error}>Please fill mandatory field</Text>
        ) : null
      ) : null}
    </View>
  );
};

export default MultiSelectBox;
