import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Jogo(): React.JSX.Element {
  const [palpite, setPalpite] = React.useState('');
  const [historico, setHistorico] = React.useState<string[]>([]);
  const [numeroSecreto, setNumeroSecreto] = React.useState(gerarNumeroSecreto());

  function gerarNumeroSecreto(): string {
    let digitos = new Set<number>();
    while (digitos.size < 4) {
      digitos.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digitos).join('');
  }

  function verificarPalpite() {
    if (palpite.length !== 4 || new Set(palpite).size !== 4 || !/^\d+$/.test(palpite)) {
      Alert.alert('Palpite inválido', 'Digite 4 dígitos diferentes.');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (palpite[i] === numeroSecreto[i]) {
        bulls++;
      } else if (numeroSecreto.includes(palpite[i])) {
        cows++;
      }
    }

    const resultado = `${palpite} ➜ ${bulls} Bulls, ${cows} Cows`;
    setHistorico([resultado, ...historico]);

    if (bulls === 4) {
      Alert.alert('Parabéns!', 'Você adivinhou o número!', [
        { text: 'Jogar Novamente', onPress: reiniciarJogo },
      ]);
    }

    setPalpite('');
  }

  function reiniciarJogo() {
    setNumeroSecreto(gerarNumeroSecreto());
    setHistorico([]);
    setPalpite('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo: Bulls and Cows</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite 4 dígitos"
        value={palpite}
        onChangeText={setPalpite}
        keyboardType="numeric"
        maxLength={4}
      />
      <Button title="Verificar" onPress={verificarPalpite} />
      <View style={styles.historico}>
        {historico.map((linha, index) => (
          <Text key={index} style={styles.historicoItem}>{linha}</Text>
        ))}
      </View>
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
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 18,
  },
  historico: {
    marginTop: 20,
  },
  historicoItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});
