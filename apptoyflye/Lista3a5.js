import { React, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';
import { useNavigation } from '@react-navigation/native';

function Lista3a5({ route }) {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        fetch('http://172.16.42.89/apitoyfly/select3a5/')
            //fetch('https://api.semlimite.app.br/select/')
            .then(response => response.json())
            .then(data => setProdutos(data))
            .catch(error => alert('Sem Registro'));
    }, []);
    const navigation = useNavigation();
    const vambora = (a, b, c, d, e) => {
        var idade = "3a5";
        navigation.navigate('Carrinho', { id: a, imagem: b, nome: c, descricao: d, preco: e, idade });
    }
   /* var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';
    var abcd = 'http://172.16.42.89/img/';
    var abc = base64Icon;*/


    return (
        <View style={styles.container}>
            <View style={styleprodutos.descpage}>
                <Text>1 a 3 anos</Text>
            </View><SafeAreaView style={styleprodutos.produtos}>
                    <FlatList
                        data={produtos}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => vambora(item.id, item.imagem, item.nome, item.descricao, item.preco)}>
                                
                                <View style={styleprodutos.card}>
                                    <View style={styleprodutos.viewimgmidade}>
                                        <Image source={{ uri: `${item.imagem}` }} style={styleprodutos.imgidade} />
                                    </View>
                                    <View style={styleprodutos.viewtextoproduto}>
                                        <Text style={styleprodutos.titleproduto}>{item.nome}</Text>
                                        <Text style={styleprodutos.descproduto}>{item.descricao}</Text>
                                        <Text style={styleprodutos.precoproduto}>{item.preco}</Text>
                                        <View style={styleprodutos.viewbutton2}>
                                            <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => vambora(item.id, item.imagem, item.nome, item.descricao, item.preco)}>
                                                <Text style={styleprodutos.textbutton}>Comprar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styleprodutos.linha}></View>
                            </TouchableOpacity>
                        )} />
            </SafeAreaView>
        </View>
    );
}

export default Lista3a5;