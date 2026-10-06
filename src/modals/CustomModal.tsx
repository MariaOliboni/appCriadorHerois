import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const DEFAULT_AVATAR = 'https://cdn-icons-png.flaticon.com/512/3048/3048122.png';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (name: string, classe: string, avatar: string) => void;
}

export function CustomModal({ visible, onClose, onSave }: CustomModalProps) {
  const [name, setName] = useState('');
  const [classe, setClasse] = useState('');
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);

  useEffect(() => {
    if (!visible) {
      setName('');
      setClasse('');
      setAvatar(DEFAULT_AVATAR);
    }
  }, [visible]);

  const pickAvatar = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos acessar sua galeria para escolher o avatar do herói.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleImagePress = () => {
    if (!name.trim() || !classe.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos do herói!');
      return;
    }

    onSave(name, classe, avatar);
    setName('');
    setClasse('');
    setAvatar(DEFAULT_AVATAR);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Novo Herói</Text>

          <TouchableOpacity onPress={pickAvatar}>
            <Image source={{ uri: avatar }} style={styles.preview} />
          </TouchableOpacity>

          <Text style={styles.avatarHint}>Escolher avatar</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome do herói"
            placeholderTextColor="#A0A0B2"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Classe (ex.: Mago, Guerreiro)"
            placeholderTextColor="#A0A0B2"
            value={classe}
            onChangeText={setClasse}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleImagePress}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#1E1E2C',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  preview: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#4153d7',
  },
  avatarHint: {
    color: '#A0A0B2',
    fontSize: 12,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    backgroundColor: '#121214',
    color: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  saveButton: {
    width: '100%',
    backgroundColor: '#4153d7',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelText: {
    color: '#A0A0B2',
    fontSize: 14,
  },
});
