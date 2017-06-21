
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';


import Note from './android/app/components/Note';

export default class Generhey extends Component {

  constructor(){
    super();
    this.state = {myText: 'hello'};
  }

  render() {

    return (

        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.headerText} onPress={this.props.deleteMethod}>{this.state.myText}</Text>
          </View>

        </View>
      )
  };

  deleteMethod(){
    this.setState({myText:''})
  }


}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'red',
  },

  headerText:{
    fontSize:40,
    color:'blue'
  }


});

AppRegistry.registerComponent('Generhey', () => Generhey);
