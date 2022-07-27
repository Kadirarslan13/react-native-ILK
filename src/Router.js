import React from "react";
import {SafeAreaView,Text} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Jobs from "./Pages/Jobs";
import FavoritedJobs from "./Pages/FavoritedJobs";

const Tab = createBottomTabNavigator()

function Router () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Jobs" component={Jobs} options={{headerTintColor:"red"}} />
        <Tab.Screen name="FavoritedJobs" component={FavoritedJobs} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Router;