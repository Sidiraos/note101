import { BASE_URL } from '../../../constant/constant';
import { Link } from 'react-router-dom';

const NotesBtn = () => {
	console.log('notes btn render Note component');
	return (
		<Link
			className="py-1 px-2 text-slate-800 bg-slate-300 rounded-md shadow"
			to={`${BASE_URL}/editer`}
		>
			Notes
		</Link>
	);
};
export default NotesBtn;
