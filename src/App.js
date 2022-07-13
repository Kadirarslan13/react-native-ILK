import React from "react";
import {SafeAreaView,
    FlatList,
    StyleSheet,
    TextInput, 
    Text} from "react-native"
import NewsPatika from "./components/NewsPatika";
import Patika_data from "./Patika_data.json";

function App (){
  const [text, onChangeText] = React.useState("Ara..");
  const [number, onChangeNumber] = React.useState(null);

  const renderPatika = ({item}) => <NewsPatika store= {item} />
  const numColumns = 2;
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.head}>PATIKASTORE</Text>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}> </TextInput>
        <FlatList
        data={Patika_data}
        renderItem = {renderPatika}
        numColumns = {numColumns}
        />
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderRadius:10,
    padding: 10,
    backgroundColor: "darkgray",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
      
  },
  head : {
    fontSize: 50,
    color: "purple",
  }
})

export default App;