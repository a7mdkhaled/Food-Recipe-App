/* eslint-disable linebreak-style */
import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  coverImage: {
    marginTop: 10,
    marginVertical: 9,
    minWidth: '$width-15',
    minHeight: '$height/4',
    maxWidth: '$width-15',
    maxHeight: '$height/4',
    borderRadius: 30,
    resizeMode: 'cover',
  },
  profile: {
    width: 90,
    height: 90,
    position: 'absolute',
    bottom: -30,
    borderRadius: 45,
    borderWidth: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'relative',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'serif',
  },
});

export default styles;
