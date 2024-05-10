import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import stylelistaidade from './style/stylelistaidade';
import Menu from './Menu';
import Nav from './Nav';
import { ScrollView } from 'react-native-gesture-handler';

function ListaIdade({ navigation }) {
  const [dados, setDados] = useState('');

  const idade1a3 = () => {
    var valor = 1;
    navigation.navigate('Produtos', { valor });
  };
  const idade3a5 = () => {
    var valor = 2;
    navigation.navigate('Produtos', { valor });
  };
  const idade5a8 = () => {
    var valor = 3;
    navigation.navigate('Produtos', { valor });
  };
  const idade8a12 = () => {
    var valor = 4;
    navigation.navigate('Produtos', { valor });
  };
  const promocao = () => {
    var valor = 5;
    navigation.navigate('Produtos', {valor});
  };

  /*const loadValue = async () => {
    try {
      const value = await AsyncStorage.getItem('dados');
      if (value !== null) {
        setDados(value);
        console.log(dados);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };
  loadValue();
  console.log("oi"+dados);*/

  return (
    <View style={styles.container}>
      <Nav></Nav>
      <View style={stylelistaidade.viewimgmlk}>
      <TouchableOpacity style={stylelistaidade.touchbutton} onPress={promocao}>
        <Image source={require('./assets/banner.png')} style={stylelistaidade.imgmlk}></Image>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={stylelistaidade.idades}>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/1a3/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton}>
          <TouchableOpacity style={stylelistaidade.touchbutton} onPress={idade1a3}>
            <Text style={stylelistaidade.textbutton}>1 a 3 anos</Text>
          </TouchableOpacity>
        </View>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/5a8/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton2}>
          <TouchableOpacity style={stylelistaidade.touchbutton} onPress={idade5a8}>
            <Text style={stylelistaidade.textbutton}>5 a 8 anos</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView style={stylelistaidade.idades2}>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/3a5/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton}>
          <TouchableOpacity style={stylelistaidade.touchbutton} onPress={idade3a5}>
            <Text style={stylelistaidade.textbutton}>3 a 5 anos</Text>
          </TouchableOpacity>
        </View>
        <View style={stylelistaidade.viewimgmidade}>
          <Image source={require('./assets/8a12/main.jpg')} style={stylelistaidade.imgidade}></Image>
        </View>
        <View style={stylelistaidade.viewbutton2}>
          <TouchableOpacity style={stylelistaidade.touchbutton} onPress={idade8a12}>
            <Text style={stylelistaidade.textbutton}>8 a 12 anos</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Menu></Menu>
    </View>
  );
}

export default ListaIdade;
