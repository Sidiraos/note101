import editIcon from '../../../assets/edit.svg';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constant/constant';
import FloatingButton from './FloatingButton';
import {useSelector , shallowEqual} from 'react-redux';
const EditButton = () => {
	const notesData = useSelector((state) => state.notes ,shallowEqual );
	const {notes} = notesData;
	console.log("edit btn toolbar")
	return (
		<button className="h-10 w-10">
			<Link to={`${BASE_URL}/editer`}>
				<img
					src={editIcon}
					alt="folder icon"
					className="w-full h-full"
				/>
			</Link>
			{
				notes.length === 0 && <FloatingButton />
			}
			
		</button>
	);
};
export default EditButton;
