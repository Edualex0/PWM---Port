import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Eduardo Rocha</Text>
      <Text style={styles.text}>
        Estudante do 5º período de Ciência da Computação, apaixonado por tecnologia e inovação.{"\n\n"}
        Já estagiei em um colégio municipal, ensinando crianças sobre robótica.{"\n\n"}
        Atualmente trabalho numa corretora de seguros, fazendo manutenção nos computadores e auxiliando outros colaboradores com problemas técnicos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
