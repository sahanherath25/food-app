import {useEffect,useState} from "react";
import yelp from "../apis/yelp";
import {Alert} from "react-native";


const useResults=()=>{

    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const searchAPI = async (searchTerm) => {
        try{
            const response = await yelp.get(`/search`, {
                params: {
                    // TODO   define all the parameters to pass into our url
                    limit: 50,
                    term: searchTerm,
                    location: "san jose"
                }
            });
            //    Here we only need the restaurant data only which is  the businesses array
            setResults(response.data.businesses)
        }
        catch (e) {
            setError("SOMETHING WENT WRONG WHEN MAKING THE API REQUEST");
            Alert.alert(e.toString())
        }
    }
    console.log(results)

    useEffect(()=>{
        searchAPI("pasta")
    },[])

    return [error,searchAPI,results]

}

export default useResults;