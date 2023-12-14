const Menu = () => {
	return (
		<section className="flex-1 h-full shrink-0 break-words text-ellipsis text-white px-5 pt-10 pb-5">
			<h1 className="text-3xl">Bienvenue sur Notes101</h1>
			<p className="mt-3">
				Notes101 est une application qui permet de créer des notes et de
				les partager avec d'autres personnes.
			</p>

			<div
				className="grid auto-rows-[100px] justify-center gap-4 mt-5 text-slate-800"
				style={{
					gridTemplateColumns:
						'repeat(auto-fill , minmax(175px, 1fr)',
				}}
			>
				<button	 className="bg-slate-100 rounded-md shadow-md py-3 px-4 flex flex-col justify-center ">
					<p className="font-semibold text-lg">Cuisine</p>
					<p className="text-slate-700">Préparer des crepes</p>
				</button>
				<button	 className="bg-slate-100 rounded-md shadow-md py-3 px-4 flex flex-col justify-center ">
					<p className="font-semibold text-lg">Cuisine</p>
					<p className="text-slate-700">Préparer des crepes</p>
				</button>
				<button	 className="bg-slate-100 rounded-md shadow-md py-3 px-4 flex flex-col justify-center ">
					<p className="font-semibold text-lg">Cuisine</p>
					<p className="text-slate-700">Préparer des crepes</p>
				</button>
			</div>
		</section>
	);
};
export default Menu;
