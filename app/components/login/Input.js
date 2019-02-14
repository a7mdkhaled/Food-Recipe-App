/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';

import {
  View, TextInput, StatusBar, Text,
} from 'react-native';
import styles from './styles';

class Input extends Component {
  handleChange = (value) => {
    this.props.onChange(this.props.name, value);
  };

  handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { label, error, ...rest } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="black" barStyle="light-content" />
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          {...rest}
          placeholder={label}
          onChangeText={this.handleChange}
          onBlur={this.handleTouch}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
}

export default Input;
