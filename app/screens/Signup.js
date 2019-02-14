/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Input } from '../components/login';

const api = user => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (user.email === 'ahmed@gmail.com') {
      reject({ email: 'Email already used Sorry!' });
    } else {
      resolve();
    }
  }, 2000);
});

class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleSubmit = async (values, bag) => {
    try {
      await api(values);
      this.props.navigation.navigate('Home');
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../photos/login.jpg')}>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={this.handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required(),
              password: Yup.string()
                .min(6)
                .required(),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password', null)], 'PASSWORD NOT MATCHED!')
                .required(),
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting,
            }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 80,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    width: '90%',
                    height: 50,
                    textAlign: 'center',
                    marginBottom: 40,
                    borderRadius: 40,
                  }}
                >
                  {'Oh..Ready To Insert Some Data?'}
                </Text>
                <Input
                  label="Email"
                  autoCaptalize
                  value={values.email}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="email"
                  error={touched.email && errors.email}
                />
                <Input
                  label="Password"
                  autoCaptalize
                  value={values.password}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="password"
                  error={touched.password && errors.password}
                />
                <Input
                  label="Confirm Password"
                  autoCaptalize
                  value={values.confirmPassword}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="confirmPassword"
                  error={touched.confirmPassword && errors.confirmPassword}
                />
                <View>
                  <TouchableOpacity
                    disabled={!isValid || isSubmitting}
                    onPress={handleSubmit}
                    style={!isValid || isSubmitting ? styles.disabledButton : styles.button}
                    loading={isSubmitting}
                  >
                    <Text style={styles.logintext}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 160,
    height: 40,
    backgroundColor: '#53714b',
    borderRadius: 40,
  },
  disabledButton: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 160,
    height: 40,
    backgroundColor: 'gray',
    borderRadius: 40,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logintext: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#edf4eb',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
