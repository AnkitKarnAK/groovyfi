import React from 'react';

type SongCardProps = {
	song: any;
	index: any;
};
const SongCard = ({ song, index }: SongCardProps) => {
	const activeSong = {
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

	return (
		<div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
			<div className='relative w-full h-56 group'>
				<div
					className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
						activeSong?.title === song.title
							? 'flex bg-black bg-opacity-70'
							: 'hidden'
					}`}
				></div>
			</div>
		</div>
	);
};

export default SongCard;
