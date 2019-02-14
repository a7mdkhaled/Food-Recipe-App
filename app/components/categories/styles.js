import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    textAlign: 'left',
    alignItems: 'center',
    alignContent: 'flex-end',
    backgroundColor: '#fff',
  },
  list: {
    flexDirection: 'row',
  },
  image: {
    marginHorizontal: 10,
    width: Dimensions.get('window').width - 20,
    height: 150,
    borderRadius: 50,
    marginBottom: 5,
    marginTop: 5,
    resizeMode: 'contain',
    fontStyle: 'italic',
    fontFamily: 'American Typewriter',
  },
  text: {
    textAlign: 'left',
    alignContent: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
    fontFamily: 'serif',
  },
});

export default styles;
