import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../config/config';
import { ref, onValue, remove } from 'firebase/database';
import ItensComponente from './Itens';
import EditarItem from './Editar';

function ListarItens() {
    const [itens, setItens] = useState([]);
    const [itemSelecionado, setItemSelecionado] = useState(null);

    useEffect(() => {
        const itensRef = ref(db, 'escola');
        const unsubscribe = onValue(itensRef, (snapshot) => {
            let data = snapshot.val();
            if (data) {
                let itens = Object.keys(data).map(key => ({
                    id: key,
                    item: data[key].item || 'Item não definido',
                    ...data[key],
                }));
                setItens(itens);
            } else {
                setItens([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const excluirItem = (id) => {
        const itemRef = ref(db, `escola/${id}`);
        remove(itemRef)
            .then(() => {
                console.log('Item excluído com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao excluir o item:', error);
            });
    };

    const carregarItem = (id) => {
        const itemRef = ref(db, `escola/${id}`);
        onValue(itemRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setItemSelecionado({ id, ...data });
            } else {
                console.error('livro não encontrado no banco de dados.');
            }
        });
    };

    return (
        <View style={estilos.conteudo}>
            {itemSelecionado ? (
                <EditarItem
                    itemSelecionado={itemSelecionado}
                    onAtualizacaoConcluida={() => setItemSelecionado(null)}
                />
            ) : (
                itens.length > 0 ? (
                    <ItensComponente 
                        itens={itens} 
                        excluirItem={excluirItem} 
                        carregarItem={carregarItem} 
                    />
                ) : (
                    <Text>Nenhum livro salvo!</Text>
                )
            )}
        </View>
    );
}

const estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListarItens;