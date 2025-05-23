import { View, Text, StyleSheet } from 'react-native';

export default function Sobre(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Eduardo Rocha</Text>
      <Text style={styles.text}>
        Desenvolvedor apaixonado por tecnologia e inovação, com foco em soluções mobile e web.
      </Text>
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
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
