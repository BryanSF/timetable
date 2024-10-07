import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000000',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  aulaContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 3,
  },
  diaContainer: {
    marginBottom: 20,
  },
  diaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aulaText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  paginationButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  paginationButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  noClassesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  pageInfo: {
    fontSize: 16,
    color: '#333',
  },
});

export default styles;
