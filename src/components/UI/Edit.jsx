import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../features/redux/slices/notes';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [bodyText, setBodyText] = useState('');
	console.log('edit est render');
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addNote({
				id: nanoid(),
				title,
				subtitle,
				bodyText,
			})
		);
		toast.success('La note a bien été ajoutée');
		setTitle('');
		setSubtitle('');
		setBodyText('');
	};
	return (
		<section className="flex-1 h-full w-full shrink-0 break-words text-ellipsis text-white px-5 pt-10 pb-5 overflow-y-auto">
			<ToastContainer />
			<h1 className="text-2xl font-semibold mb-10">Ajouter une note</h1>
			<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-2">
					<label className="text-lg " htmlFor="title">
						Le titre
					</label>
					<input
						type="text"
						name="title"
						id="title"
						required
						maxLength={25}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="bg-slate-200 rounded-md shadow-md py-2 px-4 text-slate-800 w-full"
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
						value={subtitle}
						onChange={(e) => setSubtitle(e.target.value)}
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
						cols={30}
						rows={10}
						autoComplete="off"
						spellCheck="false"
						value={bodyText}
						onChange={(e) => setBodyText(e.target.value)}
						required
						className="resize-none bg-slate-200 rounded-md shadow-md py-4 px-4 text-slate-800 w-full"
					></textarea>
				</div>

				<div className="flex items-center justify-center">
					<input
						type="submit"
						value="Enregistrer"
						className="bg-slate-200 rounded-md shadow-md py-2 px-4 text-slate-800 cursor-pointer hover:bg-slate-300"
					/>
				</div>
			</form>
		</section>
	);
};
export default Edit;
