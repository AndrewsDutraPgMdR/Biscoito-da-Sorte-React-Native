import React, {Component} from 'react';
import {View,Text} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-start'}}>
        <View style={{width:50,height:50,backgroundColor:'green'}}></View>
        <View style={{width:50,height:50,backgroundColor:'red'}}></View>
        <View style={{width:50,height:50,backgroundColor:'yellow'}}></View>
      </View>
    );
  }
}


export default App;