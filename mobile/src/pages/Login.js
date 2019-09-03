import React from 'react';
import { KeyboardAvoidingView, Platform, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png'; //o react-native escolhe o melhor tamanho da imagem

export default function Login() {
    return (
        <KeyboardAvoidingView //isso é apenas para IOS, para o teclado nao passar por cima dos dados da tela 
            enabled={Platform.OS == 'ios'} //habilito apenas para a plataforma IOS
            behavior="padding"
            style={styles.container}

        >
            <Image source={logo} />
            <TextInput
                autoCapitalize="none" //ele nao coloca a primeira letra maiúscula
                autoCorrect={false} // nao aceita corretor
                placeholder="Digite seu usuário do Github"
                placeholderTextColor="#999"
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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
})