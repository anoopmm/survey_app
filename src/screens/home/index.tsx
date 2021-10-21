import React from 'react'
import { Button, View } from 'react-native'

interface HomeProps {
    
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
    return (
        <View>
            <Button onPress={()=>props.navigation.navigate('Survey',{id:'survey1'})} title="Go To survey 1"/>
            <Button onPress={()=>props.navigation.navigate('Survey',{id:'survey2'})} title="Go To survey 2"/>
            <Button onPress={()=>props.navigation.navigate('Survey',{id:'survey3'})} title="Go To survey 3"/>
            <Button onPress={()=>props.navigation.navigate('Survey',{id:'survey4'})} title="Go To survey 4"/>
            <Button onPress={()=>props.navigation.navigate('NewSurvey',{id:'survey4'})} title="Go To Create"/>
        </View>
    )
}

export default Home;
