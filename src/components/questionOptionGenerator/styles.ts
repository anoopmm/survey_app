import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  textInput: {
    padding: 12,
    borderRightWidth: 0.5,
    // borderRadius: 4,
    borderColor: 'grey',
    // marginTop: 8,
    backgroundColor:'#fff',
    flex: 1,
    borderTopLeftRadius:4,
    borderBottomLeftRadius:4,
  },
  optionInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formLabel: {
    marginVertical: 8,
    color:'#fff',
    fontSize:16,
  },
  option: {
    marginBottom: 8,
    color:'#fff',
    fontSize:12,
    paddingLeft:8,
  },
  button:{
    backgroundColor: '#fff',
    // borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal:8,
    borderTopRightRadius:4,
    borderBottomRightRadius:4,
    // marginTop: 8,
  },
  submitButtonText:{
    color: '#2A66FF',
    fontWeight:'600',
    fontSize:14,
  }
});
export default styles;
