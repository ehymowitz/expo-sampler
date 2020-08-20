import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { MembraneSynth, MetalSynth } from "tone"
import MpcButtons from './components/mpc_buttons'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MpcButtons/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'rgb(100,100,100)',
    alignItems: 'center',
  }
});
