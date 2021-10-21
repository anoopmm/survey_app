import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from './styles'

interface checkBoxProps {
    
}

const CheckBox: React.FunctionComponent<checkBoxProps> = ({status,onValueChanged}) => {
    return (
        <View style={styles.checkButtonContainer}>
            <TouchableOpacity onPress={()=>onValueChanged(!status)}>
                <View style={{borderWidth:3,width:20,height:20,borderRadius:10,borderColor:'green',backgroundColor:status?'green':'white'}}>

                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default CheckBox
