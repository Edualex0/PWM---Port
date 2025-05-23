import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Projetos(): React.JSX.Element {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Projetos</Text>
      <Text style={styles.item}>• Sistema de Irrigação Automatizado com Arduino.</Text>
      <Text style={styles.item}>• Aplicativo de Portfólio em React Native.</Text>
      <Text style={styles.item}>• Website Pessoal com HTML, CSS e JS.</Text>
      <Text style={styles.item}>• Desenvolvimento de um Banco de Dados para a empresa em que trabalho.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#2E2E2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    marginBottom: 12,
    color: '#fff',
    textAlign: 'center',
  },
});
