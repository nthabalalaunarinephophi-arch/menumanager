import { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { MenuContext } from './_layout';

export default function Menu() {
  const { menu } = useContext(MenuContext);

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Tasty Bites</Text>
      <Text style={styles.heading}>Today's Menu</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            There are no dishes on the menu yet.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.foodBox}>
            <Text style={styles.foodName}>{item.name}</Text>

            <Text style={styles.description}>
              {item.description}
            </Text>

            <Text style={styles.course}>
              Course: {item.course}
            </Text>

            <Text style={styles.price}>
              R{item.price}
            </Text>
          </View>
        )}
      />

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
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },

  foodBox: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  foodName: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  description: {
    fontSize: 15,
    marginBottom: 6,
  },

  course: {
    fontSize: 15,
    marginBottom: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 30,
    fontSize: 16,
  },
});