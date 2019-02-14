/* eslint-disable linebreak-style */
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

import Navigator from './config/routes';

EStyleSheet.build({
  $width: Dimensions.get('window').width,
  $height: Dimensions.get('window').height,
  $green: '#004d1a',
});
export default () => <Navigator />;
