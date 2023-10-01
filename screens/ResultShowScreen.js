import React, {useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import yelp from "../src/apis/yelp";

const ResultShowScreen=(props)=>{

    //Creating a State Variable
    const [result,setResult]=useState(null);



    const {itemDetail,id}=props.route.params;

    console.log("PARAMS OBJECT IS Like ",props.route.params)
    console.log("ID IS ",id)
    console.log("Props of Route  BLA BLA BLA ",)
    console.log("Props of Route ",props.route.params.itemDetail)

    //TODO Creating a Helper Function to get the Current Restaurant Detail

    const getResults=async (id)=>{
        const response=await yelp.get(`/${id}`);
        // response.data;
        setResult(response.data)
    }

    useEffect(()=>{
        getResults(id)
        console.log("RESULTS ",result)
    },[])


    if(!result){
        return null
    }

    return (
        <View style={styles.container}>
            <Text>DETAIL PAGE</Text>
            <Text>Resturant Name {itemDetail.name}</Text>
            <Text>Title {itemDetail.title}</Text>

            <FlatList
                data={result.photos}
                scrollEnabled={true}
                renderItem={({item})=>{

                    // return <Image style={styles.image} source={{uri:itemDetail.image_url}}/>
                    return <Image style={styles.image} source={{uri:item}}/>
                }
            }/>

        </View>
    )
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            marginHorizontal:10,
            borderStyle:"dotted",
            borderColor:"red",
            borderWidth:2
        },
        image:{
            width:"100%",
            height:250,
            marginVertical:5,
        },

    }
)

export  default  ResultShowScreen