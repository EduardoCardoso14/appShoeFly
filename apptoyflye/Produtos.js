import { React, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, SafeAreaView, ScrollView, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';
import styleprodutos from './style/styleprodutos';
import Menu from './Menu';
import Nav from './Nav';
import Lista1a3 from './Lista1a3';
import Lista3a5 from './Lista3a5';
import Lista5a8 from './Lista5a8';
import Lista8a12 from './Lista8a12';
import ListaPromocao from './ListaPromocao';

function Produtos({ navigation, route }) {
    const { valor } = route.params;
    console.log(route.params);
    return (
        <View style={styles.container}>
            {valor == 1 ?
                <>
                    <Lista1a3 />
                </>
                :
                <>
                </>
            }
            {valor == 2 ?
                <>
                    <Lista3a5></Lista3a5>
                </>
                :
                <>
                </>
            }
            {valor == 3 ?
                <>
                    <Lista5a8></Lista5a8>
                </>
                :
                <>
                </>
            }
            {valor == 4 ?
                <>
                    <Lista8a12></Lista8a12>
                </>
                :
                <>
                </>
            }
            {valor == 5 ?
                <>
                    <ListaPromocao></ListaPromocao>
                </>
                :
                <>
                </>
            }
            <Nav></Nav>
            <Menu></Menu>
        </View>
    );
}

export default Produtos;

/* 
    TENTATIVA DE COLOCAR SÓ AS COISA DO BANCO MAS DEU PAU 03/04
<View style={styleprodutos.descpage}>
                <Text>1 a 3 anos</Text>
            </View><SafeAreaView style={styleprodutos.produtos}>
                <FlatList
                    data={produtos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => aviso(item.id, item.nome, item.descricao, item.preco, item.idade)}>

                            <View style={styleprodutos.card}>
                                <View style={styleprodutos.viewimgmidade}>
                                    <Image source={{ uri: `${item.imagem}` }} style={styleprodutos.imgidade} />
                                </View>
                                <View style={styleprodutos.viewtextoproduto}>
                                    <Text style={styleprodutos.titleproduto}>{item.nome}</Text>
                                    <Text style={styleprodutos.descproduto}>{item.descricao}</Text>
                                    <Text style={styleprodutos.precoproduto}>{item.preco}</Text>
                                    <View style={styleprodutos.viewbutton2}>
                                        <TouchableOpacity style={styleprodutos.touchbutton} onPress={() => navigation.navigate('Compra', { nome: 'Andador Fischer Price', valor: 'R$ 85,90', desc: 'Um andador divertido cheio de cor e ferramentas para estimular a criatividade e coordenação motora de seu pequeno!', img: 1 })}>
                                            <Text style={styleprodutos.textbutton}>Comprar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styleprodutos.linha}></View>
                        </TouchableOpacity>
                    )} />
            </SafeAreaView>
            */





/*
                        TUDO SETADO NA MÃO, ESSA É A V1, MAS É SÓ RASCUNHO SLA JOGA FORA DPS
<View style={styleprodutos.descpage}>
                <Text>{titulo}</Text>
            </View>
            <SafeAreaView style={styleprodutos.produtos}>
                <ScrollView style={styleprodutos.scrollview}>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/andadorzinho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Andador Fischer Price</Text>
                            <Text style={styleprodutos.descproduto}>Um andador divertido cheio de cor e ferramentas para estimular a criatividade e coordenação motora de seu pequeno!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 85,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/chocalhozinho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Chocalho amigãozinho</Text>
                            <Text style={styleprodutos.descproduto}>Animaizinhos divertidos e com sons diversos em um chocalho suspenso, que irão divertir o seu pequeno!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 60,00</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/peluciapatinho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Pelúcia Cute Duck</Text>
                            <Text style={styleprodutos.descproduto}>Cute Duck será o novo amiguinho de seu filho, com frases divertidas e fofas que interagem com a criança!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 79,90</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                    <View style={styleprodutos.card}>
                        <View style={styleprodutos.viewimgmidade}>
                            <Image source={require('./assets/1a3/telefoninho.jpg')} style={styleprodutos.imgidade}></Image>
                        </View>
                        <View style={styleprodutos.viewtextoproduto}>
                            <Text style={styleprodutos.titleproduto}>Phone-car</Text>
                            <Text style={styleprodutos.descproduto}>Um telefonezinho engraçado e divertido com funções que irão aguçar a criatividade e curiosidade da criança!</Text>
                            <Text style={styleprodutos.precoproduto}>R$ 58,50</Text>
                            <View style={styleprodutos.viewbutton2}>
                                <TouchableOpacity style={styleprodutos.touchbutton}>
                                    <Text style={styleprodutos.textbutton}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styleprodutos.linha}></View>

                </ScrollView>
            </SafeAreaView>
            
            
            
            
            
            
            
            ISSO AQUI FOI SÓ PRA SALVAR O TERNÁRIO SE QUISER JOGA FORA SE NÃO PRECISAR USAR DPS
            {valor == 1 ?
                <>
                    <Lista1a3 />
                </>
                :
                <>
                </>
            }
            {valor == 2 ?
                <>
                    <Lista3a5></Lista3a5>
                </>
                :
                <>
                </>
            }
            {valor == 3 ?
                <>
                    <Lista5a8></Lista5a8>
                </>
                :
                <>
                </>
            }
            {valor == 4 ?
                <>
                    <Lista8a12></Lista8a12>
                </>
                :
                <>
                </>
            }
            
            
            
            */