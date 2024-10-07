import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); 

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  selectedDateText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});
