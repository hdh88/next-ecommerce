import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';

export default function Navbar() {
	return (
		<div className='h-20 px-4 md:px-8 lg:x-16 xl:px-32 2xl:px-64 relative'>
			{/* Mobile */}
			<div className='md:hidden h-full flex items-center justify-between'>
				<Link href='/'>
					<div className='text-2xl tracking-wide'>LAMA</div>
				</Link>
				<Menu />
			</div>
			{/* Bigger Screens */}
			<div className='hidden md:flex items-center justify-between gap-8 h-full'>
				{/* Left */}
				<div className='w-1/3 xl:w-1/2 flex items-center gap-3'>
					<Link href='/' className='flex items-center gap-3'>
						<Image
							src='/logo.png'
							alt='logo'
							width={24}
							height={24}
						/>
						<div className='text-2xl tracking-wide'>LAMA</div>
					</Link>
					<div className='hidden xl:flex gap-4'>
						<Link href='/'>Homepage</Link>
						<Link href='/'>Shop</Link>
						<Link href='/'>Deals</Link>
						<Link href='/'>About</Link>
						<Link href='/'>Contact</Link>
					</div>
				</div>
				{/* Right */}
				<div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
					<SearchBar />
					<NavIcons />
				</div>
			</div>
		</div>
	);
}
