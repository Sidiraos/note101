import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constant/constant';
import React from 'react';
const MenuItem = ({ note }) => {
	console.log('item menu ');
	return (
		<li>
			<Link
				to={`${BASE_URL}/note/${note.id}`}
				className="bg-slate-100 rounded-md shadow-md py-3 px-4 flex flex-col justify-center w-full h-full"
			>
				<span className="font-semibold text-lg">{note.title}</span>
				<span className="text-slate-700 text-start">{note.subtitle}</span>
			</Link>
		</li>
	);
};
export default React.memo(MenuItem);
