import folderIcon from '../../../assets/folder.svg';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constant/constant';
const FolderButtons = () => {
	console.log('folder btn toolbar render');
	return (
		<button className="h-10 w-10">
			<Link to={BASE_URL}>
				<img
					src={folderIcon}
					alt="folder icon"
					className="w-full h-full"
				/>
			</Link>
		</button>
	);
};
export default FolderButtons;
