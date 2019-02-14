/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { StatusBar, ImageBackground, Dimensions } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Categories } from '../components/categories';
import { Container } from '../components/Container';
/* eslint-disable linebreak-style */
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searching: false,
    };
  }

  updateSearch = (search) => {
    this.setState({ search, searching: true });
  };

  render() {
    const { search, searching } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('../photos/chef.jpg')}
          style={{
            position: 'relative',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        >
          <StatusBar translucent backgroundColor="transparent" />
          <Header
            containerStyle={{ height: 80, backgroundColor: 'transparent' }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={(
              <SearchBar
                onChangeText={this.updateSearch}
                placeholder="Search For Category..."
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
          <Categories
            searchingValue={search}
            searching={searching}
            navigation={navigation}
            onPress={this.handleFood}
          />
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
