import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create ({
    container: {
        flex:4,
        backgroundColor:'lightgray',
        borderRadius: 5,
    },
    image: {
        width: Dimensions.get('window').width /2,
        height: Dimensions.get('window').height /3,
        backgroundColor: "white",   
        borderRadius:5,
        paddingRight:5,
        marginRight:10,
        margin:10,
},
    title: {
        fontWeight:"bold"
    },
    price: {
        color:"gray"
    },
    stock: {
        color: "red"
    },
});