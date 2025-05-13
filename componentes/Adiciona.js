import React, { useState } from 'react';
import {
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import { db } from '../config/config';
import { ref, push } from 'firebase/database';

function Adiciona() {
    const [item, setItem] = useState('');

    const salvaItem = () => {
        const itemRef = ref(db, 'escola');
        push(itemRef, {
            item: item
        })
        .then(() => {
            Alert.alert("Item salvo com sucesso!");
            setItem('');
            console.log('Item salvo com sucesso!');
        })
        .catch((error) => {
            Alert.alert('Erro ao salvar o item!');
            console.log('Erro ao salvar o item!', error);
        });
    };

    return (
        <View style={estilos.conteudoPrincipal}>
            <Text style={estilos.titulo}>Adicionar Itens</Text>
            <TextInput
                style={estilos.itemInput}
                value={item}
                onChangeText={setItem}
            />
            <TouchableHighlight
                style={estilos.botao}
                underlayColor="white"
                onPress={salvaItem}
            >
                <Text style={estilos.botaoText}>Salvar</Text>
            </TouchableHighlight>   
        </View>
    );
}

const estilos = StyleSheet.create({
    conteudoPrincipal: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titulo: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderColor: 'white',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white',
    },
    botao: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});

export default Adiciona;