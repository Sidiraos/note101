import NotesList from "../layouts/NavBar_Layout/NotesList";
const NavBar = () => {
	console.log('nav bar composant render')
	return (
		<nav className="bg-slate-100 min-w-[22%] h-full shrink-0 pb-5 hidden md:block overflow-y-auto relative">
			<h1 className="text-2xl py-5 font-medium text-center text-slate-900 h-24 flex justify-center items-center border-b border-gray-300 sticky top-0 bg-slate-100">Mes notes</h1>
			<NotesList />
		</nav>
	);
};
export default NavBar;
