import { React, useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilonav from './style/stylenav';
import { useNavigation } from '@react-navigation/native';

function Nav() {
    const navigation = useNavigation();

    const [id, setId] = useState('');
    const [imagem, setImagem] = useState('https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-user-icon-isolated-on-abstract-background-png-image_1824979.jpg');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    /*console.log(route.params);
    if(route.params !== ''){
       /* const { imagem, id, nome } = route.params;
        setImagem(imagem);
        setId(id);
        setNome(nome);*/
    /* console.log("oi");
 }*/
    useEffect(() => {
        const loadValue = async () => {
            try {
                const idV = await AsyncStorage.getItem('id');
                const imagemV = await AsyncStorage.getItem('imagem');
                const nomeV = await AsyncStorage.getItem('nome');
                const emailV = await AsyncStorage.getItem('email');
                if (idV !== null) {
                    setId(idV);
                }
                if (imagemV !== null) {
                    setImagem(imagemV.replace(/"/g, ''));
                }
                if (nomeV !== null) {
                    setNome(nomeV);
                }
                if (emailV !== null) {
                    setEmail(emailV);
                }
            } catch (error) {
                console.log('Erro ao carregar valor:', error);
            }
        };
        loadValue();
    }, []);

    /* useEffect(() => {
         const loadValue = async () => {
             try {
                 const nomeV = await AsyncStorage.getItem('usuario');
                 const senhaV = await AsyncStorage.getItem('senha');
                 setImagem("https://cdn-icons-png.flaticon.com/512/20/20079.png")
                 if (nomeV !== null) {
                     setNome(nomeV);
                 }
                 if (senhaV !== null) {
                     setEmail(senhaV);
                 }
             } catch (error) {
                 console.log('Erro ao carregar valor:', error);
             }
         };
         loadValue();
     }, []);*/

    /*const loadValue = async () => {
        try {
            const idV = await AsyncStorage.getItem('id');
            const imagemV = await AsyncStorage.getItem('imagem');
            const nomeV = await AsyncStorage.getItem('nome');
            const emailV = await AsyncStorage.getItem('email');
            console.log("222"+idV);
            console.log(imagemV);
            console.log(nomeV);
            console.log(emailV);
            setImagem(imagemV);
            setNome(nomeV);
            setEmail(emailV)
            setId(idV);
        } catch (e) {
            console.error('Erro ao carregar valor:', e);
        }
    };
    loadValue();*/

    const clearAsyncStorage = async () => {
        AsyncStorage.clear();
        setImagem("https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-user-icon-isolated-on-abstract-background-png-image_1824979.jpg");
        setId('');
        setNome('');
        setEmail('');
        console.log(id);
        console.log(imagem);
        console.log(nome);
        console.log(email);
        navigation.navigate('Login');
    }

    /*if (imagem == null) {
        var imagemformatada = "https://cdn-icons-png.flaticon.com/512/20/20079.png";
    } else {
        var a = imagem;
        var imagemformatada = a.replace(/"/g, '');
    }*/
    /*console.log(id);
    console.log(nome);
    console.log(email);
    console.log(imagem);*/

    return (
        <View style={estilonav.nav}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={estilonav.viewiconnav}>
                <Image source={require('./assets/iconnav.png')} style={estilonav.iconnav}></Image>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilonav.viewlogonav}>
                <Image source={require('./assets/logo.png')} style={estilonav.logonav}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilonav.viewlogoprofile}>
                <Image source={{ uri: `${imagem}` }} style={estilonav.logoprofile}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearAsyncStorage} style={estilonav.viewtextleave}>
                <Text style={estilonav.textleave}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Nav;  