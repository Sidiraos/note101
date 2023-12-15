import TitleMenu from '../layouts/Menu_Layout/TitleMenu';
import ListMenuItems from '../layouts/Menu_Layout/ListMenuItems';

const Menu = () => {
	console.log('menu render');
	return (
		<section className="flex-1 h-full shrink-0 break-words text-ellipsis text-white px-5 pt-10 pb-5 overflow-y-auto">
			<TitleMenu />
			<ListMenuItems />
		</section>
	);
};
export default Menu;
