/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  View, StatusBar, StyleSheet, ImageBackground,
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 700,
  },

  container: {
    flex: 1,
    alignContent: 'center',
  },
  bar: {
    marginBottom: 150,
    marginLeft: 50,
    marginTop: 500,
    alignContent: 'center',
  },
});
class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  /*  setInterval(() => {
           progress += Math.random() / 10;
        if (progress > 100) {
            progress = 100;

          this.setState({ progress }));
        }}}; */
  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      setInterval(() => {
        progress += Math.random() * 5;
        if (progress > 100) {
          progress = 100;
        }
        this.setState({ progress });
      }, 200);
    }, 100);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ImageBackground style={styles.image} source={require('../photos/start.jpg')}>
          <View style={styles.bar}>
            <ProgressBarAnimated
              backgroundAnimationDuration={100}
              backgroundColor="#006600"
              barEasing="ease"
              value={this.state.progress}
              backgroundColorOnComplete="yellow"
              width={350}
              onComplete={() => {
                this.props.navigation.navigate('Login');
              }}
              height={13}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Start;
