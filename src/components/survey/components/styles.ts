import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#2A66FF',
    borderRadius: 4,
  },
  textInput: {
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#4f4f40',
    marginTop:8,
  },
  dropDown: {
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#4f4f40',
    marginTop:8,
  },
  questionContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
  },
  label: {
    paddingVertical: 8,
    fontSize: 16,
    color: '#4f4f4f',
  },
  error: {
    paddingVertical: 8,
    fontSize: 11,
    color: '#ed2939',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkButtonContainer: {
    paddingHorizontal: 4,
  },
  navigationButtonContainer: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 8,
    justifyContent: 'space-between',
  },
  navButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  submit: {
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 8,
  },
  submitButtonText: {
    color: '#2A66FF',
    fontWeight:'600',
    fontSize:16,
  },

});
export default styles;
