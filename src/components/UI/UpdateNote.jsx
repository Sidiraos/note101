import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editNote } from '../../features/redux/slices/notes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from '../../constant/constant';
const UpdateNote = () => {
	const dispatch = useDispatch();
	const params = useParams();
    const navigate = useNavigate();
	const notesData = useSelector((state) => state.notes);
	const { notes } = notesData;
	const note = notes.find((note) => note.id === params.id);
	console.log('update note est render');

	const [noteTitle, setNoteTitle] = useState(note.title);
	const [noteSubtitle, setNoteSubtitle] = useState(note.subtitle);
	const [noteBodyText, setNoteBodyText] = useState(note.bodyText);

    const isModified = ()=> {
        return noteTitle !== note.title || noteSubtitle !== note.subtitle || noteBodyText !== note.bodyText
    }
	const handleSubmit = (e) => {
		e.preventDefault();
        if (!isModified()) {
            return toast.error('Veuillez modifier au moins un champ');
        }

		dispatch(
			editNote({
				id: params.id,
				title: noteTitle,
				subtitle: noteSubtitle,
				bodyText: noteBodyText,
			})
		);
		toast.success('La note a bien été mise a jour');
        setTimeout(() => {
            navigate(`${BASE_URL}/note/${params.id}`);
        } , 3000)
	};
	return (
		<section className="flex-1 h-full w-full shrink-0 break-words text-ellipsis text-white px-5 pt-10 pb-5 overflow-y-auto">
			<ToastContainer />
			<h1 className="text-2xl font-semibold mb-10">
				Mettre à jour une note
			</h1>
			<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-2">
					<label className="text-lg " htmlFor="title">
						Le titre
					</label>
					<input
						type="text"
						name="title"
						id="title"
                        maxLength={25}
						value={noteTitle}
						onChange={(e) => setNoteTitle(e.target.value)}
						className="bg-slate-200 rounded-md shadow-md py-2 px-4 text-slate-800 w-full"
                        required
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-lg " htmlFor="sub-title">
						Le sous-titre
					</label>
					<input
						type="text"
						name="sub-title"
						id="sub-title"
                        maxLength={50}
						value={noteSubtitle}
						onChange={(e) => setNoteSubtitle(e.target.value)}
						required
						className="bg-slate-200 rounded-md shadow-md py-2 px-4 text-slate-800 w-full"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-lg " htmlFor="content">
						Le Contenu
					</label>
					<textarea
						name="content"
						id="content"
						value={noteBodyText}
						onChange={(e) => setNoteBodyText(e.target.value)}
						cols={30}
						rows={10}
						autoComplete="off"
						spellCheck="false"
						required
						className="resize-none bg-slate-200 rounded-md shadow-md py-4 px-4 text-slate-800 w-full"
					></textarea>
				</div>

				<div className="flex items-center justify-center">
					<input
						type="submit"
						value="Mettre à jour"
						className="bg-slate-200 rounded-md shadow-md py-2 px-4 text-slate-800 cursor-pointer hover:bg-slate-300"
					/>
				</div>
			</form>
		</section>
	);
};
export default UpdateNote;
