import {Button, Text, View} from "react-native";
import React from "react";

const Home=({navigation})=>{

    return(
        <View>
          <Text>Home Screen</Text>
            <Button title={"Search Restuarant"} onPress={()=>navigation.navigate("search")}/>
        </View>
    )
}

export default Home;