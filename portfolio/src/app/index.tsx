import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/foto.jpg')} style={styles.image} />
      <Text style={styles.title}>Portfólio de Eduardo Rocha</Text>

      <View style={styles.nav}>
        <Link href="/sobre" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navText}>Sobre</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/projetos" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navText}>Projetos</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/contato" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navText}>Contato</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  nav: {
    flexDirection: 'row',
    gap: 20,
  },
  navButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});
