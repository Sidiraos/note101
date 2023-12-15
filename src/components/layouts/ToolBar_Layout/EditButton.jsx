import editIcon from '../../../assets/edit.svg';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constant/constant';
const EditButton = () => {
	return (
		<button className="h-10 w-10">
			<Link to={`${BASE_URL}/editer`}>
				<img
					src={editIcon}
					alt="folder icon"
					className="w-full h-full"
				/>
			</Link>
		</button>
	);
};
export default EditButton;
