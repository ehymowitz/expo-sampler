import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MembraneSynth, MetalSynth } from "tone"

const Memsynth = new MembraneSynth().toDestination();
const Metsynth = new MetalSynth().toDestination();

const DATA = [
  {
    id: 0,
    synth: Memsynth,
    tone: "A3",
    length: "8n"
  },
  {
    id: 1,
    synth: Memsynth,
    tone: "D3",
    length: "8n"
  },
  {
    id: 2,
    synth: Memsynth,
    tone: "C1",
    length: "8n"
  },
  {
    id: 3,
    synth: Metsynth,
    tone: "D1",
    length: "1n"
  },
  {
    id: 4,
    synth: Metsynth,
    tone: "A0",
    length: "1n"
  },
    {
    id: 5,
    synth: Metsynth,
    tone: "E2",
    length: "1n"
  }
]

export default function MpcButtons() {
  return (
    <FlatList
      data={DATA}
      renderItem = {(data) =>
        <TouchableOpacity
          onPress={() => {
            data.item.synth.triggerAttackRelease(`${data.item.tone}`, `${data.item.length}`)
            window.navigator.vibrate(50);
            }
          }
          style={styles.button}/>
      }
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(255,255,255)",
    padding: 70,
    margin: 20,
    borderRadius: 5,
  }
});


