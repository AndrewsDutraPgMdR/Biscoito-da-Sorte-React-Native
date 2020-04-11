import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      textoFrase:'',
      img:require('./src/original.png')
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases=[
      'Os problemas são oportunidades para se mostrar o que sabe.',
      'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.',
      'Tente de novo. Fracasse de novo. Mas fracasse melhor.',
      'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.'
    ];
  }
  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase:'"'+ this.frases[numeroAleatorio]+ '"',
      img: require('./src/biscoitoAberto.png')
    })
    // this.frases[1]
  }

  render(){
    return(
      <View style ={styles.container}>
        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}> 
            <Text style={styles.btnTexto}> Abrir biscoito </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  img:{
    width:250,
    height:250
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color: '#dd7b22'
  }
});

export default App;