import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    nav: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'lightgray',
        width: '102%',
        height: 110,
        top: -5,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#26a1f4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewiconnav: {
        position: 'absolute',
        top: 50,
        left: 15,
    },
    iconnav: {
        width: 45,
        height: 45,
    },
    viewlogonav: {
        top: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logonav: {
        left: 2,
        bottom: 2,
        width: 70,
        height: 70,
    },
    viewlogoprofile: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    logoprofile: {
        width: '90%',
        height: '90%',
        borderRadius: 100,
    },
    viewtextleave: {
        position: 'absolute',
        top: 56,
        right: 80,
        width: 45,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgray',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textleave: {
        color: 'white',
        fontSize: 15,
    },
})