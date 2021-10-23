import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import FormWrapper from './components/formWrapper';
import styles from './components/styles';

interface SurveyProps {
  metaData: Array;
  onSubmit: Function;
  formId: string;
}

const Survey: React.FunctionComponent<SurveyProps> = ({
  metaData,
  onSubmit,
  formId,
}) => {
  const [formValue, setFormValue] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const setValues = (key: string, value: any) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };
  const submit = () => {
    let error = false;
    setSubmitStatus(true);
    metaData.forEach(element => {
      if (element.isMandatory) {
        if (!formValue[element.qstnKey]) {
          error = true;
          return;
        }
      }
    });
    if (error) {
      onSubmit('error');
    } else {
      onSubmit(formValue);
    }
  };
  const save = async () => {
    try {
      await AsyncStorage.setItem(formId, JSON.stringify(formValue));
    } catch (e) {
      // saving error
    }
  };
  const getFormData = async () => {
    if (formId) {
      try {
        const value = await AsyncStorage.getItem(formId);
        if (value !== null) {
          setFormValue(JSON.parse(value));
        }
      } catch (e) {
        // error reading value
      }
    }
  };
  useEffect(() => {
    getFormData();
  }, []);
  return (
    <View style={styles.container}>
      <FormWrapper
        item={metaData[currentIndex]}
        index={currentIndex}
        formValue={formValue}
        onChange={(key: string, value: any) => setValues(key, value)}
        submitStatus={submitStatus}
      />
      {/* <FlatList
        data={metaData}
        renderItem={({item}) => (
          <FormWrapper
            item={item}
            formValue={formValue}
            onChange={(key: string, value: any) => setValues(key, value)}
            submitStatus={submitStatus}
          />
        )}
      /> */}
      <View style={styles.navigationButtonContainer}>
        <TouchableOpacity
          disabled={currentIndex < 1}
          onPress={() => setCurrentIndex(currentIndex - 1)}>
          <Text style={styles.navButtonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={currentIndex == metaData.length - 1}
          onPress={() => setCurrentIndex(currentIndex + 1)}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submit} onPress={() => submit()}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submit} onPress={() => save()}>
        <Text style={styles.submitButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Survey;
