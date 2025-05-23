import * as React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function Contato(): React.JSX.Element {
  const abrirEmail = () => {
    Linking.openURL('mailto:eduardo.rocha@email.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>Entre em contato por e-mail:</Text>

      <TouchableOpacity onPress={abrirEmail}>
        <Text style={styles.email}>eduardoalxdrocha@email.com</Text>
      </TouchableOpacity>
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
  },
  email: {
    marginTop: 8,
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
