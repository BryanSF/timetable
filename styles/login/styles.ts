import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: width * 0.05,
    backgroundColor: '#000000',
  },
  logo: {
    width: width * 0.4,
    height: height * 0.1,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: width * 0.07,
    marginVertical: height * 0.04,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: height * 0.06,
    borderColor: '#555',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    borderWidth: 1,
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.03,
    borderRadius: 10,
    fontSize: width * 0.04,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.2,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  link: {
    color: '#00f',
    textAlign: 'center',
    marginTop: height * 0.02,
    textDecorationLine: 'underline',
    fontSize: width * 0.04,
  },
});

export default styles;
