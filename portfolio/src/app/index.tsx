import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home(): React.JSX.Element {
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

        <Link href="/jogo" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navText}>Jogo</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#fff',
  },
  nav: {
    gap: 12,
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: '#343E54',
    paddingVertical: 18,
    paddingHorizontal: 36,
    borderRadius: 8,
    minWidth: 270,
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
});
