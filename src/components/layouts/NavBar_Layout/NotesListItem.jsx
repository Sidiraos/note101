import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constant/constant';
import React from 'react';
const NotesListItem = ({ note }) => {
	console.log('list item nav bar render');
	return (
		<li className=" hover:bg-slate-200 transition-colors duration-150 ease-in-out">
			<Link
				to={`${BASE_URL}/note/${note.id}`}
				className="py-4 px-4 flex flex-col justify-center w-full text-slate-800"
			>
				<span className="text-xl text-start">{note.title}</span>
				<span className="text-slate-700 text-lg">{note.subtitle}</span>
			</Link>
		</li>
	);
};
export default React.memo(NotesListItem);
