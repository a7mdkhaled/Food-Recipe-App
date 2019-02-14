/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Header, SearchBar, Icon } from 'react-native-elements';
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { databaseOptions, FOOD_SCHEMA } from '../databases/allSchemas';

const Realm = require('realm');

class Food extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      food: [],
      search: '',
      searching: false,
    };
  }

  componentDidMount() {
    Realm.open(databaseOptions).then((realm) => {
      const food = realm.objects(FOOD_SCHEMA);
      this.setState({ food });
    });
  }

  updateSearch = (search) => {
    this.setState({ search, searching: true });
  };

  handleRecipe = (item) => {
    const { navigation } = this.props;
    navigation.navigate('Recipe', { item });
  };

  render() {
    const { search, searching } = this.state;
    const { navigation } = this.props;
    const { id } = navigation.state.params.item;
    const { food } = this.state;
    const result = food.filter(y => y.id === id);

    const x = searching === true
      ? result.filter(f => f.food.toLowerCase().includes(search.toLowerCase()))
      : null;

    return (
      <Container>
        <ImageBackground
          source={require('../photos/coo.jpg')}
          style={{
            position: 'relative',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        >
          <StatusBar translucent backgroundColor="transparent" />
          <Header
            containerStyle={{ height: 80, backgroundColor: 'transparent' }}
            leftComponent={(
              <Icon
                onPress={() => navigation.goBack(null)}
                name="arrow-back"
                size={26}
                color="#fff"
              />
)}
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={(
              <SearchBar
                onChangeText={this.updateSearch}
                placeholder="Search For Food..."
                value={search}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomColor: 'transparent',
                  borderTopColor: 'transparent',
                  width: 300,
                  height: 10,
                  flex: 1,
                }}
                lightTheme
                round
                inputStyle={{ fontSize: 14 }}
                searchIcon
                cancelIcon
              />
)}
          />

          <FlatList
            style={{
              marginBottom: 80,
            }}
            contentContainerStyle={{
              alignContent: 'space-between',
              justifyContent: 'space-between',
            }}
            numColumns={2}
            data={searching === false ? result : x}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'column',
                  flex: 1 / 2,
                  justifyContent: 'space-between',
                  alignContent: 'space-between',
                }}
              >
                <TouchableOpacity activeOpacity={0.7} onPress={() => this.handleRecipe(item)}>
                  <ImageBackground
                    imageStyle={{ borderRadius: 30 }}
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    style={{
                      width: Dimensions.get('window').width / 2 - 8,
                      height: 150,
                      borderRadius: 50,
                      marginTop: 5,
                      marginHorizontal: 5,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(51, 51, 0, 0.4)',
                        flex: 1,
                      }}
                    >
                      <Text
                        style={{
                          width: '100%',
                          marginHorizontal: 30,
                          letterSpacing: 0.5,
                          fontSize: 23,
                          fontStyle: 'italic',
                          fontFamily: 'American Typewriter',
                          color: '#fff',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        {item.food}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </ImageBackground>
      </Container>
    );
  }
}

export default Food;
