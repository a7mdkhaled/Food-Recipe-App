/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import { View, Dimensions, ScrollView } from 'react-native';
import { ButtonGroup, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

class Options extends Component {
  static propTypes = {
    ingredients: PropTypes.array,
    directions: PropTypes.array,
    notes: PropTypes.array,
  };

  constructor(props) {
    super(props);
    const { ingredients, directions, notes } = this.props;
    this.state = {
      selectedIndex: 0,
      ingredients,
      directions,
      notes,
    };
  }

  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    const buttons = ['INGREDIENTS', 'DIRECTIONS', 'NUTRITION FACTS'];
    const { selectedIndex } = this.state;
    const { ingredients, directions, notes } = this.state;
    const Ingredients = () => (
      <ScrollView>
        <ListItem
          containerStyle={{
            backgroundColor: 'transparent',
          }}
          titleNumberOfLines={3}
          underlayColor="red"
          titleContainerStyle={{ marginBottom: 30, marginVertical: 40 }}
          titleStyle={{
            fontSize: 16,
            fontWeight: '900',
            color: 'white',
            marginBottom: 20,
            marginHorizontal: 20,
            letterSpacing: 1,
          }}
          title={ingredients[0].ingredients}
        />
      </ScrollView>
    );

    const Directions = () => (
      <ScrollView>
        <ListItem
          containerStyle={{
            backgroundColor: 'transparent',
          }}
          titleNumberOfLines={2}
          underlayColor="red"
          titleContainerStyle={{ marginBottom: 30, marginVertical: 40 }}
          titleStyle={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            marginHorizontal: 20,
            letterSpacing: 1,
          }}
          title={directions[0].directions}
        />
      </ScrollView>
    );

    const Notes = () => (
      <ScrollView>
        <ListItem
          containerStyle={{
            backgroundColor: 'transparent',
          }}
          titleNumberOfLines={2}
          underlayColor="red"
          titleContainerStyle={{ marginBottom: 30, marginVertical: 40 }}
          titleStyle={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            marginHorizontal: 20,
            letterSpacing: 1,
          }}
          title={notes[0].notes}
        />
      </ScrollView>
    );

    return (
      <View style={{ flex: 1 }}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            flex: 0.1,
            alignContent: 'flex-start',
            flexDirection: 'row',
            borderColor: 'red',
            borderWidth: 0,
            backgroundColor: 'transparent',
          }}
          innerBorderStyle={{ borderWidth: 0, color: 'transparent' }}
          selectedTextStyle={{
            color: 'orange',
            fontWeight: 'bold',
          }}
          selectedButtonStyle={{
            backgroundColor: 'transparent',
            borderBottomWidth: 2,
            borderBottomColor: 'orange',
          }}
          textStyle={{ color: 'white' }}
        />
        <View
          style={{
            alignSelf: 'center',
            flex: 1,
            width: Dimensions.get('window').width - 23,
            backgroundColor: 'rgba(6, 96, 65, 0.3)',
            height: Dimensions.get('window').height,
          }}
        >
          {selectedIndex === 0 ? (
            <Ingredients />
          ) : selectedIndex === 1 ? (
            <Directions />
          ) : selectedIndex === 2 ? (
            <Notes />
          ) : null}
        </View>
      </View>
    );
  }
}

export default Options;
