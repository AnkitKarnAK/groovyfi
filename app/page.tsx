'use client';
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useQuery } from 'react-query';

import SongCard from '@/components/SongCard';
import { getData } from '@/services';
import { genres } from '@/utils/constants';

const initialActiveSong = {
	id: 2,
	title: 'iPhone X',
	description:
		'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
	price: 899,
	discountPercentage: 17.94,
	rating: 4.44,
	stock: 34,
	brand: 'Apple',
	category: 'smartphones',
	thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
	images: [
		'https://i.dummyjson.com/data/products/2/1.jpg',
		'https://i.dummyjson.com/data/products/2/2.jpg',
		'https://i.dummyjson.com/data/products/2/3.jpg',
		'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
	],
};

const Home = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [activeSong, setActiveSong] = useState(initialActiveSong);
	const songs = [
		{ id: 1, name: 'sddaaff' },
		{ id: 2, name: 'aadddff' },
		{ id: 3, name: 'deadff' },
		{ id: 4, name: 'deefef' },
		{ id: 5, name: 'redff' },
		{ id: 6, name: 'defef' },
		{ id: 7, name: 'dfeff' },
		{ id: 8, name: 'dfffrw' },
	];

	const { data, isLoading, isError, error } = useQuery('myData', getData);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error! {(error as Error).message}</div>;
	}

	return (
		<div className='flex flex-col'>
			<div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
				<h2 className='font-bold text-3xl text-white'>Discover Music: Test</h2>
				<Dropdown
					className='w-32'
					menuClassName='bg-blue-500 text-blue-500 group-hover:bg-blue-300'
					controlClassName='bg-blue-900 text-blue-200'
					options={genres}
				></Dropdown>
			</div>

			<div className='flex flex-wrap sm:justify-start justify-center gap-8'>
				{data.products.map((song: any) => (
					<SongCard
						key={song.id}
						song={song}
						activeSong={activeSong}
						setActiveSong={setActiveSong}
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
