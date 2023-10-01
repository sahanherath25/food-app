import {Alert, Image, StyleSheet, Text, TextInput, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import yelp from "../src/apis/yelp";

const SearchBar = ({searchTerm,onPress,onTermSubmit}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search"  style={styles.iconStyle}  />
            <TextInput
                placeholder={"Search"}
                value={searchTerm}
                style={styles.inputStyle}
                onChangeText={(term)=>onPress(term)}
                placeholderTextColor={"#451952"}
                autoCorrect={false}
                autoCapitalize={"none"}
                onEndEditing={onTermSubmit}

            />

        </View>
    )
}

const styles = StyleSheet.create(
    {
        backgroundStyle: {
            marginTop:15,
            backgroundColor: "#f0EEEE",
            height: 50,
            marginHorizontal: 15,
            flexDirection:"row",
            marginBottom:10,

        },
        inputStyle: {
            // borderStyle: "solid",
            // borderColor: "black",
            // borderWidth: 1,
            flex:1,
            fontSize:18, //default is 14
        },
        iconStyle: {
            fontSize:30,
            color:"black",
            alignSelf:"center",
            marginHorizontal:15
        }
    }
)

export default SearchBar;