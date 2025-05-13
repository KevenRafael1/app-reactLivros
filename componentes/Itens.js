import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ItensComponente = ({ itens, excluirItem, carregarItem }) => {
    return (
        <View style={estilos.conteudo}>
            {itens.map((item, index) => (
                <View key={item.id} style={estilos.itemContainer}>
                     <TouchableOpacity onPress={() => carregarItem(item.id)}>
                        <Text style={estilos.item}>{item.item || 'Item não definido'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => excluirItem(item.id)}>
                        <Text style={estilos.excluir}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

ItensComponente.propTypes = {
    itens: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            item: PropTypes.string,
        })
    ).isRequired,
    excluirItem: PropTypes.func.isRequired,
    carregarItem: PropTypes.func.isRequired, 
};

const estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    item: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    excluir: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        flexDirection: 'row',
        marginLeft: 30,
        backgroundColor: 'red',
    },
});

export default ItensComponente;