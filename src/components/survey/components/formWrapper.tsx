import React from 'react'
import { View } from 'react-native'
import MultiSelectBox from './multiSelect';
import SingleSelectBox from './singleSelect';
import TextInputBox from './textInputBox';
interface item {
    type:string;
    qstnKey:string;
}
interface formWrapperProps {
    item:item;
    onChange:Function;
    formValue:Object;
    submitStatus:Boolean;
    index:Number;
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
