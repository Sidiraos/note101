const NavBar = () => {
	return (
		<nav className="bg-slate-100 min-w-[22%] h-full shrink-0 pt-5 pb-5 hidden md:block">
			<h1 className="text-2xl font-medium text-center text-slate-900 h-20 flex justify-center items-center border-b border-gray-300 ">Mes notes</h1>
			<ul>
				<li className="border-b border-gray-300 hover:bg-slate-200 transition-colors duration-150 ease-in-out">
					<button className="py-4 px-4 flex flex-col justify-center w-full text-slate-800">
						<p className="text-xl">Cuisine</p>
						<p className="text-slate-700 text-lg">Préparer des crepes</p>
					</button>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
