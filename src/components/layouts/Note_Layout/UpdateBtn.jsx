import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constant/constant';
const UpdateBtn = ({ noteId }) => {
	console.log('update btn note component');
	return (
		<Link
			to={`${BASE_URL}/editer/${noteId}`}
			className="py-1 px-2 text-slate-100 bg-green-600 rounded-md shadow"
		>
			Mettre à jour
		</Link>
	);
};
export default UpdateBtn;
