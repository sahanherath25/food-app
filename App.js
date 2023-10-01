import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home";
import SearchScreen from "./screens/SearchScreen";
import ResultShowScreen from "./screens/ResultShowScreen";

const Stack=createStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={"Home"}  component={Home}/>
              <Stack.Screen name={"search"}  component={SearchScreen}/>
              <Stack.Screen
                  name={"resultScreen"}
                  component={ResultShowScreen}
                  options={{
                      title: "Result Screen",
                      headerTitleAlign: "center",
                      headerStyle: {
                          backgroundColor: "purple",
                      },
                      headerTintColor: "white",
                      headerTitleStyle: {
                          fontWeight: "bold",
                          fontSize: 18,
                      },
                  }}

              />
          </Stack.Navigator>
      </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
