import React from 'react'
import { View,Text } from 'react-native'
import MultiSelectBox from './multiSelect';
import SingleSelectBox from './singleSelect';
import styles from './styles';
import TextInputBox from './textInputBox';

interface formWrapperProps {
    
}

const FormWrapper: React.FunctionComponent<formWrapperProps> = ({item,onChange,formValue,submitStatus,index}) => {
    const {type,qstnKey}=item;
    const renderFormItem=()=>{
     switch (type) {
         case 'text':
             return <TextInputBox item={item} onChange={(key: any,value: any)=>onChange(key,value)} value={formValue[qstnKey]} submitStatus={submitStatus} index={index}/>
             break;
         case 'multiple':
             return <MultiSelectBox item={item} onChange={(key: any,value: any)=>onChange(key,value)} value={formValue[qstnKey]} submitStatus={submitStatus} index={index}/>
             break;
         case 'single':
             return <SingleSelectBox item={item} onChange={(key: any,value: any)=>onChange(key,value)} value={formValue[qstnKey]} submitStatus={submitStatus} index={index} />
             break;
     
         default:
             break;
     }   
    }
    return (
        <View >
            {renderFormItem()}
        </View>
    )
}

export default FormWrapper
