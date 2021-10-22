import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
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

const SingleSelectBox: React.FunctionComponent<textInputProps> = ({
  item,
  onChange,
  value,
  index,
  submitStatus,
}) => {
  const [selectedValue, setSelectedValue] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const renderOptions = () => {
    const list = item.options.map(item => {
      return <Picker.Item label={item.label} value={item.key} />;
    });
    return list;
  };
  useEffect(() => {
      console.log('vale------>',value,value?.[item.qstnKey]);
      
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  const renderPicker = () => {
    return (
      <View style={styles.dropDown}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>
            {selectedValue.key
              ? selectedValue.label
              : 'Please select an option..'}
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          style={{alignItems: 'center'}}
          visible={modalVisible}
          presentationStyle={'overFullScreen'}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={{backgroundColor: '#fff',padding:16}}>
            <Picker
              selectedValue={selectedValue.key}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(item.options[itemIndex])
              }>
              {renderOptions()}
            </Picker>
            <TouchableOpacity
            style={styles.submit}
              onPress={() => {
                onChange(item.qstnKey, selectedValue);
                setModalVisible(false);
              }}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.label}>{index+1}. {item.question}</Text>
      {renderPicker()}
      {submitStatus && !value && item.isMandatory ? (
        <Text style={styles.error}>Please fill mandatory field</Text>
      ) : null}
    </View>
  );
};

export default SingleSelectBox;
