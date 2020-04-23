import React from 'react';
import {Button, View, StyleSheet, TouchableOpacity} from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    title: 'Home',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('chatbot')}>
            <button>Chatbot</button>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <button>Click</button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexWrap: 'wrap',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    marginLeft: '5%',
  },
  btn1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    marginRight: '45%',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '30%',
  },
});

export default Home;
