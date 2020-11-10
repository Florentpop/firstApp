import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Component/Header'

import profile from './assets/profile.jpeg'

export default function App() {
  return (
     <View style={styles.container}>
     <View>
      <Header />
      <StatusBar style="auto" />
    </View>
      <Image source={profile} style={styles.image}/>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label,styles.info]}>Tony Yayo</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label,styles.info]}>tony@yayo.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label,styles.info]}>Male</Text>
      </View>
     
    </View>

    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
  },
  image:{
    marginTop:100,
    width:150,
    height:150,
    marginBottom:50,
    alignSelf:"center",
    borderRadius:75
  },
  detailContainer:{
    flexDirection:"row",
    marginHorizontal:15,
    marginVertical:5
  },

  label:{
    borderColor:"black",
    borderWidth:1,
    fontSize:20,
    flex:2.5,
    paddingHorizontal:10
  },

  info:{
    flex:7.5
  }
  

});
