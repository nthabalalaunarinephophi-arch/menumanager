import { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { MenuContext } from './_layout';

export default function Chef() {
  const { addDish } = useContext(MenuContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addFood = () => {
    if (!name || !description || !course || !price) {
      return;
    }

    addDish({
      id: Date.now().toString(),
      name: name,
      description: description,
      course: course,
      price: price,
    });

    setName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Chef's Menu</Text>
      <Text style={styles.heading}>Add Food</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.addButton} onPress={addFood}>
        <Text style={styles.addText}>Add Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.menuText}>View Customer Menu</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },

  back: {
    fontSize: 17,
    color: '#555',
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },

  addButton: {
    backgroundColor: '#555',
    padding: 13,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 5,
  },

  addText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  menuButton: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 13,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
  },

  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});