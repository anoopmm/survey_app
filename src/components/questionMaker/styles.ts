import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingBottom:12,
    zIndex:1,
    backgroundColor:'#2A66FF',
    borderRadius:8,
    marginVertical:8
  },
  textInput: {
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#4f4f40',
    backgroundColor:'#fff'
    // marginTop: 8,
    // flex: 1,
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
  button:{
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 8,
    flex:1,
    marginHorizontal:4,
  },
  submitButtonText:{
    color: '#2A66FF',
    fontWeight:'600',
    fontSize:16,
  }
});
export default styles;
