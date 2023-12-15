import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constant/constant';
const NotesBtn = () => {
	console.log('notes btn render Note component')
	return (
		<button className="py-1 px-2 text-slate-800 bg-slate-300 rounded-md shadow">
			<Link to={BASE_URL}>Notes</Link>
		</button>
	);
};
export default NotesBtn;
