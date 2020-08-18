import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Synth } from "tone"

const synth = new Synth().toDestination();


const Alert = () => {
  synth.triggerAttackRelease("C4", "8n");
}

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> Alert()} style={styles.button}>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(100,100,100)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: "rgb(255,255,255)",
    padding: 20,
    borderRadius: 5,
  }
});
