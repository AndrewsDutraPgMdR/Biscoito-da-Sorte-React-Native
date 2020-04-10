import React, {Component} from 'react';
import {View,Text, Image} from 'react-native';

class App extends Component{
  render(){

    let nome = 'Andrews';
    


    return(
      <View>
        <Text> Ola mundo </Text>
        <Text> Meu primeiro APP </Text>
        <Text style={{color:'red',fontSize:24,margin:15}}> 
          Sujeito Programador
        </Text>
        <Text style={{fontSize: 30}}> {nome} </Text>
        <Jobs largura={500} altura={500} nome="SteveeeJob"/>
      </View>
    );
  }
}

class Jobs extends Component{
  render(){
    let img = 'https://sujeitoprogramador.com/steve.png'
    return(
      <View>
        <Image 
          source={{uri: img}}
          style={{width:this.props.largura,height:this.props.altura}}
        />
        <Text> {this.props.nome} </Text>
      </View>
    );
  }
}

export default App;