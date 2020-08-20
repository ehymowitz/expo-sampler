import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { MembraneSynth, MetalSynth, Meter, UserMedia } from "tone"

const Memsynth = new MembraneSynth().toDestination();
const Metsynth = new MetalSynth().toDestination();

const meter = new Meter();
const mic = new UserMedia().connect(meter);

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

  const longPressHandle = () => {
    mic.open().then(() => {
      // promise resolves when input is available
      console.log("mic open");
      // print the incoming mic levels in decibels
      setInterval(() => console.log(meter.getValue()), 100);
    }).catch(e => {
      // promise is rejected when the user doesn't have or allow mic access
      console.log("mic not open");
    });
  }

  const releaseHandle = () => {
    console.log("test")
    mic.close()
  }

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
          onLongPress={()=>{longPressHandle()}}
          onMouseUp={()=>{releaseHandle()}}
          style={styles.button}
        />
      }
      keyExtractor={(item, index) => index.toString()}
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


