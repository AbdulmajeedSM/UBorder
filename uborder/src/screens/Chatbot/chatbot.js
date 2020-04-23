import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
class chatbot extends React.Component {
  static navigationOptions = {
    title: 'Playgame',
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri: 'https://i.imgur.com/O6DsFUv.jpg',
        }}
        style={{
          flex: 1,
        }}>
      </ImageBackground>
    );
  }
}
export default chatbot;
