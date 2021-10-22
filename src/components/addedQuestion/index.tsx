import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface AddedQuestionProps {}

const AddedQuestion: React.FunctionComponent<AddedQuestionProps> = ({
  item,
  index,
  deleteQuestion
}) => {
  const renderOptions = () => {
    const options = item.options.map((option, oIndex) => {
      return (
        <Text
          style={[styles.questionType, {paddingLeft: 32, paddingBottom: 4}]}>
          {oIndex + 1}. {option.label}
        </Text>
      );
    });
    return options;
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        alignItems: 'center',
        paddingVertical:8
      }}>
      <View style={{flex: 1}}>
        <Text style={styles.question}>
          {index + 1}. {item.question}
        </Text>
        <Text style={styles.questionType}>Type: {item.type}</Text>
        {item.type != 'text' ? (
          <Text style={styles.questionType}>Options Added:</Text>
        ) : null}

        {item.type != 'text' ? renderOptions() : null}
      </View>
      <TouchableOpacity onPress={()=>deleteQuestion(index)}>
        <Text style={{color:'red'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddedQuestion;
