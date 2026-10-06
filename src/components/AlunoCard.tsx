import { Image, StyleSheet, Text, View } from 'react-native';

interface AlunoCardProps {
  titulo: string;
  textoCard: string;
}

export function AlunoCard({ titulo, textoCard }: AlunoCardProps) {
  return (
    <View style={styles.card}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.textoCard}>{textoCard}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 54,
    backgroundColor: '#1b2540',
    borderRadius: 8,
    marginVertical: 6,
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoCard: {
    color: '#fff',
    fontSize: 13,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});