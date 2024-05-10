import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylehome from './style/stylehome';
import Menu from './Menu';
import Nav from './Nav';

function Home({ navigation }) {
  const [id, setId] = useState('');
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  /*const loadValue = async () => {
    try {
      const idV = await AsyncStorage.getItem('id');
      const imagemV = await AsyncStorage.getItem('imagem');
      const nomeV = await AsyncStorage.getItem('nome');
      const emailV = await AsyncStorage.getItem('email');
      if (idV !== null && imagemV !== null && nomeV !== null && emailV !== null) {
        setId(idV);
        setImagem(imagemV);
        setNome(nomeV);
        setEmail(emailV);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };*/
 // loadValue();
  /*console.log(id);
  console.log(imagem);
  console.log(nome);
  console.log(email);*/

  return (
    <View style={styles.container}>
      <Nav></Nav>
      <View style={stylehome.viewimgmlk}>
        <Image source={require('./assets/kidplay.gif')} style={stylehome.imgmlk}></Image>
      </View>
      <View style={stylehome.viewtextmain}>
        <Text style={stylehome.textmain}>Toy Fly - Seu aplicativo para comprar brinquedos!</Text>
      </View>
      <View style={stylehome.viewtextdesc}>
        <Text style={stylehome.textdesc}>Aqui você encontra as principais promoções de brinquedos
          com base na idade de seu pequeno! Aproveite as ofertas e começe a comprar clicando no botâo abaixo.
        </Text>
      </View>
      <View style={stylehome.viewbutton}>
        <TouchableOpacity style={stylehome.touchbutton} onPress={() => navigation.navigate('ListaIdade')}>
          <Text style={stylehome.textbutton}>Começar a comprar!</Text>
        </TouchableOpacity>
      </View>
      <Menu></Menu>
    </View>
  );
}

export default Home;
