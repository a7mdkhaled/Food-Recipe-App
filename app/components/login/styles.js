/* eslint-disable linebreak-style */
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 45,
    height: 40,
    backgroundColor: '#53714b',
    borderRadius: 15,
    borderColor: 'green',
    borderWidth: 1,
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 2,
    color: '#fff',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});
