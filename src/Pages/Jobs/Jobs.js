import React from "react";
import { SafeAreaView,Text } from "react-native";
import styles from "./Jobs.style"

function Jobs (){
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.title}> Hello Jobs</Text>
        </SafeAreaView>
    )
}
export default Jobs ;