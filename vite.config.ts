/**
 * Vite 설정 모듈
 *
 * @author RWB
 * @since 2025.07.23 Wed 17:34:54
 */

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	base: 'modenews',
	plugins: [
		react(),
		tailwindcss(),
		tsconfigPaths()
	]
});