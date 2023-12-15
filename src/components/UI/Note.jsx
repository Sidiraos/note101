import GroupBtn from '../layouts/Note_Layout/GroupBtn';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Error from './ErrorPage';
import 'react-toastify/dist/ReactToastify.css';
const Note = () => {
	console.log('note composant render');
	const params = useParams();
	// console.log(params);
	const notesData = useSelector((state) => state.notes, shallowEqual);
	const { notes } = notesData;
	// console.log(notes);
	const note = notes.find((note) => note.id === params.id);
	// console.log(note);
	!note && toast.error('La note a été supprimé');
	const noteUI = note && (
		<>
			<div className="sticky top-0 bg-slate-800 pt-10 pb-5">
				<GroupBtn noteId={params.id} />
				<h1 className="text-3xl mt-10">{note.title}</h1>
				<h2 className="text-xl mt-2">{note.subtitle}</h2>
			</div>
			<p className="mt-3 text-slate-300 sm:text-lg leading-relaxed">
				{note.bodyText}
			</p>
		</>
	);
	return (
		<section className="flex-1 h-full shrink-0 break-words text-ellipsis text-white px-5 pb-5 w-full overflow-y-auto relative">
			{note ? (
				noteUI
			) : (
				<>
					<ToastContainer />
					<Error errMsg={"La note n'existe pas"} />
				</>
			)}
		</section>
	);
};
export default Note;
