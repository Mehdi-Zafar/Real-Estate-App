import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'dea7d50e4cmsh3988ca60d841694p1daa4cjsndca94800ad96',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}