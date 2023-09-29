import React, {useState,useEffect} from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../src/apis/yelp";
import useResults from "../src/hooks/useResults";

const SearchScreen = () => {

    const [term, setTerm] = useState("");

    const [error,searchAPI,results]=useResults()

    return (
        <View style={styles.mainWrapper}>
            <Text>HELLO</Text>
            <SearchBar
                searchTerm={term}
                onPress={(newTerm) => setTerm(newTerm)}
                onTermSubmit={()=>searchAPI(term)}
            />
            <Text>We have found {results.length} Results Found </Text>
            {error? <Text style={{color:"red",fontSize:15,fontWeight:"bold"}}>{error}</Text>:null}
        </View>
    )
}

const styles = StyleSheet.create(
    {
        mainWrapper: {
            flex: 1,
        }
    }
)
export default SearchScreen;