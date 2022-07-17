import React, { useState } from "react";
import { Button, TextInput, View } from "react-native"
import styles from "./SearchBar.style"

const SearchBar = () => {
    const [counter, setCounter]= useState(0)
    function increaseCounter (){
        setCounter(counter + 1 )
    }

    return (
        <View style=  {styles.container}>
            <TextInput style = {styles.search} 
            placeholder="Yapılacak..."        
            />
            <View style = {styles.button_container}>
            <Button 

            color={"white"}
            title ="Kaydet"
            onPress={increaseCounter} 
            />
            </View>
        </View>
    )
}
export default SearchBar;