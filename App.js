import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Adiciona from './componentes/Adiciona';
import Listar from './componentes/listar';

function Inicial({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.botao}>
        <Button
          title="Adicionar"
          onPress={() => navigation.navigate('Adiciona')}
        />
      </View>
      <View style={estilos.botao}>
        <Button
          title="Listar"
          onPress={() => navigation.navigate('Listar')}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={Inicial} options={{ title: 'Menu Principal' }} />
        <Stack.Screen name="Adiciona" component={Adiciona} options={{ title: 'Adicionar Item' }} />
        <Stack.Screen name="Listar" component={Listar} options={{ title: 'Listar Itens' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    margin: 10
  }
});
