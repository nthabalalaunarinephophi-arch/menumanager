import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.menuBox}>

        <Text style={styles.title}>MENU</Text>

        <View style={styles.utensils}>
          <View style={styles.fork}>
            <View style={styles.forkTop}>
              <View style={styles.forkLine} />
              <View style={styles.forkLine} />
              <View style={styles.forkLine} />
              <View style={styles.forkLine} />
            </View>
            <View style={styles.forkHandle} />
          </View>

          <View style={styles.spoon}>
            <View style={styles.spoonHead} />
            <View style={styles.spoonHandle} />
          </View>

          <View style={styles.knife}>
            <View style={styles.knifeBlade} />
            <View style={styles.knifeHandle} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/chef')}
        >
          <Text style={styles.buttonText}>Chef</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/menu')}
        >
          <Text style={styles.buttonText}>View Menu</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuBox: {
    width: '85%',
    height: '80%',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#555',
    letterSpacing: 3,
  },

  utensils: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 70,
  },

  fork: {
    alignItems: 'center',
    transform: [{ rotate: '-25deg' }],
  },

  forkTop: {
    flexDirection: 'row',
  },

  forkLine: {
    width: 5,
    height: 35,
    backgroundColor: '#555',
    marginHorizontal: 2,
    borderRadius: 3,
  },

  forkHandle: {
    width: 7,
    height: 75,
    backgroundColor: '#555',
    borderRadius: 4,
  },

  spoon: {
    alignItems: 'center',
    marginLeft: 25,
    transform: [{ rotate: '15deg' }],
  },

  spoonHead: {
    width: 35,
    height: 50,
    backgroundColor: '#555',
    borderRadius: 20,
  },

  spoonHandle: {
    width: 7,
    height: 65,
    backgroundColor: '#555',
    borderRadius: 4,
  },

  knife: {
    alignItems: 'center',
    marginLeft: 25,
    transform: [{ rotate: '15deg' }],
  },

  knifeBlade: {
    width: 25,
    height: 70,
    backgroundColor: '#555',
    borderRadius: 5,
  },

  knifeHandle: {
    width: 8,
    height: 55,
    backgroundColor: '#555',
    borderRadius: 4,
  },

  button: {
    width: 180,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
});