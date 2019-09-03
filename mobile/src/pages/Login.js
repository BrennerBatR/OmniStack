import React from 'react';
<<<<<<< HEAD
import { KeyboardAvoidingView, Platform, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
=======
import { View, StyleSheet, Image, TextInput , Button } from 'react-native';
>>>>>>> f3e1172eb80e0b9890e8c0cbffd68b68bf01df6e

import logo from '../assets/logo.png'; //o react-native escolhe o melhor tamanho da imagem

export default function Login() {
    return (
<<<<<<< HEAD
        <KeyboardAvoidingView //isso é apenas para IOS, para o teclado nao passar por cima dos dados da tela 
            enabled={Platform.OS == 'ios'} //habilito apenas para a plataforma IOS
            behavior="padding"
            style={styles.container}

        >
            <Image source={logo} />
            <TextInput
                autoCapitalize="none" //ele nao coloca a primeira letra maiúscula
                autoCorrect={false} // nao aceita corretor
=======
        <View style={styles.container}>
            <Image source={logo} />
            <TextInput
>>>>>>> f3e1172eb80e0b9890e8c0cbffd68b68bf01df6e
                placeholder="Digite seu usuário do Github"
                placeholderTextColor="#999"
                style={styles.input}
            />
<<<<<<< HEAD
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
=======
        </View>
>>>>>>> f3e1172eb80e0b9890e8c0cbffd68b68bf01df6e
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
<<<<<<< HEAD
        alignSelf: 'stretch', //ocupa toda largura possivel
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
=======
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor:'#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    }
>>>>>>> f3e1172eb80e0b9890e8c0cbffd68b68bf01df6e
})