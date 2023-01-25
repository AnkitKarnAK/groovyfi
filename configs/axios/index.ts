import axios from 'axios';

const szAxios = axios.create({
	baseURL: 'https://dummyjson.com',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
	},
});

export default szAxios;
