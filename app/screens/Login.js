/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
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
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { SocialIcon } from 'react-native-elements';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Input } from '../components/login';

const api = user => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (user.email !== 'ahmed@gmail.com' || user.password !== '123456') {
      reject({
        email: Alert.alert('Wrong Email Or Password :)'),
      });
    } else {
      resolve();
    }
  }, 2000);
});

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleRegister = () => this.props.navigation.navigate('Signup');

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
            initialValues={{ email: '', password: '' }}
            onSubmit={this.handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required(),
              password: Yup.string()
                .min(6)
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
                  {'Welcome! Please Sign In'}
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

                <View>
                  <TouchableOpacity
                    disabled={!isValid || isSubmitting}
                    onPress={handleSubmit}
                    style={!isValid || isSubmitting ? styles.disabledButton : styles.button}
                    loading={isSubmitting}
                  >
                    <Text style={styles.logintext}>Log In</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    paddingTop: 10,
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    {"Don't have an account?"}
                  </Text>
                  <TouchableOpacity onPress={this.handleRegister}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'white',
                        paddingLeft: 5,
                      }}
                    >
                      {'Register'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                  <SocialIcon
                    style={{
                      width: 200,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: 20,
                      opacity: 50,
                      backgroundColor: '#53714b',
                    }}
                    fontStyle={{
                      textAlign: 'center',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}

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
export default Login;
