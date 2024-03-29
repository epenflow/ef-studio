'use client';
import Mapping from '@/utils/Mapping';
import React from 'react';
import TerminalVideo from './TerminalVideo';
import TerminalText from './TerminalText';
import TerminalCards from './TerminalCards';
import cn from '@/utils/cn';
const TerminalList = () => {
	const [activeList, setActiveList] = React.useState<number[]>([]);

	const handleClick = (id: number) =>
		setActiveList((prev) => {
			const current = prev.filter((item) => item !== id);
			return [...current, id];
		});
	return (
		<Mapping
			of={Array.from({ length: 2 })}
			render={(_, index) => {
				const activeIndex = activeList.findIndex((id) => id === index);
				const zIndex = activeIndex > 0 ? activeIndex * 100 : 50;
				return (
					<TerminalCards
						key={index}
						heading={
							index % 2 === 0
								? '__NDX-AKA-NEMEN__'
								: '__note__from/epenflow'
						}
						offsetPosition={{
							x: index % 2 === 0 ? '-55%' : '-45%',
							y: index % 2 === 0 ? '-55%' : '-45%',
						}}
						style={{
							zIndex: zIndex,
						}}
						onClick={() => handleClick(index)}
						contentClassNames={cn(
							index % 2 === 0 ? 'bg-black' : 'bg-white'
						)}>
						{index % 2 === 0 ? (
							<TerminalVideo videoId='bVlR2lrvWA0' />
						) : (
							<TerminalText />
						)}
					</TerminalCards>
				);
			}}
		/>
	);
};

export default TerminalList;
