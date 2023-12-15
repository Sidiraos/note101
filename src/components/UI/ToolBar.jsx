import TitlebarButtons from '../layouts/ToolBar_Layout/TitlebarButtons';
import FolderButtons from '../layouts/ToolBar_Layout/FolderButtons';
import EditButton from '../layouts/ToolBar_Layout/EditButton';
import React from 'react';
const ToolBar = ({ toolBar }) => {
	console.log('toolbar render');
	const dynamicClasses = `overflow-y-auto min-w-[8%] h-full shrink-0 flex flex-col items-center gap-10 px-2 pb-3 pt-12 border-e border-slate-700 will-change-transform max-[301px]:absolute max-[301px]:translate-x-[-99%] max-[301px]:hover:translate-x-[1%] max-[301px]:bg-slate-800 ${
		toolBar
			? 'max-[301px]:translate-x-[1%]'
			: 'max-[301px]:translate-x-[-99%]'
	}`;

	return (
		<header className={dynamicClasses}>
			<TitlebarButtons />
			<FolderButtons />
			<EditButton />
		</header>
	);
};
export default React.memo(ToolBar);
