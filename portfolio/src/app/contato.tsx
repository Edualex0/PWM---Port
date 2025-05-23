import * as React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function Contato(): React.JSX.Element {
  const abrirEmail = () => {
    Linking.openURL('mailto:eduardo.rocha@email.com');
  };

  const abrirGithub = () => {
    Linking.openURL('https://github.com/Edualex0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>

      <Text style={styles.text}>Entre em contato por e-mail:</Text>
      <TouchableOpacity onPress={abrirEmail}>
        <Text style={styles.link}>eduardo.rocha@email.com</Text>
      </TouchableOpacity>

      <Text style={[styles.text, { marginTop: 24 }]}>Ou acesse meu GitHub:</Text>
      <TouchableOpacity onPress={abrirGithub}>
        <Text style={styles.link}>github.com/Edualex0</Text>
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
  link: {
    marginTop: 8,
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
