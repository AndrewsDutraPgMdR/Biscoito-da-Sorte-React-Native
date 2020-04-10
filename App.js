import React, {Component} from 'react';
import {View,Text, Button} from 'react-native';

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      nome: "Andrews"
    };
    this.entrar = this.entrar.bind(this);
  }
  entrar(nome){
    this.setState({
      nome: nome
    })
  }
  render(){

    let nome = 'Andrews';
    


    return(
      <View style={{marginTop: 50}}>
        <Button title="Entrar" onPress={() => this.entrar('Algum texto')}/>
        <Text style={{fontSize:23,color:'red',textAlign:'center'}}>
           {this.state.nome}
        </Text>
        
      </View>
    );
  }
}



export default App;