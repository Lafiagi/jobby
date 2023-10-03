import { useState, useEffect } from "react";
import axios from "axios";
import Constants from 'expo-constants';

const apiKey = Constants?.expoConfig?.extra.apiKey;

export default useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }, params: { ...query }
    };

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.request(options);
            setData(response.data.data);

        } catch (error) {
            setError(error)
        }
        finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData()
    }
    return { data, isLoading, error, refetch }
}