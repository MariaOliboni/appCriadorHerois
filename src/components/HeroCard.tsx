import { Image, StyleSheet, Text, View } from 'react-native';

interface HeroCardProps {
  nome: string;
  classe: string;
  avatarUrl: string;
}

export function HeroCard({ nome, classe, avatarUrl }: HeroCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={{ flex: 1, marginLeft: 16 }}>
          <Text style={styles.name}>{nome}</Text>
          <Text style={styles.class}>{classe}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    padding: 24,
    backgroundColor: '#1b2540',
    borderRadius: 8,
    marginVertical: 6,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  class: {
    color: '#fff',
    fontSize: 14,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});