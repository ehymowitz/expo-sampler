import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { MembraneSynth } from "tone"

const synth = new MembraneSynth().toDestination();

const DATA = [
  {
    id: 0,
    tone: "A1",
    length: "8n"
  },
  {
    id: 1,
    tone: "B1",
    length: "8n"
  },
  {
    id: 2,
    tone: "C1",
    length: "8n"
  },
  {
    id: 3,
    tone: "D2",
    length: "8n"
  },
  {
    id: 4,
    tone: "E1",
    length: "8n"
  },
    {
    id: 5,
    tone: "F1",
    length: "8n"
  }

]

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem = {(data) =>
          <TouchableOpacity
            onPress={() => {
                synth.triggerAttackRelease(`${data.item.tone}`, `${data.item.length}`)
                window.navigator.vibrate(200);
              }
            }

            style={styles.button}/>
        }
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'rgb(100,100,100)',
    alignItems: 'center',
  },

  button: {
    backgroundColor: "rgb(255,255,255)",
    padding: 70,
    margin: 20,
    borderRadius: 5,
  }
});
