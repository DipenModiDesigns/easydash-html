import { resolve } from 'path';
import * as fs from 'fs';

export default function multipagePlugin() {
	return {
		name: 'easydash',
		configResolved(config) {
			const pagesDir = resolve(__dirname, 'pages');
			const entries = {};

			const scanDirectory = (dir) => {
				const files = fs.readdirSync(dir);
				for (const file of files) {
					const filePath = resolve(dir, file);
					if (fs.statSync(filePath).isFile() && file.endsWith('.html')) {
						entries[filePath] = filePath; // Use original filename by default
					} else if (fs.statSync(filePath).isDirectory()) {
						scanDirectory(filePath); // Recursively scan subdirectories
					}
				}
			};

			scanDirectory(pagesDir);

			config.build.rollupOptions.input = {
				...config.build.rollupOptions.input,
				...entries,
			};
		},
	};
}
