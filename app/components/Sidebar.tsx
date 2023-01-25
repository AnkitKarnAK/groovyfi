import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
	HiOutlineHashtag,
	HiOutlineHome,
	HiOutlineMenu,
	HiOutlinePhotograph,
	HiOutlineUserGroup,
} from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

const links = [
	{ name: 'Discover', path: '/', icon: HiOutlineHome },
	{ name: 'Around You', path: '/around-you', icon: HiOutlinePhotograph },
	{ name: 'Top Artists', path: '/top-artists', icon: HiOutlineUserGroup },
	{ name: 'Top Charts', path: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }: any) => (
	<div className='mt-10'>
		{links.map((item) => (
			<Link
				key={item.name}
				href={item.path}
				className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
				onClick={() => handleClick && handleClick()}
			>
				<item.icon className='w-6 h-6 mr-2' />
				{item.name}
			</Link>
		))}
	</div>
);

const Sidebar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#00183c]'>
				<Image
					src='next.svg'
					alt='logo'
					className='w-full h-14 object-contain'
					width={208}
					height={56}
				/>
				<NavLinks />
			</div>

			{/* Mobile sidebar */}
			<div className='absolute md:hidden block top-6 right-3'>
				{!mobileMenuOpen ? (
					<HiOutlineMenu
						className='w-6 h-6 mr-2 text-white'
						onClick={() => setMobileMenuOpen(true)}
					/>
				) : (
					<RiCloseLine
						className='w-6 h-6 mr-2 text-white'
						onClick={() => setMobileMenuOpen(false)}
					/>
				)}
			</div>

			<div
				className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#002a6a] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
					mobileMenuOpen ? 'left-0' : '-left-full'
				}`}
			>
				<Image
					src='next.svg'
					alt='logo'
					className='w-full h-14 object-contain'
					width={208}
					height={56}
				/>
				<NavLinks handleClick={() => setMobileMenuOpen(false)} />
			</div>
		</>
	);
};

export default Sidebar;
