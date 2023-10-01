import React, {useState,useEffect} from "react";
import {Alert, ScrollView, StyleSheet, Text, View} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../src/apis/yelp";
import useResults from "../src/hooks/useResults";
import ResultsList from "../components/ResultsList";



const SearchScreen = () => {

    // console.log("PROPS OBJECT ",props)
    const [term, setTerm] = useState("");
    const [error,searchAPI,results]=useResults();

    const filterResultsByPrice=(price)=>{
        //TODO price $ || $$ || $$$
        return  results.filter((result)=>{
            return result.price===price
        })

    }
    return (
        <>
            <SearchBar
                searchTerm={term}
                onPress={(newTerm) => setTerm(newTerm)}
                onTermSubmit={()=>searchAPI(term)}
            />
            {error? <Text style={{color:"red",fontSize:15,fontWeight:"bold"}}>{error}</Text>:null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice("$")}  title={"Cost Effective"}/>
                <ResultsList results={filterResultsByPrice("$$")} re title={"Bit Pricier"} />
                <ResultsList results={filterResultsByPrice("$$$")} title={"Big Spender"} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create(
    {
        mainWrapper: {
            // borderColor:"red",
            // borderStyle:"solid",
            // borderWidth:2,
            flex: 1,
            // marginLeft:30,
        }
    }
)
export default SearchScreen;