import React, {useState} from 'react';
import {
    Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const loginWithUser = (type: string) => {
    if (type) {
        if(userName){
      let user = {
        type,
        userName,
      };
      navigation.navigate('Home', {user});
    }else{
        Alert.alert('Please enter a user name..')
    }
    } else {
      let user = {
        type: null,
        userName: undefined,
      };
      navigation.navigate('Home', {user});
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setUserName}
        placeholder="User ID"
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => loginWithUser('user')}>
        <Text style={styles.buttonLabel}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => loginWithUser('admin')}>
        <Text style={styles.buttonLabel}>Login as Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => loginWithUser(null)}>
        <Text style={styles.buttonLabel}>Login as Anonymous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Analytics')}>
        <Text style={styles.buttonLabel}>Login as Analytic User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textInput: {
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#4f4f40',
    // marginTop: 8,
    // flex: 1,
  },
  formLabel: {
    marginVertical: 8,
    fontSize: 16,
  },
  button: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A66FF',
    borderRadius: 4,
    marginTop: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
