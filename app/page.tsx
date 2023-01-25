'use client';
import React from 'react';
import { useQuery } from 'react-query';

import SongCard from '@/components/SongCard';
import { getData } from '@/services';
import { genres } from '@/utils/constants';

const Home = () => {
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

	console.log({ data });

	return (
		<div className='flex flex-col'>
			<div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
				<h2 className='font-bold text-3xl text-white'>Discover Music: Test</h2>
				<select className='bg-gray-900 text-gray-300 p-3 text-sm rounded-lg outline-none'>
					{genres.map((genre) => (
						<option
							value={genre.value}
							key={genre.id}
							className='cursor-pointer'
						>
							{genre.title}
						</option>
					))}
				</select>
			</div>

			<div className='flex flex-wrap sm:justify-start justify-center gap-8'>
				{data.products.map((song, index) => (
					<SongCard key={song.id} song={song} index={index} />
				))}
			</div>
		</div>
	);
};

export default Home;
