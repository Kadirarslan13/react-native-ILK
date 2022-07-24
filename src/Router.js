import React from "react";
import {} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";

import Categories from "./Pages/Categories"
import Meals from "./Pages/Meals"
import Detail from "./Pages/Detail"

const Stack = createNativeStackNavigator()

function Router (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Meals" component={Meals}/>
        <Stack.Screen name="Detail" component={Detail}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router