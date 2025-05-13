import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../config/config'; // Importa a configuração do Firebase
import { ref, update } from 'firebase/database'; // Importa funções para referenciar e atualizar dados no Firebase

function Editar({ itemSelecionado, onAtualizacaoConcluida }) {
    const [id, setId] = useState('');
    const [item, setItem] = useState('');

    useEffect(() => {
        if (itemSelecionado) {
            const { id, item } = itemSelecionado;
            setId(id);
            setItem(item);
        }
    }, [itemSelecionado]);

    const atualizarItem = () => { // update
        const itemRef = ref(db, `escola/${id}`); // Cria uma referência ao item no Firebase
        update(itemRef, { item }) // Atualiza o valor do item no Firebase
            .then(() => {
                console.log('Item atualizado com sucesso!'); // Loga sucesso no console
                onAtualizacaoConcluida(); // Chama a função passada via props para indicar que a atualização foi concluída
            })
            .catch((error) => {
                console.error('Erro ao atualizar o item:', error); // Loga o erro no console, caso ocorra
            });
    };

    return (
        <View style={estilos.formulario}>
            <TextInput
                style={estilos.input}
                placeholder="Item"
                value={item}
                onChangeText={setItem}
            />
            <Button title="Atualizar" onPress={atualizarItem} /> 
        </View>
    );
}

const estilos = StyleSheet.create({
    formulario: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});

export default Editar;