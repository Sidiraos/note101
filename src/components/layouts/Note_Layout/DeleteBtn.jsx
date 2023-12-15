import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../features/redux/slices/notes';
import { useNavigate } from 'react-router-dom';


const DeleteBtn = ({ noteId }) => {
	const navigate = useNavigate();
	console.log('delete btn Note component');
	const dispatch = useDispatch();
	const handleDelete = () => {
    dispatch(deleteNote(noteId));
	};
	return (
		<>
			<button
				className="py-1 px-2 text-slate-100 bg-red-600 rounded-md shadow"
				onClick={handleDelete}
			>
				Supprimer
			</button>
		</>
	);
};
export default DeleteBtn;
