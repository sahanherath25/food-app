import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ResultDetail from "./ResultDetail";
import {useNavigation} from "@react-navigation/native";

const ResultsList = ({title, results}) => {

    const navigation = useNavigation();
    return (

        results.length===0?null: <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/*<Text>RESULTS :{results.length}</Text>*/}

            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate("resultScreen",{id:item.id,itemDetail:item})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                        )

                }}
            />

        </View>

    )
}

const styles = StyleSheet.create(
    {
        container:{
            marginBottom:10,
        },
        titleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            marginLeft:15,
            marginBottom:5,
        }
    }
)

export default ResultsList