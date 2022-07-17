import React, {useState} from "react";
import { SafeAreaView,View,Text,TextInput, Button,StyleSheet, FlatList } from "react-native";
import SearchBar from "./components/SearchBar";

function App () {


const [counter, setCounter]= useState(0)

function increaseCounter(){
  setCounter(counter + 1)
}



  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.inner_container} >
        <Text style = {styles.title}>Yapılacak</Text>
        <Text style = {styles.title}> {counter} </Text>
        
      </View>
      <SearchBar
      />

    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: "#263238"
  },
  inner_container: {
    flex:1,
    flexDirection:"row",
    },
    title: {
      fontSize:40,
      color: "orange"
    },

})