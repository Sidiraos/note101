import { useSelector, shallowEqual } from 'react-redux';
import MenuItem from './MenuItem';
import spinnerLogo from '../../../assets/spinner.svg';

const ListMenuItems = () => {
	console.log('child menu render');
	const notesData = useSelector((state) => state.notes, shallowEqual);
	// console.log(notesData);
	const { notes, loading, error } = notesData;
	// console.log(loading, error);
	console.log(notes);

	return loading ? (
		<div>
			<img src={spinnerLogo} alt="loading logo" />{' '}
			<p className="text-slate-100">chargement des notes</p>
		</div>
	) : error && notes.length === 0 ? (
		<p className="text-red-500 text-center mt-8 flex flex-col gap-1">
			<span>on n'a pas pu recuperer les notes de la base de données mais</span>
			<span className='text-slate-200'>Vous Pouvez crée une note en cliquant sur le bouton à gauche</span>
		</p>
	) : (
		<ul
			className="grid auto-rows-[100px] gap-4 mt-5 text-slate-800"
			style={{
				gridTemplateColumns: 'repeat(auto-fill , minmax(175px, 1fr)',
				justifyContent: 'center',
			}}
		>
			{notes.length > 0 &&
				notes.map((note) => <MenuItem key={note.id} note={note} />)}
		</ul>
	);
};

export default ListMenuItems;
