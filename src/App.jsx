import NavBar from './components/UI/NavBar';
import ToolBar from './components/UI/ToolBar';
import UpdateNote from './components/UI/UpdateNote';
import Menu from './components/UI/Menu';
import Edit from './components/UI/Edit';
import Note from './components/UI/Note';
import Error from './components/UI/ErrorPage';

import { useDispatch } from 'react-redux';
import { fetchNotesData } from './features/redux/slices/notes';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import clickIcon from './assets/cursor-click.svg';
import { BASE_URL } from './constant/constant';
function App() {
	console.log('app is rendered');
	const [isDisplayedToolBar, setIsDisplayedToolBar] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchNotesData());
	}, []);

	return (
		<div className="h-screen bg-slate-800 flex overflow-x-hidden">
			<div
				className="rounded-full bg-slate-100 w-8 h-8 flex items-center justify-center cursor-pointer fixed animate-bounce top-1/4 right-0 min-[301px]:hidden"
				onClick={() => {
					setIsDisplayedToolBar(!isDisplayedToolBar);
				}}
			>
				<img
					src={clickIcon}
					alt="cursor click icon"
					className="w-full h-full object-cover"
				/>
			</div>

			<ToolBar toolBar={isDisplayedToolBar} />
			<NavBar />

			<Routes>
				<Route path={BASE_URL} index element={<Menu />} />

				<Route path={BASE_URL + '/editer'} element={<Edit />}/>
				<Route path={BASE_URL + '/editer/:id'} element={<UpdateNote />} />


				<Route path={BASE_URL + '/note'}>
					<Route path=":id" element={<Note />} />
				</Route>

				<Route
					path="*"
					element={
						<Error errMsg={"Le chemin specifié n'existe pas"} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
