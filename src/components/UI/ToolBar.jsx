import TitlebarButtons from '../layouts/ToolBar_Layout/TitlebarButtons';
import FolderButtons from '../layouts/ToolBar_Layout/FolderButtons';
import EditButton from '../layouts/ToolBar_Layout/EditButton';
const ToolBar = () => {
	return (
		<header className="min-w-[8%] h-full shrink-0 flex flex-col items-center gap-10 px-2 pb-3 pt-12 border-e border-slate-700 
			               max-[301px]:absolute max-[301px]:translate-x-[-99%] max-[301px]:hover:translate-x-[1%]
						 max-[301px]:bg-slate-800 max[301px]:transition-transform 
						   max[301px]:duration-500 max[301px]:ease-in-out
						   max-[301px]:opacity-0
						   max-[301px]:hover:opacity-100
						   max-[301px]:transition-opacity

						   
						   ">
			<TitlebarButtons />
			<FolderButtons />
			<EditButton />
		</header>
	);
};
export default ToolBar;
