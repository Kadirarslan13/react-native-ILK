import React from "react";
import {Text, View, Image} from 'react-native';
import styles from "./NewsPatika.style"

const NewsPatika = ({store}) => {
    return (
        <View   style= {styles.container}>
            <Image style={styles.image}source ={{uri: store.imgURL}}/>
            <Text style={styles.title}>{store.title}</Text>
            <Text style={styles.price}>{store.price}</Text>
            <Text style={styles.stock}>
          {store.inStock === true ? 'STOKTA VAR' : 'STOKTA YOK'}
        </Text>
        </View>
    );
};
export default NewsPatika;