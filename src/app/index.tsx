import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AlunoCard } from '../components/AlunoCard';
import { HeroCard } from '../components/HeroCard';
import { CustomModal } from '../modals/CustomModal';

const DEFAULT_AVATAR = 'https://cdn-icons-png.flaticon.com/512/3048/3048122.png';

interface Hero {
  id: string;
  name: string;
  classe: string;
  avatar: string;
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const handleAddHero = (name: string, classe: string, avatar: string = DEFAULT_AVATAR) => {
    const newHero: Hero = {
      id: String(new Date().getTime()),
      name,
      classe,
      avatar,
    };

    setHeroes((prevHeroes) => [...prevHeroes, newHero]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Guilda de Heróis</Text>

      <AlunoCard
        titulo="Painel do Aluno"
        textoCard="Acompanhe sua guilda e seus heróis."
      />

      <Text style={styles.text}>Lista de Heróis</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {heroes.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum herói cadastrado ainda.</Text>
        ) : (
          heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              nome={hero.name}
              classe={hero.classe}
              avatarUrl={hero.avatar}
            />
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Adicionar Herói</Text>
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddHero}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 80,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  emptyText: {
    color: '#7C7C8A',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#0423d3',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: '#121214',
    fontWeight: 'bold',
    fontSize: 16,
  },
});