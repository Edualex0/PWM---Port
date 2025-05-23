import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Projetos(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <Text style={styles.item}>• Sistema de Irrigação Automatizado com Arduino</Text>
      <Text style={styles.item}>• Aplicativo de Portfólio em React Native</Text>
      <Text style={styles.item}>• Website Pessoal com HTML, CSS e JS</Text>
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
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});
