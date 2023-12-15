import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { BASE_URL } from './src/constant/constant';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: BASE_URL,
	build: {
		sourcemap: true,
	},
});
