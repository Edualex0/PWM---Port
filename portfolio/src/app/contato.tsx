import * as React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Contato(): React.JSX.Element {
  const router = useRouter();

  const abrirEmail = () => {
    Linking.openURL('mailto:eduardoalxdrocha@gmail.com');
  };

  const abrirGithub = () => {
    Linking.openURL('https://github.com/Edualex0');
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Contato</Text>

        <Text style={styles.text}>Entre em contato por e-mail:</Text>
        <TouchableOpacity onPress={abrirEmail} style={styles.linkButton}>
          <Text style={styles.link}>eduardoalxdrocha@gmail.com</Text>
        </TouchableOpacity>

        <Text style={[styles.text, { marginTop: 32 }]}>Ou acesse meu GitHub:</Text>
        <TouchableOpacity onPress={abrirGithub} style={styles.linkButton}>
          <Text style={styles.link}>github.com/Edualex0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 24,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#555',
    borderRadius: 6,
    marginBottom: 16,
  },
  backText: {
    fontSize: 14, // mantém pequeno
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32, // título maior
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  text: {
    fontSize: 20, // textos maiores
    textAlign: 'center',
    color: '#fff',
  },
  linkButton: {
    paddingVertical: 8,
  },
  link: {
    fontSize: 20, // links maiores também
    color: '#4EA8DE',
    textDecorationLine: 'underline',
  },
});
