import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MusicSection, BackSection, BackgroundSection } from '../components';
import { Girl } from '../assets'
import { ClientRequest } from 'http';

export const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={{ color: '#E8990D', fontSize: 20, textAlign: "center" }}>#Staysafe</Text>
        <Text style={{ color: '#132D84', fontSize: 30, textAlign: "center", marginTop: 8 }}>The Journey</Text>
        <Text style={{ color: '#132D84', fontSize: 30, textAlign: "center" }}>Begins Inside</Text>
      </View>
      <View style={{ position: "absolute"}}>
        <BackgroundSection />
        <BackSection />
      </View>
      <Girl />
      <View style={styles.main}>
        <MusicSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFE2AB'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFE2AB',
    width: '100%',
  },
  textcontainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    marginTop: 105,
    width: 194,
    marginLeft: '25%'
  }
});
