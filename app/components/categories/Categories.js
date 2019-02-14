/* eslint-disable linebreak-style */

import {
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { CATEGORIES_SCHEMA, databaseOptions } from '../../databases/allSchemas';

const Realm = require('realm');

class Categories extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    searching: PropTypes.bool,
    searchingValue: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentWillMount() {
    // insert into categroies schema
    /*   Realm.open(databaseOptions).then((realm) => {
      realm.write(() => realm.create(CATEGORIES_SCHEMA, {
        id: 5,
        title: 'italian',
        image:
            'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      }));
    }); */
    // insert into food schema
    /*  Realm.open(databaseOptions).then((realm) => {
      realm.write(() => realm.create(FOOD_SCHEMA, {
        id: 5,
        food: 'Pizza',
        image:
            'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        category: 'Italian ',
      }));
    }); */
    // setstate
    Realm.open(databaseOptions).then((realm) => {
      const categories = realm.objects(CATEGORIES_SCHEMA);
      this.setState({ categories });
    });
    // delete
    /* Realm.open(databaseOptions).then((realm) => {
      const objectsElements = realm.objects(CATEGORIES_SCHEMA);
      realm.write(() => {
        realm.delete(objectsElements);
      });
    }); */
  }

  handleFoodPress = (item) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.navigation.navigate('Food', { item });
  };

  render() {
    const { searching, searchingValue } = this.props;
    const { categories } = this.state;
    const data = searching === true
      ? categories.filter(y => y.title.toLowerCase().includes(searchingValue.toLowerCase()))
      : null;

    return (
      <FlatList
        data={searching === false ? categories : data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
              source={require('../../photos/chef.jpg')}
              style={{ width: Dimensions.get('window').width, opacity: 0.9 }}
            >
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.handleFoodPress(item)}>
                <ImageBackground
                  source={{ uri: item.image }}
                  imageStyle={{
                    borderRadius: 20,
                    resizeMode: 'cover',
                  }}
                  style={styles.image}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      maxWidth: 130,
                      backgroundColor: 'rgba(217, 217, 217, 0.6)',
                      borderborderWidth: 1,
                      flex: 1,
                    }}
                  >
                    <Text style={styles.text}>{item.title}</Text>
                    <Text
                      style={{
                        textAlign: 'left',
                        alignContent: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginHorizontal: 10,
                        color: '#660033',
                      }}
                    >
                      {' Recepies'}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )}
        keyExtractor={item => item.title}
      />
    );
  }
}

export default Categories;
