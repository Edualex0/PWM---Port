import * as React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Contato(): React.JSX.Element {
  const router = useRouter();

  const abrirEmail = () => {
    Linking.openURL('mailto:eduardo.rocha@email.com');
  };

  const abrirGithub = () => {
    Linking.openURL('https://github.com/Edualex0');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Contato</Text>

      <Text style={styles.text}>Entre em contato por e-mail:</Text>
      <TouchableOpacity onPress={abrirEmail} style={styles.linkButton}>
        <Text style={styles.link}>eduardoalxdrocha@gmail.com</Text>
      </TouchableOpacity>

      <Text style={[styles.text, { marginTop: 24 }]}>Ou acesse meu GitHub:</Text>
      <TouchableOpacity onPress={abrirGithub} style={styles.linkButton}>
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
  backButton: {
    marginBottom: 16,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#ccc',
    borderRadius: 6,
  },
  backText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
  },
  linkButton: {
    alignSelf: 'flex-start', // limita a largura ao conteúdo
    paddingVertical: 6,
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
