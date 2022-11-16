
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign,Ionicons } from '@expo/vector-icons';

function Currency() {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.currencySelection}>
      <Ionicons name="person-circle-outline" size={24} color="black" />
        <Text style={styles.currencyName}>GMD</Text>
        <AntDesign name="caretdown" size={20} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#242424",
    padding: 7,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  mainText: {
    fontSize: 24,
  },

  card: {
    borderWidth: 1,
    borderColor: '#aaaaaaaa',
    borderRadius: 5,
    padding: 5
  },

  currencySelection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  currencyName: {
    fontSize: 16
  }
});

export default Currency