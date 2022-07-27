import React from "react";
import { SafeAreaView,Text } from "react-native";
import styles from "./FavoritedJob.style"

function FavoritedJobs (){
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.title}> Hello FavoritedJobs</Text>
        </SafeAreaView>
    )
}
export default FavoritedJobs ;