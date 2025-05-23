import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Eduardo Rocha</Text>
      <Text style={styles.text}>• Sistema de Irrigação Automatizado com Arduino</Text>
      <Text style={styles.text}>• Aplicativo de Portfólio em React Native</Text>
      <Text style={styles.text}>• Website Pessoal com HTML, CSS e JS</Text>
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
