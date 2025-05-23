import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre(): React.JSX.Element {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Sobre Eduardo Rocha</Text>
        <Text style={styles.text}>• Estudante do 5º período de Ciência da Computação, apaixonado por tecnologia e inovação</Text>
        <Text style={styles.text}>• Já estagiei em um colégio municipal, ensinando crianças sobre robótica.</Text>
        <Text style={styles.text}>• Atualmente trabalho numa corretora de seguros, fazendo manutenção nos computadores e auxiliando outros colaboradores com problemas técnicos.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
});
