import Image from 'next/image';
import React from 'react';

import PlayPause from './PlayPause';

type SongCardProps = {
	song: any;
	activeSong: any;
	setActiveSong: React.Dispatch<React.SetStateAction<any>>;
	isPlaying: boolean;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};
const SongCard = ({
	song,
	activeSong,
	setActiveSong,
	isPlaying,
	setIsPlaying,
}: SongCardProps) => {
	const handlePause = () => {
		setIsPlaying(false);
	};
	const handlePlay = () => {
		setActiveSong(song);
		setIsPlaying(true);
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
				>
					<PlayPause
						activeSong={activeSong}
						song={song}
						isPlaying={isPlaying}
						handlePause={handlePause}
						handlePlay={handlePlay}
					/>
				</div>
				<Image
					src={song.thumbnail}
					className='w-full h-full rounded-lg'
					alt='song'
					width={218}
					height={224}
				/>
			</div>
			<div className='mt-4 flex flex-col'>
				<p className='font-semibold text-lg text-white truncate'>
					{song.title}
				</p>
				<p className='text-sm truncate text-gray-300 mt-1'>
					{song.description}
				</p>
			</div>
		</div>
	);
};

export default SongCard;
