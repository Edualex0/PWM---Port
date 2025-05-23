import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Jogo(): React.JSX.Element {
  const [palpite, setPalpite] = React.useState('');
  const [historico, setHistorico] = React.useState<string[]>([]);
  const [numeroSecreto, setNumeroSecreto] = React.useState(gerarNumeroSecreto());
  const [venceu, setVenceu] = React.useState(false);
  const router = useRouter();

  function gerarNumeroSecreto(): string {
    let digitos = new Set<number>();
    while (digitos.size < 4) {
      digitos.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digitos).join('');
  }

  function verificarPalpite() {
    if (palpite.length !== 4 || new Set(palpite).size !== 4 || !/^\d+$/.test(palpite)) {
      return alert('Palpite inválido. Digite 4 dígitos diferentes.');
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
      setVenceu(true);
    }

    setPalpite('');
  }

  function reiniciarJogo() {
    setNumeroSecreto(gerarNumeroSecreto());
    setHistorico([]);
    setPalpite('');
    setVenceu(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Jogo: Bulls and Cows</Text>

        {!venceu && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Digite 4 dígitos"
              value={palpite}
              onChangeText={setPalpite}
              keyboardType="numeric"
              maxLength={4}
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity onPress={verificarPalpite} style={styles.verifyButton}>
              <Text style={styles.verifyButtonText}>Verificar</Text>
            </TouchableOpacity>
          </>
        )}

        {venceu && (
          <View style={styles.resultadoContainer}>
            <Text style={styles.parabens}>🎉 Parabéns! Você acertou! 🎉</Text>
            <TouchableOpacity onPress={reiniciarJogo} style={styles.reiniciarButton}>
              <Text style={styles.verifyButtonText}>Jogar Novamente</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.historico}>
          {historico.map((linha, index) => (
            <Text key={index} style={styles.historicoItem}>{linha}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  },
  content: {
    flex: 1,
    padding: 24,
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
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    width: '50%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#000',
  },
  verifyButton: {
    backgroundColor: '#343E54',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 16,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historico: {
    marginTop: 20,
    alignItems: 'center',
  },
  historicoItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  resultadoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  parabens: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00FFAA',
    textAlign: 'center',
    marginBottom: 16,
  },
  reiniciarButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});
